import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ user }) => {
	console.log(user);
	return (
		<div>
			<h1>Tab under development</h1>
			<Link to={`/${user.email}/apply`}>apply for new tag</Link>
		</div>
	);
};
