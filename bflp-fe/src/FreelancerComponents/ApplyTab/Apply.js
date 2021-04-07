import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getSubList } from '../../HelperFunctions/HelperFunctions';
import { ReactComponent as Add } from '../../assets/dashicons/add1.svg';
import '../../styles/FreelancerStyles/ApplyTab/Apply.css';
import { ProjectForm } from './ProjectForm';
import { axiosWithAuth } from '../../Utils/axiosWIthAuth';

export const Apply = (props) => {
	// tag application flow
	// what category are we applying for? (select form)
	// ok what tags are we applying for (select form)
	// new page rendered based upon forms selection

	// show us your favorite project
	// give choice on how they want to show us project depending on tag
	// i need to go through each tag and make sure to provide a way to upload project
	// send to backend admin dashboard to review and approve or deny
	const [tagRequest, setTagRequest] = useState({
		category: 'Web Development',
		tags: [],
		projects: [],
		githubs: [],
	});

	const Sendinfo = () => {
		axiosWithAuth()
			.post(`http://localhost:2019/tagRequest/freelancer/${props.data.freelancerid}`, tagRequest)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err.res));
	};

	const onSubmit = (data1, data2) => {
		setTagRequest({
			...tagRequest,
			projects: [...tagRequest.projects, data1],
			githubs: [...tagRequest.githubs, data2],
		});
	};
	
	const populateArray = (item) => {
		var tempArr = [...tagRequest.tags];

		if (tempArr.includes(item)) {
			const index = tempArr.indexOf(item);
			tempArr.splice(index, 1);
			setTagRequest({
				...tagRequest,
				tags: tempArr,
			});
		} else {
			tempArr.push(item);
			setTagRequest({
				...tagRequest,
				tags: tempArr,
			});
		}
	};

	const styleTags = (item) => {
		if (tagRequest.tags.includes(item)) {
			return 'toggletag';
		} else {
			return 'tag-items';
		}
	};

	const addForm = () => {
		const tempArr = [...forms];
		tempArr.push(<ProjectForm onSubmit={onSubmit} />);
		setForms(tempArr);
	};

	const [forms, setForms] = useState([<ProjectForm onSubmit={onSubmit} />]);

	return (
		<div className="apply-tab">
			<form
				className="applybox-show"
				onSubmit={(e) => {
					Sendinfo();
					e.preventDefault();
				}}
			>
				<select
					className="select-category"
					name="category"
					onChange={(e) => {
						setTagRequest({
							...tagRequest,
							category: e.target.value,
							tags: [],
						});
					}}
				>
					<option value="Web Development">Web Development </option>
					<option value="App Development">App Development</option>
					<option value="Game Development">Game Development</option>
					<option value="Design & Creative">Design & Creative</option>
					<option value="Data Science">Data Science</option>
					<option value="IT">IT</option>
				</select>

				<div className="tagbox">
					{tagRequest.category &&
						getSubList(tagRequest.category).map((item, index) => (
							<div
								onClick={() => {
									populateArray(item);
								}}
								key={index}
								className={styleTags(item)}
							>
								<li>{item}</li>
							</div>
						))}
				</div>
				<div className="add-projects">
					<Add
						className="add"
						onClick={() => {
							addForm();
						}}
					/>
					{forms.map((item, index) => (
						<div key={index} className="idk">
							{item}
						</div>
					))}
				</div>
				<button>apply</button>
			</form>
		</div>
	);
};
