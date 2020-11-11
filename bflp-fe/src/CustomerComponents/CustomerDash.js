import React, { useState } from 'react';

import Browse from './Browse';
import { JobPostForm } from './JobPostForm';

/* 
lets figure out all the stuff your going to bae able to do here
 As a customer i can:
    view freelancers
    hire a viewed freelancer
    post a job to board
    view freelancers applied to a job
    settings 

*/

export const CustomerDash = (props) => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<div>
			<h1>{props.data.username}</h1>

			<JobPostForm id={props.data.id} />
		</div>
	);
};
