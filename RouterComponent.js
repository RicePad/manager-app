import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';




const RouterComponent  = () => {
	return(
		<Router>
			<Scene key="root">
				<Scene key="login" component={LoginForm} title="Please Login" initial />
				<Scene key="employeeList" component={EmployeeList} title="EmployeeList"  />
			</Scene>
		</Router>
		)
}


export default RouterComponent;