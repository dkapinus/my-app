import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsForRedirect =(state) => ({
    isAuth: state.auth.isAuth
  });

export const withRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return < Redirect to = {'/profile'}/>
    return <Component {...this.props}/>
            
        }
    }

    
     
      let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent );

    return ConnectAuthRedirectComponent;
}