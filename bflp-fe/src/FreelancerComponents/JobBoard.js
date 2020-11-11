import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import { Job } from './Job';
import { Pagination } from './Pagination';

export const JobBoard = () => {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(12);

	useEffect(() => {
		setLoading(true);
		axiosWithAuth()
			.get('http://localhost:2019/customer/post/posts')
			.then((res) => {
				setPosts(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err.res));
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="jobpost-cont">
			<h1 className="jobtitle">Job Board</h1>
			<div>
				<Job jobs={currentPost} loading={loading} />
				<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
			</div>
		</div>
	);
};
