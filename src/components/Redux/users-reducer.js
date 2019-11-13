const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        { id: 1, photoUrl: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg' ,followed: false, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Kaluga', country: 'Russia' } },
        { id: 2, photoUrl: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg' ,followed: true, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Kaluga', country: 'Russia' } },
        { id: 3, photoUrl: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg' ,followed: false, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Kaluga', country: 'Russia' } }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;

    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;