import { connect } from 'react-redux';
import React from 'react';

import {
    setCurrentPage,
    getUsersThunkCreator,
    FollowThunkCreator,
    unFollowThunkCreator
} from '../../Redux/Users-reducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { withAuthRedirect } from '../Hoc/withAuthRedirect';
// import {  userAPI } from '../../API/api';
import { compose } from 'redux';
import {  getCurrentPage, getFollowingInProgress, getIsFetchings, getPageSize, getTotalUsersCount, getUsers } from '../../Redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

        //     this.props.setIsFetchings(true)
        //    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.setIsFetchings(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
       
        // this.props.setCurrentPage(pageNumber);
        // this.props.setIsFetchings(true);

        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.setIsFetchings(false)
        //         this.props.setUsers(data.items);
        //     });

    }



    render() {



        return <>
            {this.props.isFetchings ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                FollowThunkCreator = {this.props.FollowThunkCreator}
                unFollowThunkCreator = {this.props.unFollowThunkCreator}
                
            />

        </>
    }
}





// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetchings: state.usersPage.isFetchings,
//         followingInProgress: state.usersPage.followingInProgress,
    
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetchings: getIsFetchings(state),
        followingInProgress:getFollowingInProgress(state),
    
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow:(userId)=> {
//             dispatch(followAC(userId));
//         },
//         unfollow : (userId) => {
//             dispatch(unfollowAC(userId));
//     },
//     setUsers : (users) => {
//         dispatch(setUsersAC(users));
//     },
//     setCurrentPage : (pageNumber) => {
//         dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount : ( totalCount) => {
//         dispatch(setTotalUsersCountAC (totalCount));
//     },  

//     setIsFetchings : (isFetchings ) => {
//         dispatch(setIsFetchings (isFetchings));
//     },  
// } 

// }



    export default compose ( //withAuthRedirect,
    connect(mapStateToProps,
    { setCurrentPage, getUsersThunkCreator, 
    FollowThunkCreator, unFollowThunkCreator
    }),
    ) (UsersContainer)