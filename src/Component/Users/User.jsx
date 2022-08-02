import { NavLink } from 'react-router-dom';
import userPhoto from '../../UserPhoto/userPhoto.png';
import s from './Users.module.css';


let User = ({user,...props}) => {


    return (<div >
       <span>
           
           <div>
               <NavLink to={'/profile/' +user.id}>
               <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.photo}/>
               </NavLink>
            </div>

    <div> 
        {user.followed
   ? <button disabled={props.followingInProgress.some(id=>id=== user.id)} onClick={()=> {
    
    props.unFollowThunkCreator (user.id)
    
//        props.toggleFollowingInProgress(true,u.id)
//    userAPI.unFollow(u.id )
//         .then(data => {
//             if (data.resultCode === 0 ) 
//             { props.unfollow(u.id);}
//             props.toggleFollowingInProgress(false,u.id)
//         });

    }}>Unfollow</button> 
   : <button disabled={props.followingInProgress.some(id=>id=== user.id)} onClick={()=> {
    props.FollowThunkCreator (user.id)

    // props.toggleFollowingInProgress(true,u.id)
  
    // userAPI.Follow(u.id )
    //    .then(data=> {
    //     if (data.resultCode === 0 ) 
    //     { props.follow(u.id);}
    //     props.toggleFollowingInProgress(false,u.id)
    // })

    }}>Follow</button> }
 </div> 
 </span>        
            
<div>{user.name}</div>
<div>{user.status}</div>
<div>{"user.location.city"}</div>
<div>{"user.location.country"}</div>

  



   </div>)
   
   
   
   
   
   
   }


        





export default User;





