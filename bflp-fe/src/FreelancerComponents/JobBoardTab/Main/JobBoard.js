import React, { useState, useEffect, useRef } from 'react';
import { axiosWithAuth } from '../../../Utils/axiosWIthAuth';
import '../../../styles/FreelancerStyles/JobBoardTab/Left-side.css';
import '../../../styles/FreelancerStyles/JobBoardTab/Right-side.css';
import { Job } from './Job';
import { JobSideBar } from './JobSideBar';
import { sortOnLoad } from '../../../HelperFunctions/HelperFunctions';
import { JobHeader } from './JobHeader';
import { Pagination } from '../Widgets&Tools/Pagination';

export const JobBoard = (props) => {
	const [activeJob, setActiveJob] = useState(0);
	const [sortBy, setSortBy] = useState('none');
	const [page, setPage] = useState(0);

	const [request, setRequest] = useState({
		posts: [],
		loading: true,
		totalPages: 0,
	});
	const [filteroptions, setFilteroptions] = useState({
		category: [...props.data.categories],
		tags: [],
		min: '',
		max: '',
	});

	const handleActive = (index) => {
		setActiveJob(index);
	};

	sortOnLoad(sortBy, request.posts);

	useEffect(() => {
		axiosWithAuth()
			.get(
				`http://localhost:2019/customer/post/filter?category=${filteroptions.category}&tags=${''}&min=${
					filteroptions.min
				}&max=${filteroptions.max}&page=${0}`
			)
			.then((res) => {
				setRequest({
					posts: res.data.content,
					loading: false,
					totalPages: res.data.totalPages,
				});
			})
			.catch((err) => console.log(err.res));
	}, [page]);

	const PanelData = request.posts[activeJob];

	console.log(request);

	if (request.posts.length) {
		return (
			<div className="jobBoard">
				<div className="leftside">
					<JobHeader
						sortby={sortBy}
						setSortby={setSortBy}
						totaljobs={request.posts.length}
						filteroptions={filteroptions}
						setFilteroptions={setFilteroptions}
					/>
					<Job jobs={request.posts} handleactive={handleActive} active={activeJob} />
					{/* <Pagination setPage={setPage} page={page} /> */}
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

{
	/* <Pagination totalPages={totalPages} /> */
}
