import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import React from 'react';
import { Redirect } from 'react-router-dom';

export const loginFlow = (user, setUser, working, setWorking) => {
	axiosWithAuth()
		.get('http://localhost:2019/getmyinfo')
		.then((res) => {
			setUser({
				role: res.data.locked_role,
				setup: res.data.setup,
				username: res.data.username,
				completed: true,
			});
			switch (user.role) {
				case 'customer':
					return <Redirect to={`/customer/${user.username}`} />;

				case 'freelancer':
					return <Redirect to={`/freelancer/${user.username}`} />;

				case 'admin':
					return <Redirect to={`/admin/${user.username}`} />;

				default:
					return <Redirect to="/login" />;
			}
		})
		.catch((err) => console.log(err.res));
};

export const JobBoardRequest = (setLoading, setPosts, field, filteroptions, setTotalPages) => {
	setLoading(true);
	axiosWithAuth()
		.get(
			`http://localhost:2019/customer/post/filter?field=${field}&specialization=${
				filteroptions.specialization
			}&min=${filteroptions.min}&max=${filteroptions.max}&page=${0}`
		)
		.then((res) => {
			setPosts(res.data.content);
			setLoading(false);
			setTotalPages(res.data.totalPages);
		})
		.catch((err) => console.log(err.res));
};

export const daysBetween = (StartDate, EndDate, setTime) => {
	const postDate = new Date(StartDate);
	// The number of milliseconds in all UTC days (no DST)
	const oneDay = 1000 * 60 * 60 * 24;

	// A day in UTC always lasts 24 hours
	const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
	const end = Date.UTC(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());

	// so it's safe to divide by 24 hours
	return (start - end) / oneDay;
};

export const sortem = (sortby, posts) => {
	switch (sortby) {
		case 'Newest':
			return posts.sort(function (a, b) {
				const todaysdate = new Date();
				return daysBetween(a.postdate, todaysdate) - daysBetween(b.postdate, todaysdate);
			});

		case 'Oldest':
			return posts.sort(function (a, b) {
				const todaysdate = new Date();
				return daysBetween(b.postdate, todaysdate) - daysBetween(a.postdate, todaysdate);
			});

		case 'Budget Low To High':
			return posts.sort(function (a, b) {
				return a.budget - b.budget;
			});

		case 'Budget High To Low':
			return posts.sort(function (a, b) {
				return b.budget - a.budget;
			});

		// case 'None':
		// 	return posts.sort(function (a, b) {
		// 		if (a.specialization < b.specialization) {
		// 			return -1;
		// 		}
		// 		if (a.specialization > b.specialization) {
		// 			return 1;
		// 		}
		// 		return 0;
		// 	});
	}
};

export const getSubList = (category) => {
	switch (category) {
		case 'Web Development':
			const arr1 = [
				'Back-End',
				'Front-End',
				'Full-Stack',
				'Web-Design',
				'UI/UX',
				'Testing',
				'AR/VR',
				'Wordpress',
			];
			return arr1;

		case 'App Development':
			const arr2 = ['Iphone', 'Android', 'Mac', 'Windows', 'Cross-Platform'];
			return arr2;

		case 'Game Development':
			const arr3 = [
				'Environmental Artist',
				'Character Artist',
				'3d Animation',
				'3d Modeling',
				'Effects Artist',
				'UI/U',
				'Level Designer',
				'2d artist',
				'2d Animation',
				'Sound Design',
				'Full-Stack',
			];
			return arr3;

		case 'Design & Creative':
			const arr4 = [
				'2d animation',
				'3d animation',
				'ar design',
				'vr design',
				'Audio editing',
				'Audio production',
				'marketing',
				'fashion design',
				'graphic design',
				'music composition',
				'musician',
				'video editing',
				'voice acting',
			];
			return arr4;

		case 'Data Science':
			const arr5 = [
				'Data Analytics',
				'Data Engineering',
				'Data Extraction',
				'Data Mining',
				'Data Processing',
				'Data Visualization',
				'Deep Learning',
				'Experimentation & Testing',
				'Knowledge Representation',
				'Machine Learning',
			];
			return arr5;

		case 'IT':
			const arr6 = ['DevOps Engineering', 'information security', 'network security'];
			return arr6;

		default:
			return 'none';
	}
};

// 	Mobile Development {
// 	IOS App Dev
// 	Andriod App Dev
// 	Testing
// 	}

// 	desktop Dev {
// 	Testing
// 	Desktop Applications
// 	}

// 	Game Dev {
// 	IOS Dev
// 	Andriod Dev
// 	desktop game Dev
// 	Testing

// 	}

// 	Design & Creative{
// 	2d animation
// 	3d animation
// 	ar design
// 	vr design
// 	Audio editing
// 	Audio production
// 	marketing
// 	fashion design
// 	graphic design
// 	music composition
// 	musician
// 	video editing
// 	voice acting
// 	}

// 	Data Science{
// 	Data Analytics
// 	Data Engineering
// 	Data Extraction
// 	Data Mining
// 	Data Processing
// 	Data Visualization
// 	Deep Learning
// 	Experimentation & Testing
// 	Knowledge Representation
// 	Machine Learning
// 	}

// 	IT{
// 	DevOps Engineering
// 	information security
// 	network security
// 	}
