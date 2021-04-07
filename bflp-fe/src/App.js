import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './Utils/PrivateRoute';

import './App.css';
import { Login } from './PublicComponents/Login';
import { CustomerDash } from './CustomerComponents/CustomerDash';
import { FreelancerDash } from './FreelancerComponents/FreelancerDash';
import { Landing } from '../src/PublicComponents/Landing';
import { AdminDash } from './AdminComponents/AdminDash';
import { Recovery } from './PublicComponents/Recovery';
import { Signup } from './PublicComponents/Signup';
import { Setup } from './PublicComponents/Setup';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/login" component={Login} />
				<Route path="/recovery" component={Recovery} />
				<Route path="/signup" component={Signup} />
				<PrivateRoute path="/:email" component1={FreelancerDash} component2={CustomerDash} component3={Setup} />
				<PrivateRoute path="/:email/apply"  />

				{/* { s				<PrivateRouteAdmin path="/admin/:username" component={AdminDash} /> */}
			</Switch>
		</Router>
	);
}

export default App;
