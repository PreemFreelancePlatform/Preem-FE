import React, { useState, useEffect } from 'react';

export const Pagination = ({ totalPages }) => {
	const [currentPage, setCurrentPage] = useState();
	const [pageArray, setPageArray] = useState([]);
	const [pageArrayWindow, setPageArrayWindow] = useState([]);

	useEffect(() => {
		const temparr = [];
		for (var i = 0; i < totalPages; i++) {
			temparr.push(i);
		}
		setPageArray(temparr);
	    setPageArrayWindow(pageArray.slice(0, 6));
	}, []);

    console.log(pageArrayWindow);


	return <div></div>;
};
