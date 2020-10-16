import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
		Axios.post(
			'http://localhost:2019/login',
			`grant_type=password&username=${creds.username}&password=${creds.password}`,
			{
				headers: {
					// btoa is converting our client id/client secret into base64
					Authorization: `Basic ${btoa('clientid:clientsecret')}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		).then((res) => {
			localStorage.setItem('token', res.data.access_token);
			history.push('/dispatch');
		});
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					handleSubmit();
					e.preventDefault();
				}}
			>
				<input type="text" name="username" value={creds.username} onChange={handleChange} required />
				<input type="password" name="password" value={creds.password} onChange={handleChange} required />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
