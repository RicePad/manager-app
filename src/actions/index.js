import firebase from 'firebase';

// provides a helper method to navigate to another component
import { Actions } from 'react-native-router-flux';

export const EMAIL_CHANGED = "EMAIL_CHANGED";
export const PASSWORD_CHANGED = "PASSWORD_CHANGED";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL  = "LOGIN_USER_FAIL";




export function emailChanged(text) {
	const action = {
		type: EMAIL_CHANGED,
		payload: text
	}

	return action;
}


export function passwordChanged(text){
	const action = {
		type: PASSWORD_CHANGED,
		payload: text
	}
		return action;
}


// This action creator returns a func using redux thunk, enabling dispatch func to handle manually asynchronous request.
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

		const loginUserFail = (dispatch) => {
		  dispatch({ type: LOGIN_USER_FAIL });
		};

		const loginUserSuccess = (dispatch, user) => {
		  dispatch({
		    type: LOGIN_USER_SUCCESS,
		    payload: user
		  });

	//  helper method to navigate to another employeeList component
		Actions.employeeList()
		};