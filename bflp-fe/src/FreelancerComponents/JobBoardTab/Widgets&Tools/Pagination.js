import React, { useState, useEffect } from 'react';

export const Pagination = ({ setPage, page }) => {
	return (
		<div className="pagination">
			{/* <button onClick={() => {setPage(page - 1)}}>previous</button> */}
			<button
				onClick={() => {
					setPage(page + 1);
				}}
			>
				Next
			</button>
		</div>
	);
};
