import React, { useState } from 'react';

export const Dropdown = ({ selection, setSelection }) => {
	// const [open, setOpen] = useState(false);

	// const handleClick = (item) => {
	// 	setSelection(item);
	// 	setOpen(false);
	// };

	return (
		<div className="dropdown">
			<p>{`(${selection})`} </p>
		</div>
	);
};

// <ul className={open ? 'show-dropdown' : 'hide-dropdown'}>
// 	{arr.map((item, index) => (
// 		<li
// 			onClick={() => {
// 				handleClick(item);
// 			}}
// 			key={index}
// 		>
// 			{selection === item ? '' : item}
// 		</li>
// 	))}
// </ul>
