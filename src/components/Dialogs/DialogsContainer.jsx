import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


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

export default compose(
    connect(mapsStateToProps, mapsDispatchToProps),
    withAuthRedirect
)(Dialogs);