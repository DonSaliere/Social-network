import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 110 },
                { id: 2, message: "It's my first post", likesCount: 25 },
            ],
            newPostText: "TestTest"
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                { id: 1, name: 'Андрей' },
                { id: 2, name: 'Саша' },
                { id: 3, name: 'Света' }
            ]
        }
    },
    _callSubscriber() {
        console.log("State was changed");
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 10
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;