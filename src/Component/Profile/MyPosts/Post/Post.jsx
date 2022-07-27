
import s from './Post.module.css';






const Post = (props) => {
   
    return (<div className={s.item}>
        <div>
         <div>{props.message}</div>
         
         <div>like</div>
         {props.likesCount}
            </div>
            </div>
    )
}




export default Post;