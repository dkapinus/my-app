
import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import { ProfileThunkCreator, statusThunkCreator, updateStatusCreator,uploadImage } from '../../Redux/profile.reducer';
import {  withRouter} from "react-router-dom";
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component  {

    componentDidMount () { 
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId =this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.ProfileThunkCreator(userId)
        this.props.statusThunkCreator(userId)
        let image = this.props.image
        this.props.uploadImage(image)


    }


render () {
    
return (
   
        <Profile {...this.props} 
          />
    )
  }

}



 
let mapStateToProps =(state) => ({
    
       profile: state.profilePage.profile,
       status: state.profilePage.status,
       image: state.profilePage.image,
       authorizedUserId:state.auth.userId,
       isAuth: state.auth.isAuth
      
    });




export default compose ( connect (mapStateToProps,{ ProfileThunkCreator, statusThunkCreator, updateStatusCreator,uploadImage}),
withRouter,
withAuthRedirect) (ProfileContainer)