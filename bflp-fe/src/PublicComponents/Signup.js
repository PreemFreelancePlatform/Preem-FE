import React, { useState } from 'react';
import Axios from 'axios';
import '../styles/Shared-Styles/signup.css';
import { Redirect } from 'react-router';
import { useForm } from 'react-hook-form';

export const Signup = (props) => {
	const { register, handleSubmit, errors } = useForm();
	const [view, setView] = useState(1);
	const [passwordconfirm, setPasswordConfirm] = useState('');
	const [loading, setLoading] = useState();

	const onSubmit = async (data) => {
		setLoading(true);
		await Axios.post(`http://localhost:2019/createnewfreelancer`, data).then((res) => {
			console.log(res);
			Axios.post(
				'http://localhost:2019/login',
				`grant_type=password&username=${data.email}&password=${data.password}`,
				{
					headers: {
						Authorization: `Basic ${btoa('BZwilson-client:BZwilson-secret')}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			)
				.then((res) => {
					localStorage.setItem('token', res.data.access_token);
					setTimeout(function () {
						window.location.replace(`/${data.email}`);
					}, 1000);
					setLoading(false);
				})
				.catch((err) => {
					if (err.response) {
						// client received an error response (5xx, 4xx)
						if (err.response.status === 401) {
							console.log('bad creds');
						}
					}
					if (err.request) {
						// client never received a response, or request never left
						console.log('req err');
					}
				});
		});
	};

	const validatePassword = async (value) => {
		if (value === passwordconfirm) {
			return true;
		} else {
			return false;
		}
	};

	if (loading === false) {
		return (
			<div className="spinbox">
				<div className="spinner-big"></div>
			</div>
		);
	}

	return (
		<div className="signup-box">
			<div className="signup-buttons">
				<button
					onClick={() => {
						setView(1);
					}}
					className={view === 1 ? 'freelancer-button-active' : 'freelancer-button'}
				>
					FREELANCE
				</button>
				<button
					onClick={() => {
						setView(2);
					}}
					className={view === 2 ? 'client-button-active' : 'client-button'}
				>
					HIRE FREELANCERS
				</button>
			</div>

			{view === 1 ? (
				<div className="free-signup">
					<span>Freelance with Preem</span>
					<p>
						wow yes so many benefits to joining preem mhm ok yes good stuff broether insert important words
						needs to be this long for style
					</p>
					<div>
						<form onSubmit={handleSubmit(onSubmit)} className="form-box-s">
							<input
								name="firstname"
								type="text"
								placeholder="First name"
								className="name"
								ref={register({ required: true })}
							/>
							<input
								name="lastname"
								type="text"
								placeholder="Last name"
								className="name"
								ref={register({ required: true })}
							/>
							<input
								type="text"
								name="email"
								placeholder="Email Address"
								className="mid"
								ref={register({ required: true })}
							/>
							<input
								type="password"
								name="password"
								placeholder="Password"
								className="name"
								ref={register({ required: true, validate: validatePassword })}
							/>
							<input
								onChange={(e) => setPasswordConfirm(e.target.value)}
								type="password"
								name="passwordconfirm"
								placeholder="Confirm Password"
								className="name"
							/>
							{errors.password && <p>passwords do not match</p>}
							<input type="submit" className="signup-button" />
						</form>
					</div>
				</div>
			) : (
				<div>fafagsga</div>
			)}
		</div>
	);
};
