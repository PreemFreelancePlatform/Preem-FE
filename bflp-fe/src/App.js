import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRouteAny from './Utils/PrivateRouteAny';
import PrivateRouteFreelancer from './Utils/PrivateRouteFreelancer';
import PrivateRouteCustomer from './Utils/PrivateRouteCustomer';

import './App.css';
import Dispatch from './GlobalComponents/Dispatch';
import { Login } from './GlobalComponents/Login';
import { CustomerDash } from './CustomerComponents/CustomerDash';
import { FreelancerDash } from './FreelancerComponents/FreelancerDash';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				{/* <PrivateRouteAny path="/dispatch" component={Dispatch} /> */}
				{/* <PrivateRouteCustomer path="/customer/:id" component={CustomerDash} />
				<PrivateRouteFreelancer path="/freelancer/:id" component={FreelancerDash} /> */}
				<Route path="/dispatch" component={Dispatch} /> */
				<Route path="/freelancer/:id" component={FreelancerDash} /> */
				<Route path="/customer/:id" component={CustomerDash} />
			</Switch>
		</Router>
	);
}

export default App;
