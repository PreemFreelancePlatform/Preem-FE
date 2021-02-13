import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRouteFreelancer from './Utils/PrivateRouteFreelancer';
import PrivateRouteCustomer from './Utils/PrivateRouteCustomer';

import './App.css';
import { Login } from './PublicComponents/Login';
import { CustomerDash } from './CustomerComponents/CustomerDash';
import { FreelancerDash } from './FreelancerComponents/FreelancerDash';
import { Landing } from './PublicComponents/Landing';

function App() {
	return (
		<Router>
			<Switch>
				{/* <Route exact path="/" component={Landing} /> */}
				<Route path="/login" component={Login} />
				<PrivateRouteCustomer path="/customer/:username" component={CustomerDash} />
				<PrivateRouteFreelancer path="/freelancer/:username" component={FreelancerDash} />
			</Switch>
		</Router>
	);
}

export default App;
