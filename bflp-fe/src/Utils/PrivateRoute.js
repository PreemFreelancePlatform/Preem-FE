import React, { useState, useEffect } from 'react';
import { Route, useParams, Redirect, Link } from 'react-router-dom';
import { axiosWithAuth } from './axiosWIthAuth';
import { getMyInfo } from '../HelperFunctions/NetworkRequests';

export default function PrivateRoute({ props, component1: Component1, component2: Component2, ...rest }) {
	const [user, setUser] = useState(null);
	const [loading, setloading] = useState();
	const [error, setError] = useState(false);

	useEffect(() => {
		setTimeout(function () {
			getMyInfo(setUser, setError, setloading);
		}, 100);
	}, []);

	console.log('request sent');

	if (loading === false) {
		return (
			<div>
				<Route
					{...rest}
					render={() => {
						// check
						if (error === false) {
							if (user.locked_role === 'freelancer') {
								return <Component1 data={user} />;
							} else {
								return <Component2 data={user} />;
							}
						} else {
							return (
								<div>
									<h2>Could not authenticate</h2>
									<Link to="/login">back to login</Link>
								</div>
							);
						}
					}}
				/>
			</div>
		);
	} else {
		return null;
	}
}
