
import profileReducer, { addPostActionCreator, deletePost } from './profile.reducer';


let state = {
    
    posts: [ {id:'1', message:'How are you',likesCount:'10'},
             {id:'2', message:'Where are you',likesCount:'15'},
             {id:'3', message:'Sun goes up',likesCount:'11'},],

};





it('length of posts should be added', () => {
    //1. test data 
    let  action = addPostActionCreator('it-comasutra.com')
  
    //2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});


it('message of new post should be correct', () => {
    //1. test data 
    let  action = addPostActionCreator('it-comasutra.com')
  
    //2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    
    expect(newState.posts[3].message).toBe('it-comasutra.com')
});


it('after deleting length of messeage should be decrement', () => {
    //1. test data 
    let  action = deletePost(1)
  
    //2. action
    let newState = profileReducer(state,action);

    
    expect(newState.posts.length).toBe(3)
});

it(`after deleting length shouldn't be decrement if id is incorect`, () => {
    //1. test data 
    let  action = deletePost(1000)
  
    //2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    
    expect(newState.posts.length).toBe(3)
});
