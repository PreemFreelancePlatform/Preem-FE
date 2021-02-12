import React, { useState } from 'react';
import showless from '../../../assets/expand_less-24px.svg';
import showmore from '../../../assets/expand_more-24px.svg';

export const SortJobs = ({ sortby, setSortby }) => {
	const arr = ['Newest', 'Oldest', 'Budget High To Low', 'Budget Low To High'];
	const [open, setOpen] = useState(false);

	const handleClick = (item) => {
		setSortby(item);
		setOpen(false);
	};

	return (
		<div className="dropdown">
			<span className="sortby">{'Sort by: '}</span>
			<span className="sort-selection">{sortby}</span>
			<img onClick={() => setOpen(!open)} src={!open ? showmore : showless} />
			<ul className={open ? 'show-dropdown' : 'hide-dropdown'}>
				{arr.map((item, index) => (
					<li
						onClick={() => {
							handleClick(item);
						}}
						key={index}
					>
						{sortby === item ? '' : item}
					</li>
				))}
			</ul>
		</div>
	);
};
