import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapsStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapsStateToProps, mapsDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;