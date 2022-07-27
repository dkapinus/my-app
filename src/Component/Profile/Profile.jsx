import React from 'react';
import s from './Profile.module.css';
import MyProfile from './MyProfile/Profile/MyProfile';
import MyPostsContainer from './MyPosts/MyPostsContainer';







const Profile = (props) => {
   
   
    
    return (
    <div> 
   
    <div className={s.content}> < img src='https://allgeotrip.ru/sites/default/files/georgia.jpg'/></div>
    <div className={s.item}>
    
    <MyProfile  profile={props.profile} status={props.status} updateStatusCreator= {props.updateStatusCreator} uploadImage={props.uploadImage} image={props.image} />
    <MyPostsContainer />
    
     </div>
    </div> 
    )

}


 

 export default Profile;