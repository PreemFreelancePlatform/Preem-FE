import React, { useState } from 'react';
import { axiosWithAuth } from '../../Utils/axiosWIthAuth';
import '../../styles/FreelancerStyles/SettingsTab/accountSettings.css';

export const Settings = (props) => {
	const [file, setFile] = useState({
		preview: '',
		raw: '',
	});

	const handleChange = (e) => {
		if (e.target.files.length) {
			setFile({
				preview: URL.createObjectURL(e.target.files[0]),
				raw: e.target.files[0],
			});
		}
	};

	const fileUploadHandler = () => {
		const fd = new FormData();
		fd.append('imageFile', file.raw);
		axiosWithAuth()
			.patch(`http://localhost:2019/customer/upload/1`, fd)
			.then((res) => {
				console.log(res.data);
			});
	};

	return (
		// <div className="contentContainer">
		// 	<div className="imgcontainer">
		// 		<div className="imgshape">
		//
		// 		</div>
		// 		<input type="file" id="fileUpload" onChange={handleChange} />
		// 	</div>
		// 	<button onClick={fileUploadHandler}>upload dat mf</button>
		// </div>

		<div className="account-settings-cont">
			<h4 className="AS-header">Account Settings</h4>

			<span>Profile</span>
			<div className="profile-content">
				<div className="profile-picture">
					<img
						className="actual-img"
						src={file.preview ? file.preview : `data:image/jpg/png;base64,${props.data.picByte}`}
					/>
				</div>
				<div className="username">
					<span>Username</span>
					<h5>{props.data.username}</h5>
					<label className="photochange" htmlFor="fileUpload">
						<input type="file" id="fileUpload" onChange={handleChange} />
						Change Photo
					</label>

					<button
						type="submit"
						onClick={() => {
							fileUploadHandler();
						}}
					>
						upload dat shit
					</button>
				</div>
			</div>

			<span>Security</span>
			<div className="security-content"></div>

			<span>Notifications</span>
			<div className="notifications-content"></div>

			<div className="billing">
				<div className="billing-content"></div>
			</div>
		</div>
	);
};
