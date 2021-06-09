import React, { useState } from 'react';
import { axiosWithAuth } from '../../Utils/axiosWIthAuth';
import '../../styles/FreelancerStyles/SettingsTab/accountSettings.css';
import { ReactComponent as Edit } from '../../assets/dashicons/edit1.svg';
import { useForm } from 'react-hook-form';

// import { FreelancerDash } from '../FreelancerDash';

export const Settings = (props) => {
	const [profileinfo, setProfileinfo] = useState({
		firstname: props.data.firstname,
		lastname: props.data.lastname,
		email: props.data.email,
	});

	const [file, setFile] = useState({
		preview: '',
		raw: '',
	});

	console.log(profileinfo);

	const handleChange = (e) => {
		if (e.target.files.length) {
			setFile({
				preview: URL.createObjectURL(e.target.files[0]),
				raw: e.target.files[0],
			});
		}
	};

	const handleForm = (e) => {
		setProfileinfo({
			...profileinfo,
			[e.target.name]: e.target.value,
		});
	};

	const fileUploadHandler = () => {
		const fd = new FormData();
		fd.append('imageFile', file.raw);
		axiosWithAuth()
			.patch(`http://localhost:2019/freelancer/upload/${props.data.freelancerid}`, fd)
			.then((res) => {
				console.log(res.data);
			});
	};

	return (
		<div className="settings-container">
			<div className="position">
				<div className="settings-header">
					<label className="edit-picture" htmlFor="fileUpload">
						<input type="file" id="fileUpload" onChange={handleChange} />
						{/* <Edit /> */}
					</label>
					<img
						className="main-photo"
						src={file.preview ? file.preview : `data:image/jpg/png;base64,${props.data.picByte}`}
					/>
				</div>
				<div className="settings-forms">
					<span className="label-fn">First Name</span>
					<input
						className="form-short"
						type="text"
						name="firstname"
						value={profileinfo.firstname}
						onChange={handleForm}
					/>

					<span className="label-ln">Last Name</span>
					<input
						className="form-short-right"
						type="text"
						name="lastname"
						value={profileinfo.lastname}
						onChange={handleForm}
					/>

					<span className="label-e">Email</span>
					<input
						className="form-long"
						type="text"
						name="email"
						value={profileinfo.email}
						onChange={handleForm}
					/>

					<span className="label-p">Password</span>
					<input
						placeholder="●●●●●●●●●●"
						className="form-long"
						type="password"
						name="password"
						onChange={handleForm}
					/>
				</div>
				<button
					onClick={() => {
						fileUploadHandler();
					}}
				>
					upload
				</button>
			</div>
		</div>
	);
};
