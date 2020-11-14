import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import { Job } from './Job';
import { Pagination } from './Pagination';
import { JobSideBar } from './JobSideBar';

export const JobBoard = () => {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const [activeJob, setActiveJob] = useState(0);

	const handleActive = (index) => {
		setActiveJob(index);
	};

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
	const PanelData = posts[activeJob];
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="jobBoard">
			<div className="leftside">
				<div>
					<h1 className="jobtitle">Job Board</h1>
				</div>
				<Job jobs={currentPost} loading={loading} handleactive={handleActive} />
				<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
			</div>

			<div className="rightside">{PanelData ? <JobSideBar data={PanelData} /> : 'Loading'}</div>
		</div>
	);
};
