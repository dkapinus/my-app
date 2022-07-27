
    import React from 'react';
    import s from './Dialogs.module.css';
    import DialogItem from './DialogItem/DialogsItem';
    import Message from './Message/Message';
    import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormsControls';

import { required } from '../../ utils/validators/validators';
import { maxLengthCreator } from '../../ utils/validators/validators';

    
    
    
    
    
    const Dialogs = (props) => {
    
    
    
       let dialogsElements = props.dialogsPage.dialogs
          .map(dial => <DialogItem name={dial.name} id={dial.id} image={dial.image} />);
    
       let messagesElements = props.dialogsPage.messages
          .map(messages => <Message message={messages.message} id={messages.id} />);
    
        
    
    
       let addMessage = (values) => {
          props.sendMessage(values.newMessageBody)
       }
    
    
       return (
    
          <div className={s.dialogs}>
             <div className={s.dialogItem}>
                {dialogsElements}
    
             </div>
             <div className={s.messages}>
             {messagesElements}
             <AddMessageFormRedux onSubmit={addMessage} />
             </div>
    
          </div>
    
    
    
       )
    }
    
    const maxLength100 = maxLengthCreator(100);
    
    const AddMessageForm = (props) => {
       return  ( <form onSubmit={props.handleSubmit}>
      
       <div><Field placeholder={"Enter your message"} name={'newMessageBody'} component={Textarea} 
        validate={[required,maxLength100]}  />
        
          </div>
       <div><button>add post</button></div>
       </form>)
    }
    
    
    


    
    const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
    
    
    
    export default Dialogs;