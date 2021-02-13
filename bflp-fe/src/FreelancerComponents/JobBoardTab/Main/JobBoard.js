import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../../Utils/axiosWIthAuth';
import '../../../styles/FreelancerStyles/JobBoardTab/Left-side.css';
import '../../../styles/FreelancerStyles/JobBoardTab/Right-side.css';
import { Job } from './Job';
import { JobSideBar } from './JobSideBar';
import {sortem} from '../../../HelperFunctions/HelperFunctions';
import {getJobs} from '../../../HelperFunctions/NetworkRequests'
import { JobHeader } from './JobHeader';
import { FilterJobs } from '../Widgets&Tools/FilterJobs';
import { Pagination } from '../Widgets&Tools/Pagination';

export const JobBoard = (props) => {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [activeJob, setActiveJob] = useState(0);
	const [selection, setSelection] = useState(props.category);
	const [sortBy, setSortBy] = useState('None');
	const [totalPages, setTotalPages] = useState();
	const [filteroptions, setFilteroptions] = useState({
		field: '',
		specialization: [],
		min: '',
		max: '',
	});

	const handleActive = (index) => {
		setActiveJob(index);
	};

	useEffect(() => {
		getJobs(setLoading, setPosts, selection, filteroptions, setTotalPages);
	}, [selection, filteroptions]);

	sortem(sortBy, posts);
	const PanelData = posts[activeJob];

	if (totalPages && PanelData && !loading) {
		return (
			<div className="jobBoard">
				<div className="leftside">
					<JobHeader
						sortby={sortBy}
						setSortby={setSortBy}
						totaljobs={posts.length}
						filteroptions={filteroptions}
						setFilteroptions={setFilteroptions}
					/>
					<Job jobs={posts} handleactive={handleActive} active={activeJob} />
					<Pagination totalPages={totalPages} />
				</div>
				<div className="rightside">
					<JobSideBar data={PanelData} />
				</div>
			</div>
		);
	} else {
		return <h2>Loading...</h2>;
	}
};
