import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';
import EmployeeEdit from './src/components/EmployeeEdit';





const RouterComponent  = () => {
	return(
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login"/>
				</Scene>

				<Scene key="main">
					<Scene 
						key="employeeList" 
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						component={EmployeeList} 
						title="Employees List"
						initial
						 />
					<Scene
						key="employeeCreate"
						component={EmployeeCreate}
						title="Create an Employee"
					 />
					 <Scene
						key="employeeEdit"
						component={EmployeeEdit}
						title="Edit Employee"
					 />
				</Scene>
			</Scene>
		</Router>
		)
}


export default RouterComponent;