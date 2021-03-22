import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../aLOGOPREEM/LOGOpngFiles/PreemLogo-03.png';
import '../styles/Shared-Styles/Recovery.css';

export const Recovery = () => {
	const [email, setEmail] = useState('');
	const [questions, setQuestions] = useState();
	const [timeLeft, setTimeLeft] = useState(1000);
	const [bademail, setBademail] = useState(false);
	const [loading, setLoading] = useState(false);
	const [checked, setChecked] = useState();

	const [answers, setAnswers] = useState({
		answer1: '',
		answer2: '',
	});

	const handleChange = (e) => {
		setAnswers({
			...answers,
			[e.target.name]: e.target.value,
		});
	};

	const checkanswers = (e) => {
		setLoading(true);
		Axios.post(`http://localhost:2019/recover/${email}?answer1=${answers.answer1}&answer2=${answers.answer2}`)
			.then((res) => {
				setChecked(res.data);
				console.log(res.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err.response) {
					setLoading(false);
				}
				if (err.request) {
					setLoading(false);
				}
			});
	};

	const handlemail = (e) => {
		setEmail(e.target.value);
		setTimeLeft(3);
		setBademail(false);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);
		if (timeLeft === 0) {
			Axios.get(`http://localhost:2019/getquestions/${email}`)
				.then((res) => {
					setQuestions(res.data);
				})
				.catch((err) => {
					if (err.response) {
						setBademail(true);
						setQuestions(null);
					}
					if (err.request) {
						setBademail(true);
						setQuestions(null);
					}
				});
			clearTimeout(timer);
		}

		return () => clearTimeout(timer);

		// if (domains.some((o) => email.includes(o))) {
		// 	Axios.get(`http://localhost:2019/getquestions/${email}`)
		// 		.then((res) => {
		// 			setQuestions(res.data);
		// 		})
		// 		.catch((err) => {
		// 			if (err.response) {
		// 				console.log(err.response);
		// 			}
		// 			if (err.request) {
		// 				console.log(err.request);
		// 			}
		// 		});
		// } else {
		// 	setQuestions(null);
		// }
	}, [timeLeft]);

	console.log(timeLeft);

	return (
		<div className="recovery-cont">
			<div className="logobox">
				<img className="preemlogo" src={logo} />
				<p>Lets get back into your account. enter your email address and answer your security questions</p>
			</div>
			<form
				onSubmit={(e) => {
					checkanswers();
					e.preventDefault();
				}}
				className="recovery-form"
			>
				<input
					className="emailinput"
					type="text"
					id="login"
					name="answer1"
					value={email}
					onChange={handlemail}
					pltrueaceholder="email"
				/>
				{timeLeft != 0 && email && <div className="spinner"></div>}

				{bademail && (
					<div className="errorbox">
						<span className="bademail">
							either email {email} doesnt exist or is invalid please cheack and try again
						</span>
					</div>
				)}

				{questions && (
					<div className="security-questions">
						<span className="idkanymore">security questions</span>
						<span className="placeholderr">{questions.question1}</span>

						<input
							type="text"
							id="login"
							name="answer1"
							value={answers.answer1}
							onChange={handleChange}
							placeholder="answer"
						/>
						<span className="placeholderr">{questions.question2}</span>
						<input
							type="text"
							name="answer2"
							id="password"
							value={answers.answer2}
							onChange={handleChange}
							placeholder="answer"
						/>
					</div>
				)}
				{answers.answer1 && answers.answer2 && (
					<div className="submit-answers">
						<button type="submit" className="login-button1">
							submit
						</button>
						{loading && <div className="spinner"></div>}
					</div>
				)}
			</form>
			{checked === 'CORRECT' && (
				<div>
					<p>check your email!</p>
					<Link to="/login">back to login</Link>
				</div>
			)}
			{checked === 'WRONG' && <p>NAH FAM</p>}
		</div>
	);
};
