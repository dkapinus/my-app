
import s from './MyProfile.module.css';
import Preloader from '../../../../common/Preloader/Preloader';
import myUserPhoto from '../../../../UserPhoto/myUserPhoto.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';





const MyProfile = (props) => {
if (!props.profile) {
    return <Preloader/> 
}

    return ( <div>
<div>
        <img  className={s.myProfile} src={props.profile.photos.large || myUserPhoto}/>
    </div>
   
    <div>
       
<ProfileStatusWithHooks status={props.status} updateStatusCreator={props.updateStatusCreator} />
 
        

    </div>
    </div>)

   
    
  


}


 

 export default MyProfile;