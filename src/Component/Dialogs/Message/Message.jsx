import { NavLink } from "react-router-dom"
import s from './Message.module.css';




const Message = (props) =>{
    
    return (<div className={s.dialogs}>
        <NavLink to={'/dialogs/'+ props.id} >{props.message}</NavLink>
        
       
       </div>
    )
    }



    export default Message;