import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Login } from './GlobalComponents/Login';
import ProtectedRoute from './Utils/PrivateRouteCustomer';

import './App.css';
import { CustomerTest } from './CustomerComponents/Customer';
import { FreelancerTest } from './FreelancerComponents/FreelancerTest';
import { Dispatch } from './GlobalComponents/Dispatch';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<ProtectedRoute path="/customer" component={CustomerTest} />
				<ProtectedRoute path="/dispatch" component={Dispatch} />
			</Switch>
		</Router>
	);
}

export default App;
