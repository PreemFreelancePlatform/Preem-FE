import React, { useEffect, useState } from 'react';
import '../styles/Shared-Styles/Setup.css';
import logo from '../aLOGOPREEM/LOGOpngFiles/PreemLogo-03.png';
import profile from '../assets/account_circle-24px.svg';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import { useForm } from 'react-hook-form';

export const Setup = (props) => {
	// if props pass down a cus then change axios stuff

	const [anim1, setAnim1] = useState();
	const [content, setContent] = useState();
	const [loading, setLoading] = useState();
	const [security, setSecurity] = useState();
	const [file, setFile] = useState({
		preview: '',
		raw: '',
	});

	console.log('render');

	useEffect(() => {
		setTimeout(function () {
			setAnim1(true);
			setTimeout(function () {
				setContent(true);
			}, 5000);
		}, 5200);
	}, []);

	const handleSubmit = async () => {
		setLoading(true);
		const fd = new FormData();
		fd.append('imageFile', file.raw);
		await axiosWithAuth()
			.patch(`http://localhost:2019/freelancer/upload/${props.data.freelancerid}`, fd)
			.then((res) => {
				return axiosWithAuth()
					.patch(`http://localhost:2019/freelancer/freelancer/${props.data.freelancerid}`, security)
					.then((res) => {
						setTimeout(function () {
							window.location.reload();
						}, 1000);
					});
			})
			.catch((err) => {
				if (err.response) {
					// client received an error response (5xx, 4xx)
					if (err.response.status === 401) {
						console.log('bad creds');
						setLoading(false);
					}
				}
				if (err.request) {
					// client never received a response, or request never left
					console.log('req err');
				}
			});
	};

	if (loading) {
		return (
			<div className="spinbox">
				<div className="spinner-big"></div>
			</div>
		);
	}

	return (
		<div className="setup-cont">
			<span className="welcomeanim">Welcome to preem</span>
			{anim1 && <span className="welcomeanim">Lets set up a few more things</span>}
			{content && (
				<div className="permabox">
					<img className="preemlogo-s" src={logo} />
					<div className={security ? 'slideybox-anim' : 'slideybox'}>
						<SecurityQuestions setSecurity={setSecurity} />
						{security && <UploadPic file={file} setFile={setFile} handleSubmit={handleSubmit} />}
					</div>
				</div>
			)}
		</div>
	);
};

const UploadPic = ({ file, setFile, handleSubmit }) => {
	const handleChange = (e) => {
		if (e.target.files.length) {
			setFile({
				preview: URL.createObjectURL(e.target.files[0]),
				raw: e.target.files[0],
			});
		}
	};

	return (
		<div className="box1">
			<p>Everyone has to have a profile picture becuase i said so</p>
			<label className="clicky" htmlFor="fileUpload">
				<input type="file" id="fileUpload" onChange={handleChange} />
				<img className="picboxxy" src={file.preview ? file.preview : profile} />
			</label>
			{file.preview && (
				<button
					onClick={(e) => {
						handleSubmit();
						e.preventDefault();
					}}
					className="pic-button"
				>
					save
				</button>
			)}
		</div>
	);
};

const SecurityQuestions = ({ setSecurity }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		data.setup = true;
		setSecurity(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="sec-form">
			<div className="infos">
				<span>Lets secure your account</span>
				<p>
					please choose and answer each question carefully, they will be used in the event of a lost password.
					Answers ARE case sensitive.
				</p>
			</div>

			<div className="formys">
				<select className="question" name="question1" ref={register({ required: true })}>
					<option value="What was your childhood nickname?">What was your childhood nickname? </option>
					<option value="What is the name of your favorite childhood friend?">
						What is the name of your favorite childhood friend?
					</option>

					<option value="What is the middle name of your youngest child?">
						What is the middle name of your youngest child?
					</option>
					<option value="What is your oldest sibling’s middle name?">
						What is your oldest sibling’s middle name?
					</option>
					<option value="What was your childhood phone number?">What was your childhood phone number?</option>
					<option value="What is your oldest cousin’s first name?">
						What is your oldest cousin’s first name?
					</option>
					<option value="What was the name of your first stuffed animal?">
						What was the name of your first stuffed animal?
					</option>
				</select>

				<input className="answer" placeholder="Answer" name="security1" ref={register({ required: true })} />

				<select className="question" name="question2" ref={register({ required: true })}>
					<option value="What was the name of your first dog?">What was the name of your first dog?</option>
					<option value="What street did you live on in high school?">
						What street did you live on in high school?
					</option>
					<option value="What is your oldest sibling’s birthday?">
						What is your oldest sibling’s birthday?
					</option>
					<option value="Where did your parents meet?">Where did your parents meet?</option>
					<option value="Where does your nearest sibling live?">Where does your nearest sibling live?</option>
					<option value="What is your youngest brother’s birthday month and year?">
						What is your youngest brother’s birthday month and year?
					</option>
					<option value="In what city or town was your first job?">
						In what city or town was your first job?
					</option>
				</select>

				<input className="answer" placeholder="Answer" name="security2" ref={register({ required: true })} />
			</div>
			<button className="save-button" type="submit">
				Next
			</button>
		</form>
	);
};
