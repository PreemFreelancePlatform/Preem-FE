import React, { useState, useEffect, useRef } from 'react';
import { axiosWithAuth } from '../../../Utils/axiosWIthAuth';
import '../../../styles/FreelancerStyles/JobBoardTab/Left-side.css';
import '../../../styles/FreelancerStyles/JobBoardTab/Right-side.css';
import { Job } from './Job';
import { JobSideBar } from './JobSideBar';
import { sortOnLoad, UpdateOnResize } from '../../../HelperFunctions/HelperFunctions';
import { JobHeader } from './JobHeader';
import { Pagination } from '../Widgets&Tools/Pagination';

export const JobBoard = (props) => {
	const [activeJob, setActiveJob] = useState(0);
	const [sortBy, setSortBy] = useState('none');
	const [view, setView] = useState('row');
	const [height, setHeight] = useState();
	const [pageSize, setPagesize] = useState(10);

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

	window.addEventListener('resize', () => {
		UpdateOnResize(setPagesize);
	});

	const applyToPost = (postid) => {
		axiosWithAuth()
			.post(`http://localhost:2019/freelancer/${props.data.freelancerid}/post/${postid}`)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		axiosWithAuth()
			.get(
				`http://localhost:2019/customer/post/filter?category=${filteroptions.category}&tags=${''}&min=${
					filteroptions.min
				}&max=${filteroptions.max}&page=${0}&size=${pageSize}`
			)
			.then((res) => {
				setRequest({
					posts: res.data.content,
					loading: false,
					totalPages: res.data.totalPages,
				});
			})
			.catch((err) => console.log(err.res));
	}, [pageSize]);

	const PanelData = request.posts[activeJob];

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
						setView={setView}
						view={view}
					/>
					<Job jobs={request.posts} handleactive={handleActive} active={activeJob} />
					{/* <Pagination setPage={setPage} page={page} /> */}
				</div>
				<JobSideBar applyToPost={applyToPost} data={PanelData} />
			</div>
		);
	} else {
		return <h2>Loading...</h2>;
	}
};

{
	/* <Pagination totalPages={totalPages} /> */
}
