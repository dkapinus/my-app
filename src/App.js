import React, { Suspense } from 'react';
import {  HashRouter, Route, withRouter} from 'react-router-dom';
import  './App.css';
import Nav from './Component/Nav/Nav';
import UsersContainer from './Component/Users/UsersContainer';
import ProfileContainer from './Component/Profile/ProfileContainer';
import HeaderContainer from './Component/Header/HeaderContainer';
import Login from './Component/Login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './common/Preloader/Preloader';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
// import DialogsContainer from './Component/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./Component/Dialogs/DialogsContainer'));









       class App  extends React.Component  {

              componentDidMount () {
                  this.props.initializeApp();
               }
            

    render ( ) {
       if (!this.props.initialized) {
              return <Preloader/>
          }
         
    
    return (
        <div className = 'app-wrapper'>
          <HeaderContainer/>
          <Nav  />
        <div className='app-wrapper-content'>
        <Route path='/dialogs'
                           render={() =>  <Suspense fallback={<div><Preloader/></div>}>
                                         < DialogsContainer/>
                                          </Suspense>
                                   
                                  }/>

                    
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer /> }/>

                    <Route path='/users'
                           render={() => <UsersContainer /> }/>

                    <Route path='/login'
                           render={() => <Login /> }/>
        </div>
        </div>
        
    )
    
  }}


 
  const mapStateToProps = (state) => ({
       initialized: state.app.initialized
   })


       
let AppContainer = compose ( withRouter,
        connect (mapStateToProps, { initializeApp})) (App);
       

    const  SamuraiJSApp = (props)=> {
       return <HashRouter basename={process.env.PUBLIC_URL}>
       <Provider store={store}>
         <AppContainer/>
            </Provider>
       </HashRouter>
      }
       
      export default    SamuraiJSApp
