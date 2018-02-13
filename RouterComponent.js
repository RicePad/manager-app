import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';



const RouterComponent  = () => {
	return(
		<Router>
			<Scene key="root">
				<Scene key="login" component={LoginForm} title="Please Login"  />
			</Scene>
		</Router>
		)
}


export default RouterComponent;