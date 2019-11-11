import React from 'react';
import { updateNewPostActionCreator, addPostActionCreator } from '../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapsStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapsDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapsStateToProps, mapsDispatchToProps)(MyPosts);

export default MyPostsContainer;