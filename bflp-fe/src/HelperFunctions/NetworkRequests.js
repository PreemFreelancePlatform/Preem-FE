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
export const getMyInfo = (setUser, setError, setLoading) => {
	setLoading(true);
	axiosWithAuth()
		.get('http://localhost:2019/getmyinfo')
		.then((res) => {
			setUser(res.data);
			setLoading(false);
		})
		.catch((err) => {
			if (err.response) {
				console.log(err.response);
				setError(true);
				setLoading(false);
			}

			if (err.request) {
				console.log(err.request);
				setError(true);
				setLoading(false);
			}
		});
};

// ----- after logging in we ask who the user to get the users role, see Dispatch function in Login component.
export const login = (data, setBadCreds, setLoading) => {
	Axios.post('http://localhost:2019/login', `grant_type=password&username=${data.email}&password=${data.password}`, {
		headers: {
			Authorization: `Basic ${btoa('OAUTHCLIENTID:OAUTHCLIENTSECRET')}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	})
		.then((res) => {
			localStorage.setItem('token', res.data.access_token);
			setTimeout(function () {
				window.location.replace(`/${data.email}`);
			}, 1000);
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
