import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import EmployeeForm from './employee_form_reducer';
import EmployeeFetch from './employee_list_reducer';

export default combineReducers({
	auth: AuthReducer,
	employeeForm: EmployeeForm,
	employees: EmployeeFetch

})