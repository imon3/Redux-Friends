import axios from 'axios';

export const POST_FRIEND_START = 'POST_REQUEST_START';
export const POST_FRIEND_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_FRIEND_FAIL = 'POST_REQUEST_FAIL';

export const postFriend = friend => dispatch => {
    dispatch({ type: POST_FRIEND_START })
    axios.post('http://localhost:500/api/friend', friend)
        .then(response => {
            dispatch({
                type: POST_FRIEND_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: POST_FRIEND_FAIL,
                payload: error
            })
        })
}