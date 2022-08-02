

import Paginator from '../../common/Paginator/Paginator';
import User from './User';


let Users = (props) => {


    return <div>
    <Paginator  currentPage={props.currentPage} onPageChanged={props.onPageChanged} 
     totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/> 
    <div>
   { 
   props.users.map ( u=>< User user={u}
     key={u.id}
     followingInProgress={props.followingInProgress}
     unFollowThunkCreator={props.unFollowThunkCreator}
     FollowThunkCreator ={props.FollowThunkCreator }
     
     />
   )}
   </div>
   
       </div>
}


export default Users;









    
  
  


