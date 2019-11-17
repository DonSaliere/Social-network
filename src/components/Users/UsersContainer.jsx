import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../Redux/users-reducer';

let mapsStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect(mapsStateToProps, mapsDispatchToProps)(Users);

