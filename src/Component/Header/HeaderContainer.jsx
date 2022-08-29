import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunk } from '../../Redux/auth-reducer';




class HeaderContainer extends React.Component  {

   
   
    
    
    render() {
    
       
    
    return  <Header {...this.props} {...this.logoutThunk}/>
    
    
    }
    }
    
   const  mapStateToProps = (state) => ({

        isAuth: state.auth.isAuth,
        login: state.auth.login,
    });
    





export  default connect (mapStateToProps, {  logoutThunk}) (HeaderContainer);
    
