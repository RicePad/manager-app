import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';




const RouterComponent  = () => {
	return(
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Scene>

				<Scene key="main">
					<Scene 
						rightTitle="Add"
						onRight={() => console.log('right!')}
						key="employeeList" 
						component={EmployeeList} 
						title="EmployeeList" />
				</Scene>
			</Scene>
		</Router>
		)
}


export default RouterComponent;