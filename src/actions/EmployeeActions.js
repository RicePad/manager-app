import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';
export const EMPLOYEE_CREATE = 'EMPLOYEE_CREATE';
export const EMPLOYEES_FETCH_SUCCESS = 'EMPLOYEES_FETCH_SUCCESS';


export function employeeUpdate({prop , value}){
	const action = {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }

	}

	return action;
}


// Sends data to firebase database
export function employeeCreate({name, phone, shift}){
	//Pulls current user with id
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

//fetches employees data from firebase database
export function employeesFetch(){
	const { currentUser } = firebase.auth()
	
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
		
		//fetches data from snapshop object
			.on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};


export function employeeSave({ name, phone, shift, uid }){
	const { currentUser } = firebase.auth()

	return(dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
		.set({ name, phone, shift})
		.then(() => console.log('saved!'));

	}

}
