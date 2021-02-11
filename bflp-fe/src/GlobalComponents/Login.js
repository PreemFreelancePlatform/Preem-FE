import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginFlow } from '../HelperFunctions/HelperFunctions';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import { Redirect } from 'react-router-dom';

export const Login = () => {
	const [badCreds, setBadCreds] = useState(false);
	const [dispatch, setDispatch] = useState(false);
	const [creds, setCreds] = useState({
		username: '',
		password: '',
	});

	const [user, setUser] = useState({
		role: '',
		completed: false,
		setup: '',
		username: '',
	});

	const handleChange = (e) => {
		setCreds({
			...creds,
			[e.target.name]: e.target.value,
		});
	};

	const fblogin = (e) => {
		Axios.get('http://localhost:2019/oauth_login').then((res) => {
			console.log(res);
		});
	};

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
		)
			.then((res) => {
				localStorage.setItem('token', res.data.access_token);
				return axiosWithAuth()
					.get('http://localhost:2019/getmyinfo')
					.then((res) => {
						setUser({
							role: res.data.locked_role,
							setup: res.data.setup,
							username: res.data.username,
							completed: true,
						});
						setDispatch(true);
					})
					.catch((err) => {
						console.log(err + 'getmyinfo failed');
					});
			})

			.catch((err) => {
				if (err.response) {
					// client received an error response (5xx, 4xx)
					if (err.response.status === 401) {
						setBadCreds(true);
						console.log(err);
					}
				}
				if (err.request) {
					// client never received a response, or request never left
					console.log('req err');
				}
			});
	};

	if (dispatch) {
		switch (user.role) {
			case 'customer':
				return <Redirect to={`/customer/${user.username}`} />;

			case 'freelancer':
				return <Redirect to={`/freelancer/${user.username}`} />;

			case 'admin':
				return <Redirect to={`/admin/${user.username}`} />;

			default:
				return <Redirect to="/login" />;
		}
	}

	return (
		<div className="formbox">
			{badCreds && <span>INCORRECT USERNAME OR PASSWORD AYY</span>}
			<form
				onSubmit={(e) => {
					handleSubmit();
					e.preventDefault();
				}}
			>
				<input
					type="text"
					id="login"
					className="fadeIn second"
					name="username"
					value={creds.username}
					onChange={handleChange}
					placeholder="username"
				/>
				<input
					type="password"
					name="password"
					id="password"
					value={creds.password}
					onChange={handleChange}
					className="fadeIn third"
					placeholder="password"
				/>
				<input type="submit" className="fadeIn fourth" value="Log In" />
			</form>
			<div id="formFooter"></div>\
			<button
				onClick={() => {
					fblogin();
				}}
			>
				facebook login
			</button>
		</div>
	);
};
