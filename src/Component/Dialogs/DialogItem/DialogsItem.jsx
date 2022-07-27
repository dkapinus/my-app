import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';



const DialogItem = (props) => {
    
    return ( <div className={s.dialogs}>
        <NavLink to={'/dialogs/'+ props.id} >{props.name} <img  className={s.img} src={props.image}/> </NavLink>
  
        
       
       
        </div>
    )
}



export default DialogItem;