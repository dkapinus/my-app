import { connect } from 'react-redux';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import Login from './login';
import {  loginThunk } from '../../Redux/auth-reducer';
import React from 'react';




class LoginContainer extends React.Component  {

    componentDidMount (email, password,rememberMe) { 
        
        this.props.loginThunk(email,password,rememberMe)
       


    }


render () {
 
return (
   
        <Login {...this.props} {...this.props.loginThunk}
          />
    )
  }

}

let  mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
  });





export  default compose (connect(mapStateToProps,{loginThunk}),
    withAuthRedirect) (LoginContainer);