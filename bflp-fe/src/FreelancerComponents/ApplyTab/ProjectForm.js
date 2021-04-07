import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ProjectForm = ({ onSubmit }) => {
	const [projects, setProjects] = useState();
	const [githubs, setGithubs] = useState();

	return (
		<div>
			<input
				placeholder="Project"
				name="projects"
				onChange={(e) => {
					setProjects(e.target.value);
				}}
			/>
			<input
				placeholder="Proof"
				name="githubs"
				onChange={(e) => {
					setGithubs(e.target.value);
				}}
			/>
			<button
				onClick={(e) => {
					onSubmit(projects, githubs);
					e.preventDefault();
				}}
			>
				save
			</button>
		</div>
	);
};
