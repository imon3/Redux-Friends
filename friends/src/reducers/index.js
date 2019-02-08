import { POST_FRIEND_START, POST_FRIEND_SUCCESS, POST_FRIEND_FAIL } from '../actions'

const initialState = {
    postingFriends: false,
    friendsPosted: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_FRIEND_START:
            return {
                ...state,
                postingFriends: true,
                friends: action.payload
            }
        case POST_FRIEND_SUCCESS:
            return {
                ...state,
                postingFriends: false,
                friendsPosted: true,
                error: ''
            }
        case POST_FRIEND_FAIL:
            return {
                ...state,
                postingFriends: false,
                friendsPosted: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;