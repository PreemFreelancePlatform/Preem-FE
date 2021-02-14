import React, { useState } from 'react';
import { axiosWithAuth } from '../../Utils/axiosWIthAuth';

export const Settings = (props) => {
	const [file, setFile] = useState({
		preview: '',
		raw: '',
	});

	console.log(props.data);

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
			.post(`http://localhost:2019/freelancer/upload/${props.data.id}`, fd)
			.then((res) => {
				console.log(res.data);
			});
	};

	return (
		<div className="contentContainer">
			<div className="imgcontainer">
				<div className="imgshape">
					<label htmlFor="fileUpload">
						<img className="okk" src={file.preview ? file.preview : null} />
					</label>
				</div>
				<input type="file" id="fileUpload" onChange={handleChange} />
			</div>
			<button onClick={fileUploadHandler}>upload dat mf</button>
			{props.data.picByte && <img src={`data:image/jpg/png;base64,${props.data.picByte}`} />}
		</div>
	);
};
