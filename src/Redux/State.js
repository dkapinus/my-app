
import dialogsReducer from './dialogs.reducer';
import profileReducer from './profile.reducer';
import usersReducer from './Users-reducer';


let store = {


     _state : {

        profilePage: { 
            posts: [ {id:'1', message:'How are you',likesCount:'10'},
                     {id:'2', message:'Where are you',likesCount:'15'},],
                    
                    
           newPostText:'kyyamasutra'
    
        },
                           
          
    
    dialogsPage:{
    
        dialogs: [
    
        {id:'1', name:'Vika', image:'https://tvoidrug.com/wp-content/uploads/2017/07/foto_74_8_300.jpg'},
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
            {id:'6',message:'Valera'},],
            newPostText2:'kamasutra'
    },
    
    },

    getState () {
        return this._state;
    },
   
    
          subscribe (observer)  {
    this._render=observer;
        },

        dispatch (action) { 

  this._state.profilePage= profileReducer (this._state.profilePage, action) 
  this._state.dialogsPage= dialogsReducer (this._state.dialogsPage, action)
  this._state.usersPage= usersReducer (this._state.usersPage,action)
    this._render(this._state); 
 }

}
   




export default store;