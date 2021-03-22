import Axios from 'axios';
import logo from '../aLOGOPREEM/LOGOpngFiles/PreemLogo-03.png';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Check } from '../assets/done-24px.svg';
import { login } from '../HelperFunctions/NetworkRequests';
import { Link, Redirect } from 'react-router-dom';
import '../styles/Shared-Styles/Login.css';

export const Login = () => {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState();
	const [badCreds, setBadCreds] = useState(false);
	const [check, setCheck] = useState(false);

	const onSubmit = (data) => {
		login(data, setBadCreds, setLoading);
	};

	return (
		<div className="main-login-cont">
			{badCreds && <span className="bad-creds">password or email incorrect</span>}
			<div className="box-header">
				<img className="preemlogo" src={logo} />
				<p>Welcome back! Please log in to your account</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="forms-login">
				<span className="placeholder">Email Address</span>
				<input
					className="loginforminput"
					type="text"
					name="email"
					id="email"
					ref={register({ required: true })}
				/>
				<span className="placeholder">Password</span>
				<input
					className="loginforminput"
					type="password"
					name="password"
					id="password"
					ref={register({ required: true })}
				/>

				<div className="login-buttons">
					<input type="submit" className="login-button1" />

					<Link to="/signup" type="button" className="login-button2">
						Sign up
					</Link>
				</div>
			</form>
			<div className="stuff">
				<div className="remember">
					<div
						className={check ? 'check-on' : 'check'}
						onClick={() => {
							setCheck(!check);
						}}
					>
						<Check />
					</div>
					<span className="thetext">Remember me</span>
				</div>
				<Link to="/recovery" className="thetextF">
					Forgot password?
				</Link>
			</div>
		</div>
	);
};
