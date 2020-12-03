import React, { useState } from 'react';
import showless from '../assets/expand_less-24px.svg';
import showmore from '../assets/expand_more-24px.svg';

export const Dropdown = ({ selection, setSelection }) => {
	const [open, setOpen] = useState(false);
	const arr = ['Web', 'Mobile', 'Dev-ops', 'Systems'];

	const handleClick = (item) => {
		setSelection(item);
		setOpen(false);
	};

	return (
		<div className="dropdown">
			<p>{`(${selection})`} </p>
			<ul className={open ? 'show-dropdown' : 'hide-dropdown'}>
				{arr.map((item, index) => (
					<li
						onClick={() => {
							handleClick(item);
						}}
						key={index}
					>
						{selection === item ? '' : item}
					</li>
				))}
			</ul>
		</div>
	);
};
