import { axiosWithAuth } from '../Utils/axiosWIthAuth';

const getMyInfo = () => {
	axiosWithAuth()
		.get('http://localhost:2019/getmyinfo')
		.then((res) => {
			return res.data.locked_role;
		})
		.catch((err) => console.log(err.response));
};

export default { getMyInfo };
