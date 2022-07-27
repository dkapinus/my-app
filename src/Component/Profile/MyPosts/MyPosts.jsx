import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormControls/FormsControls';
import { maxLengthCreator } from '../../../ utils/validators/validators';
import { required } from '../../../ utils/validators/validators';






    
const MyPosts = (props)=> {

  

    let postsElements =[...props.posts] 
    .reverse()
    .map (post => <Post message={post.message} likesCount={post.likesCount}/>)
    
    let addNewPost = (values) =>{
        props.addPost(values.newPostText)
      
     

      }
  
    return (<div className={s.item}>
 
  <div>
    <h3>My post</h3>
      <MyPostFormRedux onSubmit={addNewPost}/>
   
 {postsElements}</div>
  
    </div>)
}

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
    return ( <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newPostText'} 
        validate={[required,maxLength10]} placeholder={'Enter your message'}/>      
      <div><button >Add post</button></div> 
      </form> )
}

const MyPostFormRedux = reduxForm({form:'postAddMessageForm'})(MyPostForm)




export default MyPosts