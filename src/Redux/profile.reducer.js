import { profileAPI } from '../API/api';

 const ADD_POST = 'ADD-POST';
 const SET_USER_PROFILE = 'SET_USER_PROFILE';
 const SET_STATUS = 'SET_STATUS';
 const DELETE_POST = 'DELETE_POST'
 const IMAGE = 'IMAGE';
 

 let initialState = {
    
        posts: [ {id:'1', message:'How are you',likesCount:'10'},
                 {id:'2', message:'Where are you',likesCount:'15'},
                 {id:'3', message:'Sun goes up',likesCount:'11'},],
                
                
       
       profile: null,
       status: '',
       image:''
       

    };
    


 const profileReducer = (state=initialState,action) => {

  

    switch (action.type){
        
        case ADD_POST:{
    
        let newPost = {
            id:4,
            message:action.newPostText,
            likesCount:0
        };
        return {
        ...state,posts:[...state.posts,newPost]
        
    };
    }
        

       
       case SET_USER_PROFILE: {
       return {
         ...state,
         profile:action.profile
       }; }

       case SET_STATUS: {
        return {
          ...state,
          status:action.status
        }; }

        case DELETE_POST:{
            return {
                ...state, posts: state.posts.filter(p=> p.id !==action.postId)}

            
        }

        case IMAGE: {
            return {
              ...state,
              image:action.image
            }; }
    
    

        default:
            return state;
 }}

 export const addPostActionCreator = (newPostText) => {
    return { type:'ADD-POST', newPostText} }
    

export const setUserProfile = (profile)=> {
    return { type: 'SET_USER_PROFILE',profile}
}
export const setStatus = (status)=> {
    return { type: 'SET_STATUS',status}
}    

export const deletePost= (postId)=> {
    return { type: 'DELETE_POST',postId}
}  
export const Image = (image)=> {
    return { type: 'IMAGE',image}
}  

export default profileReducer;



export const ProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.profile(userId )
        .then(data => {
        dispatch(setUserProfile(data));
       
       });
    }}

    export const statusThunkCreator = (userId) => {
        return (dispatch) => {
    profileAPI.status(userId)
    .then(data => {
        dispatch(setStatus(data))
    });
}}

export const updateStatusCreator = (status) =>(dispatch) => {

profileAPI.updateStatus(status)
.then(response => {
    if (response.data.resultCode === 0){
    dispatch(setStatus(status))
}
});
}

export const uploadImage = (image) => {
    return(dispatch) => {
profileAPI.uploadImage(image)
.then(data=>{
    if (data.resultCode === 0 ) 
    dispatch(Image(data))
})
    }
}

// userAPI.Follow(userId)
// .then(data=> {
//  if (data.resultCode === 0 ) 
//  { dispatch(follow(userId));}
//  dispatch(toggleFollowingInProgress(false,userId))
// })