import React from 'react';
import {  Route, withRouter} from 'react-router-dom';
import  './App.css';
import Nav from './Component/Nav/Nav';
import DialogsContainer from './Component/Dialogs/DialogsContainer';
import UsersContainer from './Component/Users/UsersContainer';
import ProfileContainer from './Component/Profile/ProfileContainer';
import HeaderContainer from './Component/Header/HeaderContainer';
import Login from './Component/Login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './common/Preloader/Preloader';








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
                           render={() => <DialogsContainer /> }/>

                    
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


       
export  default compose ( withRouter,
        connect (mapStateToProps, { initializeApp})) (App);
       

      
       

