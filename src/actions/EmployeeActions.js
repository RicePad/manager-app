import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';
export const EMPLOYEE_CREATE = 'EMPLOYEE_CREATE';


export function employeeUpdate({prop , value}){
	const action = {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }

	}

	return action;
}


// Sends data to firebase database
export function employeeCreate({name, phone, shift}){
	//Initiates user with id
	const { currentUser } = firebase.auth();

	//Sends name, phone and shift data to firebase
	return (dispatch) =>{
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			//After sending data, clear previous data and return to previous screen
			.then(() => {
				dispatch({type: EMPLOYEE_CREATE});
				Actions.pop()
		});
		}
}
