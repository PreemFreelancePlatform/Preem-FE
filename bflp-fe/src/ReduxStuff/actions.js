import { axiosWithAuth } from '../Utils/axiosWIthAuth';

const axios = require('axios');
const oauth = require('axios-oauth-client');

export const getMyInfo = (creds) => (dispatch) => {
	axios
		.post(
			'http://localhost:2019/login',
			`grant_type=password&username=${creds.username}&password=${creds.password}`,
			{
				headers: {
					// btoa is converting our client id/client secret into base64
					Authorization: `Basic ${btoa('clientid:clientsecret')}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		)
		.then((res) => {
			localStorage.setItem('token', res.data.access_token);

			return axiosWithAuth()
				.get('http://localhost:2019/getmyinfo')
				.then((res) => {
					dispatch({ type: 'SUCCESS', payload: res.data });
				})
				.catch((err) => console.log(err.res));
		});
};

// export const getprojects = () => dispatch => {
//   dispatch ({ type: "GETALLPROJECTS" });
//   axiosWithAuth()
//     .get(`/api/applicant/projects`)
//     .then(res => {
//       console.log(res.data);
//       dispatch({ type: "SUCCESSALL", payload: res.data });
//     })
//     .catch(err => console.error(err.response));
// };

// export const getproject = (id, projectid) => dispatch => {
//   dispatch ({ type: "GETPROJECT" });
//   axiosWithAuth()
//     .get(`/api/applicant/${id}/project/${projectid}`)
//     .then(res => {
//       dispatch({ type: "SUCCESSONE", payload: res.data });
//     })
//     .catch(err => console.error(err));
// };
