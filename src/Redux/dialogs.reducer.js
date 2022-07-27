 
 const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
   
    
        dialogs: [
    
        {id:'1', name:'Vik', image:'https://tvoidrug.com/wp-content/uploads/2017/07/foto_74_8_300.jpg'},
        {id:'2', name:'Dima',image:'https://tvoidrug.com/wp-content/uploads/2017/07/foto_74_8_300.jpg'},
        {id:'3', name:'Mortik',image:'https://tvoidrug.com/wp-content/uploads/2017/07/foto_74_8_300.jpg'},
        {id:'4', name:'Pysiaka',image:'https://tvoidrug.com/wp-content/uploads/2017/07/foto_74_8_300.jpg'},
        {id:'5', name:'Sveta',image:'https://tvoidrug.com/wp-content/uploads/2017/07/foto_74_8_300.jpg',},
        {id:'6', name:'Valera',image:'https://tvoidrug.com/wp-content/uploads/2017/07/foto_74_8_300.jpg'}], 
        
        
            messages: [
        
            {id:'1', message:'How are you'},
            {id:'2',message:'i am fine'},
            {id:'3',message:'Mortik'},
            {id:'4',message:'Pysiaka'},
            {id:'5',message:'Sveta'},
            {id:'6',message:'Valera'},]
           
          
    
    
    
    

};

 const dialogsReducer = (state = initialState,action) => {
  
  

switch (action.type ) {

           
           
            case SEND_MESSAGE:
            
            let body = action.newMessageBody;
            return {...state,
            messages: [...state.messages, {id:7,message:body}]
          };
           
           
            default:
    }   
    return state;

  }

export default dialogsReducer;

export const addMessageCreator = (newMessageBody) => {
  return { type:'SEND_MESSAGE', newMessageBody} }
  


