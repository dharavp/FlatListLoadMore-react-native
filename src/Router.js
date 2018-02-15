import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import users from './users';

const RouterComponent = () => {
	return (
	<Router>
	<Scene key="list">
	<Scene key="user" component={users} title="User List" />
	</Scene>
	</Router>
	);
};

export default RouterComponent;
