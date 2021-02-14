import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import Axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';

// ----- gets certain jobs based on filters
export const getJobs = (setLoading, setPosts, field, filteroptions, setTotalPages) => {
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

// ----- sends the backend your auth token, backend returns who the token belongs to.
export const getMyInfo = async (setUser) => {
	await axiosWithAuth()
		.get('http://localhost:2019/getmyinfo')
		.then((res) => {
			setUser(res.data);
		})
		.catch((err) => console.log(err.res));
};

// ----- after logging in we ask who the user to get the users role, see Dispatch function in Login component.
export const doLogin = (creds, setUser, setDispatch, setBadCreds) => {
	Axios.post(
		'http://localhost:2019/login',
		`grant_type=password&username=${creds.username}&password=${creds.password}`,
		{
			headers: {
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
					setUser(res.data);
					setDispatch(true);
				})
				.catch((err) => {
					console.log(err + 'getmyinfo failed');
				});
		})

		.catch((err) => {
			if (err.response) {
				// client received an error response (5xx, 4xx)
				if (err.response.status === 401) {
					setBadCreds(true);
					console.log(err);
				}
			}
			if (err.request) {
				// client never received a response, or request never left
				console.log('req err');
			}
		});
};
