import React, { useState } from 'react';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';

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
			.post(`http://localhost:2019/freelancer/upload/4`, fd)
			.then((res) => {
				console.log(res.data);
			});
	};

	{
		/* <img src={`data:image/jpg/png;base64,${props.self.picByte}`} /> */
	}
	return (
		<div className="imgcontainer">
			<div className="imgshape">
				<label htmlFor="fileUpload">
					<img className="okk" src={file.preview ? file.preview : null} />
				</label>
			</div>
			<input type="file" id="fileUpload" onChange={handleChange} />

			{/* <button onClick={fileUploadHandler}>submit</button> */}
		</div>
	);
};
