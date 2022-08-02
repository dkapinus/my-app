import { userAPI } from '../API/api';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  
   
        users: [
   //       {id:1,photoUrl:'https://caesar-dog.ru/img/land/maltese/shen3.jpg', followed: true, fullname:'Moyk', status:'I am a boss' ,location:{city:'Minsk',country:'Belarus'}},
   //   {id:2,photoUrl:'https://caesar-dog.ru/img/land/maltese/shen3.jpg', followed:false, fullname:'Mortyk',status:'I am a boss' ,location:{city:'Minsk',country:'Belarus'}},
   //   {id:3,photoUrl:'https://caesar-dog.ru/img/land/maltese/shen3.jpg', followed:true, fullname:'Mortyk',status:'I am a bos' ,location:{city:'Singapure',country:'Belarus'}},
   //   {id:4,photoUrl:'https://caesar-dog.ru/img/land/maltese/shen3.jpg', followed:false,fullname:'Mortyk', status:'I am a bos' ,location:{city:'Minsk',country:'Belarus'}},
   //   {id:5,photoUrl:'https://caesar-dog.ru/img/land/maltese/shen3.jpg', followed:true,fullname:'Mortyk', status:'I am a bos' ,location:{city:'Minsk',country:'Belarus'}},
         ], 
         pageSize:10,
         totalUsersCount:0,
         currentPage: 1,
         isFetchings:false,
         followingInProgress:[],
         
   

};

const usersReducer = (state = initialState,action) => {
 
 

switch (action.type ) {

case FOLLOW:
         return ({
            ...state,
            users: state.users.map( u => {
               if (u.id === action.userId) {
                   return {...u,followed:true}
               }
               return u;
            } )
         })
          
 

case UNFOLLOW: 
         return {
             ...state,
             users: state.users.map( u => {
                if (u.id === action.userId) {
                    return {...u,followed:false}
                }
                return u;
             } )
         }
        
case SET_USERS: {
      return  {
    ...state,
    users: action.users}
  } 
  case SET_CURRENT_PAGE: {
   return  {
      ...state,currentPage:action.currentPage}
   }
     
   case SET_TOTAL_USERS_COUNT: {
      return  {
         ...state,totalUsersCount:action.totalUsersCount}
      }
       
      case TOGGLE_IS_FETCHING: {
         return  {
            ...state,isFetchings:action.isFetchings}
         }
       case  TOGGLE_IS_FOLLOWING_PROGRESS: {
         return  {
            ...state,
            followingInProgress:action.isFetchings
         ? [...state.followingInProgress,action.userId]
         : state.followingInProgress.filter(id=>id !==action.userId)}
         } 

default: 
   return state;
    
 }
}


 

 export const follow = (userId) => ({ type:'FOLLOW',userId});
    
export const unfollow = (userId ) => ({ type:'UNFOLLOW', userId  });

export const setUsers = (users) =>  ({type:'SET_USERS', users});

export const setCurrentPage = (currentPage) =>  ({type:'SET_CURRENT_PAGE',currentPage});

export const setTotalUsersCount = (totalUsersCount) =>  ({type:'SET_TOTAL_USERS_COUNT',totalUsersCount });

export const  setIsFetchings = (isFetchings) =>  ({type:'TOGGLE_IS_FETCHING',isFetchings });

export const toggleFollowingInProgress = (isFetchings,userId) => ({type:'TOGGLE_IS_FOLLOWING_PROGRESS',isFetchings,userId});

export const getUsersThunkCreator= ( page,pageSize, ) => 
  async (dispatch) => {
dispatch(setIsFetchings(true));
dispatch(setCurrentPage(page))

let data = await userAPI.getUsers(page, pageSize, )
     dispatch(setIsFetchings(false));
     dispatch(setUsers(data.items));
     dispatch(setTotalUsersCount(data.totalCount));
     
 }



export const unFollowThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true,userId));

      userAPI.unFollow(userId ).then(data => {
          if (data.resultCode === 0 ) 
          { dispatch(unfollow(userId));}
          dispatch(toggleFollowingInProgress(false,userId))
      });
   }}

   export const FollowThunkCreator = (userId) => {
      return (dispatch) => {
         dispatch(toggleFollowingInProgress(true,userId))
  
   userAPI.Follow(userId)
      .then(data=> {
       if (data.resultCode === 0 ) 
       { dispatch(follow(userId));}
       dispatch(toggleFollowingInProgress(false,userId))
   })

      }}

 export default usersReducer;