
import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from './profile.reducer';
import dialogsReducer from './dialogs.reducer';
import usersReducer from './Users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';


let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
    
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware ));









export default store;