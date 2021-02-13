import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { axiosWithAuth } from './axiosWIthAuth';

export default function PrivateRouteCustomer({ props, component: Component, ...rest }) {
	const [userData, setUserData] = useState(null);

	const getMyinfo = async () => {
		await axiosWithAuth()
			.get('http://localhost:2019/getmyinfo')
			.then((res) => {
				setUserData(res.data.locked_role);
			})
			.catch((err) => console.log(err.res));
	};

	useEffect(() => {
		getMyinfo();
	}, []);

	if (userData != null) {
		return (
			<div>
				<Route
					{...rest}
					render={() => {
						if (localStorage.getItem('token') && userData === 'customer')
							return <Component data={userData} />;
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
