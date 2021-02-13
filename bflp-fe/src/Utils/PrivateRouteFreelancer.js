import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { axiosWithAuth } from './axiosWIthAuth';
import {getMyInfo} from '../HelperFunctions/NetworkRequests'

export default function PrivateRouteFreelancer({ props, component: Component, ...rest }) {
	const [user, setUser] = useState(null)

	useEffect(() => {
		getMyInfo(setUser);
	}, []);

	if (user != null) {
		return (
			<div>
				<Route
					{...rest}
					render={() => {
						if (localStorage.getItem('token') && user.locked_role === 'freelancer')
							return <Component data={user} />;
						else {
							return <Redirect to="/login" />;
						}
					}}
				/>
			</div>
		);
	} else {
		return null;
	}
}
