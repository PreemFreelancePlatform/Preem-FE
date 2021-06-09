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

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const nth = function (d) {
	if (d > 3 && d < 21) return 'th';
	switch (d % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};

export const getDays = (month, year) => {
	var date = new Date(year, month, 1);
	var days = [];
	while (date.getMonth() === month) {
		days.push(`${monthNames[month]} ${new Date(date).getDate()}${nth(new Date(date).getDate())}`);
		date.setDate(date.getDate() + 1);
	}
	return days;
};

export const sortOnLoad = (sortby, posts) => {
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

export const UpdateOnResize = (setValue) => {
	if (window.innerHeight > 1280 && window.innerHeight <= 1600) {
		setValue(13);
	}
	if (window.innerHeight >= 800 && window.innerHeight <= 1280) {
		setValue(9);
	}
};

// export const getInitialValue = () => {
// 	if (window.innerHeight > 1280 && window.innerHeight <= 1600) {
// 		setPagesize(15);
// 	}
// 	if (window.innerHeight >= 800 && window.innerHeight <= 1280) {
// 		setPagesize(8);
// 	}
// };

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
