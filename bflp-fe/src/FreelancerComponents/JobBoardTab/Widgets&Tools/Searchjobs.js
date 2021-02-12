import React, { useState } from 'react';
import { ReactComponent as Searchsvg } from '../../../assets/search-24px.svg';

export const Searchjobs = () => {
	const [search, setSearch] = useState('');

	// const handleChange = (e) => {
	// 	setCreds({
	// 		...creds,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	return (
		<div className="searchbar">
			<input
				type="text"
				name="search"
				value={search}
				placeholder="Search Jobs"
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<Searchsvg />
		</div>
	);
};
