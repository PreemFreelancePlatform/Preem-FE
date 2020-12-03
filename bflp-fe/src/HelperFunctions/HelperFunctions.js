import { axiosWithAuth } from '../Utils/axiosWIthAuth';

export const JobBoardRequest = (setLoading, setPosts, field) => {
	setLoading(true);
	axiosWithAuth()
		.get(`http://localhost:2019/customer/post/field/${field}`)
		.then((res) => {
			setPosts(res.data);
			setLoading(false);
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

// export const daysBetween = (StartDate, EndDate) => {
// 	// The number of milliseconds in all UTC days (no DST)
// 	const oneDay = 1000 * 60 * 60 * 24;

// 	// A day in UTC always lasts 24 hours
// 	const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
// 	const end = Date.UTC(StartDate.getFullYear(), StartDate.getMonth(), StartDate.getDate());

// 	// so it's safe to divide by 24 hours
// 	return (start - end) / oneDay;
// };
