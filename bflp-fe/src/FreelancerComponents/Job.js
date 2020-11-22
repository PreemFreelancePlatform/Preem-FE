import React, { useState } from 'react';

export const Job = ({ jobs, loading, handleactive }) => {
	// write fucntion that only lets you apply to something once

	/*  
	|person posting|color coded stack(website)|How long ago was posted|		
	
	*/
	if (loading) {
		return <h2>Loading.....</h2>;
	}

	console.log(jobs);

	return (
		<div className="leftside-content">
			<div className="jobheader">
				
			</div>
			{jobs.map((item, index) => (
				<div key={index} className="row">
					<li className="row-container">
						<span>{item.task}</span>
					</li>
					<li className="row-container">
						<span>here is some info</span>
					</li>
					<li className="row-container">
						<span>here is some info</span>
					</li>
					<li className="row-container">
						<span>here is some info</span>
					</li>
				</div>
			))}
		</div>
	);
};
