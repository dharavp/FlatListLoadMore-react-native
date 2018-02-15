import { 
	USER_FETCH,
	USER_FETCH_SUCCESS,
	USER_FETCH_FAILED
} from '../actions/types';

const INITIAL_STATE = {
      loading: false,
      data: [],
      page: 1,
      error: ''
  };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_FETCH:
			return { ...state, loading: true, error: '' };
		case USER_FETCH_SUCCESS:
			console.log(action.payload);
			return { ...state, loading: false, error: '', data: state.data.concat(action.payload) };
		case USER_FETCH_FAILED:
			return { ...state, loading: false, error: action.payload };
		default:
		return state;
	}
};
