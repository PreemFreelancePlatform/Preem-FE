import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWIthAuth';
import { useHistory } from 'react-router-dom';

export const LoginA = () => {
	const [LAcreds, setLACreds] = useState({
		username: '',
		password: '',
	});

	const handleChanges = (e) => {
		setLACreds({
			...LAcreds,
			[e.target.name]: e.target.value,
		});
	};

	let history = useHistory();

	const login = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/auth/applicant/login', LAcreds)
			.then((res) => {
				console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.token));
        history.push(`/applicant/${res.data.user}`)
			})
      .catch((err) => console.log(err.response.data.errorMessage));
      
      
      
	};

	return (
		<div>
			<form onSubmit={login}>
				<input
					className="f2"
					type="text"
					placeholder="username"
					name="username"
					value={LAcreds.username}
					onChange={handleChanges}
				/>
				<br />
				<br />
				<input
					className="f1"
					type="password"
					placeholder="password"
					name="password"
					value={LAcreds.password}
					onChange={handleChanges}
				/>
				<button className='button1'>Sign in!</button>
			</form>
		</div>
	);
};
