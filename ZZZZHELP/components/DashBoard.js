import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchProjects } from '../actions/actions';
import { axiosWithAuth } from '../utils/axiosWIthAuth';
import Projects from './Projects';

const DashBoard = (props) => {
	const { id } = useParams();

	const [data, setData] = useState({
		name: '',
		description: '',
		background: '',
		city: '',
		state: '',
		image_url: '',
	});

	const handleChanges = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		props.FetchProjects(id);
	}, []);

	const submit = (e) => {
		e.preventDefault();
		console.log('data to submit', data);
		axiosWithAuth()
			.post(`/api/applicant/${id}/project`, data)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err.response.data));
	};

	return (
		<div className="cont1">
			<div className="newproj">
				<form onSubmit={submit}>
					<input
						type="text"
						className="f3"
						value={data.name}
						name="name"
						placeholder="name"
						onChange={handleChanges}
					/>
					<input
						type="text"
						className="f3"
						value={data.description}
						name="description"
						placeholder="description"
						onChange={handleChanges}
					/>
					<input
						type="text"
						className="f3"
						value={data.background}
						name="background"
						placeholder="background"
						onChange={handleChanges}
					/>
					<input
						type="text"
						className="f3"
						value={data.city}
						name="city"
						placeholder="city"
						onChange={handleChanges}
					/>
					<input
						type="text"
						className="f3"
						value={data.state}
						name="state"
						placeholder="state"
						onChange={handleChanges}
					/>
					<input
						type="text"
						className="f3"
						value={data.image_url}
						name="image_url"
						placeholder="image_url"
						onChange={handleChanges}
					/>
					<button className="button1" type="submit">
						Make Project
					</button>
				</form>
			</div>

			<div className="projects">
				{props.projects.map((item) => {
					return (
						<div key={item.id}>
							<Projects data={item} key={item.id} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		projects: state.projects,
	};
};

export default connect(mapStateToProps, { FetchProjects })(DashBoard);
