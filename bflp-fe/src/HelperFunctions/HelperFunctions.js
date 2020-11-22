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
