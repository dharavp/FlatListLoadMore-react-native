import axios from 'axios';
import { 
	USER_FETCH,
	USER_FETCH_SUCCESS,
	USER_FETCH_FAILED
} from './types';

export const fetchUser = (page) => {
	return (dispatch) => {
	const url = `https://api.stackexchange.com/2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`;
    dispatch({ type: USER_FETCH });
    axios.get(url)
      .then(res => fetchUserSuccess(dispatch, res.data.items))
      .catch(error => fetchUserFail(dispatch, error));
};
};

const fetchUserFail = (dispatch, error) => {
	dispatch({
	type: USER_FETCH_FAILED,
	payload: error
	});
};

const fetchUserSuccess = (dispatch, user) => {
	dispatch({
	type: USER_FETCH_SUCCESS, 
	payload: user 
});
};
