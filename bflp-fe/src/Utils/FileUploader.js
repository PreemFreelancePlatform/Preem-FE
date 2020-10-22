import axios from 'axios';
import React, { useState } from 'react';

export const FileUploader = () => {
	const [name, setName] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [image, setimage] = useState(null);

	const fileSelectedHandler = (event) => {
		// setSelectedFile(event.target.files[0]);
		console.log(event.target.files[0].size);
	};

	// const fileUploadHandler = () => {
	// 	const fd = new FormData();
	// 	fd.append('imageFile', selectedFile, selectedFile.name);
	// 	axios.post('http://localhost:2019/image/upload', fd).then((res) => {
	// 		console.log(res.data);
	// 	});
	// };

	// const get = () => {
	// 	axios.get('http://localhost:2019/image/get/' + selectedFile.name).then((res) => {
	//         var name = res.data.name
	//         console.log(name.slice(-3))
	// 	});
	// };

	return (
		<div>
			<input type="file" onChange={fileSelectedHandler} />
			{/* <button onClick={fileUploadHandler}>submit</button> */}
			{/* <button onClick={get}>fetiimage</button> */}
			{/* {image ? <img src={`data:image/png;base64,${image}`} /> : ''} */}
		</div>
	);
};
