import React, { useState } from 'react';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';

export const Settings = () => {

	const [selectedFile, setSelectedFile] = useState(null);
	const [preview, setPreview] = useState(null);
	const [image, setimage] = useState(null);


	const fileSelectedHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const fileUploadHandler = () => {
		const fd = new FormData();
		fd.append('imageFile', selectedFile);
		axiosWithAuth()
			.post(`http://localhost:2019/freelancer/4/upload`, fd)
			.then((res) => {
				console.log(res.data);
			});
		setSelectedFile(null);
	};

	return (
			<div className="imgcontainer">
				<div>
				<input type="file" onChange={fileSelectedHandler} />
				<button onClick={fileUploadHandler}>submit</button>
				</div>

				<div>
				<img className="profileimg"
				src={selectedFile ? URL.createObjectURL(selectedFile) : null}
				alt={selectedFile ? selectedFile.name : null} 
				/>
			</div>
		</div>
		

	);
};
