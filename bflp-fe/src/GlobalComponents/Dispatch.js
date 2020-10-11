import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';

export const Dispatch = () => {
	let [user, setUser] = useState();
	const [loadingcompleted, setLoadingCompleted] = useState(false);

	const getInfo = async () => {
		try {
			const result = await axiosWithAuth().get('http://localhost:2019/getmyinfo');
			setUser(result.data);
		} catch (e) {
			console.log(e);
		}
		setLoadingCompleted(true);
	};
	console.log(user);

	useEffect(() => {
		getInfo();
    }, []);
    

	return 
    <div>

    </div>;
};
