import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapsStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            let action = updateNewMessageBodyCreator(body);
            dispatch(action);          
        },
        SenMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapsStateToProps, mapsDispatchToProps)(Dialogs);

export default DialogsContainer;