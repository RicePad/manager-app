import { combineReducers } from 'redux';
import UserList from './user_list_reducer';

export default combineReducers({
	users: UserList

})