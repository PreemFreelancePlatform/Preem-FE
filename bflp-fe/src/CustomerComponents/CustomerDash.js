import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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

			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<TabList className="tabs">
					<Tab className={tabIndex === 0 ? 'active' : 'nonactive'}>browse</Tab>
					<Tab className={tabIndex === 1 ? 'active' : 'nonactive'}>post job</Tab>
					<Tab className={tabIndex === 2 ? 'active' : 'nonactive'}>active job</Tab>
					<Tab className={tabIndex === 3 ? 'active' : 'nonactive'}>Messages</Tab>
					<Tab className={tabIndex === 4 ? 'active' : 'nonactive'}>Settings </Tab>
				</TabList>

				<TabPanel>
					<Browse />
				</TabPanel>

				<TabPanel>
					<JobPostForm id={props.data.id} />
				</TabPanel>

				<TabPanel>
					<h1>asfasfasf</h1>
				</TabPanel>

				<TabPanel>
					<h1>asfasfasf</h1>
				</TabPanel>

				<TabPanel>
					<h1>asfasfasf</h1>
				</TabPanel>
			</Tabs>
		</div>
	);
};
