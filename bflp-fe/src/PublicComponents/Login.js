import Axios from 'axios';
import React, { useState } from 'react';
import { doLogin } from '../HelperFunctions/NetworkRequests';
import { Redirect } from 'react-router-dom';
import '../styles/Shared-Styles/Login.css';

export const Login = () => {
	const [badCreds, setBadCreds] = useState(false);
	const [dispatch, setDispatch] = useState(false);
	const [user, setUser] = useState();
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

	const handleSubmit = (e) => {
		doLogin(creds, setUser, setDispatch, setBadCreds);
	};

	if (dispatch) {
		switch (user.locked_role) {
			case 'customer':
				return <Redirect to={`/customer/${user.firstname}`} />;

			case 'freelancer':
				return <Redirect to={`/freelancer/${user.firstname}`} />;

			case 'admin':
				return <Redirect to={`/admin/${user.firstname}`} />;

			default:
				return <Redirect to="/login" />;
		}
	}

	return (
		<div className="fakebody">
			<div className="form-box">
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
			</div>
		</div>
	);
};
