import React from 'react';

export const Job = ({ jobs, loading }) => {
	if (loading) {
		return <h2>Loading.....</h2>;
	}
	// write fucntion that only lets you apply to something once
	console.log(jobs);
	return (
		<table className="content-table">
			<thead>
				<tr>
					<th>COLUMN 1</th>
					<th>COLUMN 2</th>
					<th>COLUMN 3</th>
					<th>COLUMN 4</th>
					<th>COLUMN 5</th>
				</tr>
			</thead>
			<tbody>
				{jobs.map((jobs) => (
					<tr key={jobs.postid} className="rows">
						{/* <img src={`data:image/jpg/png;base64,${jobs.customer.picByte}`} className="postimage" /> */}
						<td>
							{jobs.customer.username}
							{jobs.customer.customeremail}
						</td>
						<td>{jobs.name}</td>
						<td>{jobs.description}</td>
						<td>{jobs.tech}</td>
						<td>date created</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
