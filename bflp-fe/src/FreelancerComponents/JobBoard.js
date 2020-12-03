import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import '../styles/FreelancerStyles/Job-Board/Left-side.css';
import '../styles/FreelancerStyles/Job-Board/Right-side.css';
import { Job } from './Job';
import { Pagination } from './Pagination';
import { JobSideBar } from './JobSideBar';
import { Dropdown } from './Dropdown';
import { JobBoardRequest, daysBetween } from '../HelperFunctions/HelperFunctions';
import { JobHeader } from './JobHeader';

export const JobBoard = () => {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const [activeJob, setActiveJob] = useState(0);
	const [selection, setSelection] = useState('Web');

	const handleActive = (index) => {
		setActiveJob(index);
	};

	useEffect(() => {
		JobBoardRequest(setLoading, setPosts, selection);
	}, [selection]);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	const PanelData = currentPosts[activeJob];

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="jobBoard">
			<div className="leftside">
				<JobHeader selection={selection} setSelection={setSelection} />
				<Job jobs={currentPosts} loading={loading} handleactive={handleActive} active={activeJob} />
				<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
			</div>
			<div className="rightside">{PanelData ? <JobSideBar data={PanelData} /> : 'Loading'}</div>
		</div>
	);
};
