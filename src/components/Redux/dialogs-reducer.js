const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How ia your' },
        { id: 3, message: 'yo' },
    ],
    dialogs: [
        { id: 1, name: 'Андрей' },
        { id: 2, name: 'Саша' },
        { id: 3, name: 'Света' },
        { id: 4, name: 'Виктор' },
        { id: 5, name: 'Валера' },
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;