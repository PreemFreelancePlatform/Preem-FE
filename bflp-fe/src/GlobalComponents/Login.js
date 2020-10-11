import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const axios = require('axios');
const oauth = require('axios-oauth-client');

export const Login = () => {
	const [creds, setCreds] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setCreds({
			...creds,
			[e.target.name]: e.target.value,
		});
	};

	const history = useHistory();

	const handleSubmit = (e) => {
		axios
			.post(
				'http://localhost:2019/login',
				`grant_type=password&username=${creds.username}&password=${creds.password}`,
				{
					headers: {
						// btoa is converting our client id/client secret into base64
						Authorization: `Basic ${btoa('clientid:clientsecret')}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			)
			.then((res) => {
				localStorage.setItem('token', res.data.access_token);
				console.log(res);
				history.push('/dispatch');
			});

		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="username" value={creds.username} onChange={handleChange} required />
				<input type="password" name="password" value={creds.password} onChange={handleChange} required />
				<button>Submit</button>
			</form>
		</div>
	);
};
