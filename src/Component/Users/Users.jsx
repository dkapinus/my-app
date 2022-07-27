
import { NavLink } from 'react-router-dom';
import userPhoto from '../../UserPhoto/userPhoto.png';

import s from './Users.module.css';


let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

       
        return <div>
    <div>
    { pages.map( p => {
                    return <span className={props.currentPage ===  p && s.selectedPage }
                    onClick={(e) => {props.onPageChanged(p); }}>{p}</span>
                })}
    
</div>
    
   { 
   props.users.map ( u=><div key={u.id}>
       <span>
           
           <div>
               <NavLink to={'/profile/' +u.id}>
               <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
               </NavLink>
            </div>

    <div> 
        {u.followed
   ? <button disabled={props.followingInProgress.some(id=>id=== u.id)} onClick={()=> {
    
    props.unFollowThunkCreator (u.id)
    
//        props.toggleFollowingInProgress(true,u.id)
//    userAPI.unFollow(u.id )
//         .then(data => {
//             if (data.resultCode === 0 ) 
//             { props.unfollow(u.id);}
//             props.toggleFollowingInProgress(false,u.id)
//         });

    }}>Unfollow</button> 
   : <button disabled={props.followingInProgress.some(id=>id=== u.id)} onClick={()=> {
    props.FollowThunkCreator (u.id)

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
            
<div>{u.name}</div>
<div>{u.status}</div>
<div>{"u.location.city"}</div>
<div>{"u.location.country"}</div>

  



   </div>)
   
   
   
   
   
   
   }
</div>
}
        





export default Users;