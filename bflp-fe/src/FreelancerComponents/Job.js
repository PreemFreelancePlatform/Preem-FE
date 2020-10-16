import React from 'react';

export const Job = (props) => {
	// write fucntion that only lets you apply to something once

	return (
		<div
			onClick={() => {
				console.log(props.id);
			}}
		>
			<h1>{props.name}</h1>
			<h1>{props.info}</h1>
			<h1>{props.tech}</h1>
		</div>
	);
};
