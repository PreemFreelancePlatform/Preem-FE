import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JobBoard from './JobBoard';

/* 
lets figure out all the stuff your going to bae able to do here
 As a freelancer i can:
    view current projects im working on.
    view customer queue if any
    view customer messages

    view any analytics
    change any of my profile information
    view job board and aply to jobs

who can view me?
    other freelancers
    customers
    admin

who can make changes on my behalf?
    me
    admin
*/

export const FreelancerDash = (props) => {
	const [tabIndex, setTabIndex] = useState(0);
	const [subtabIndex, setSubTabIndex] = useState(0);

	return (
		<div className="tabdiv">
			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<div className="nav">
					<div className="profile">
						<h1>wherepicture will be</h1>
					</div>

					<div>
						<TabList className="tablist">
							<Tab className={tabIndex === 0 ? 'active' : 'nonactive'}>workspace</Tab>
							<Tab className={tabIndex === 1 ? 'active' : 'nonactive'}>Analytics</Tab>
							<Tab className={tabIndex === 2 ? 'active' : 'nonactive'}>messages</Tab>
							<Tab className={tabIndex === 3 ? 'active' : 'nonactive'}>job board</Tab>
							<Tab className={tabIndex === 4 ? 'active' : 'nonactive'}>account settings </Tab>
						</TabList>
					</div>
				</div>

				<div>
					<TabPanel>
						<h1>analytics</h1>
					</TabPanel>

					<TabPanel>
						<h1>analytics</h1>
					</TabPanel>

					<TabPanel>
						<h1>messages</h1>
					</TabPanel>

					<TabPanel>
						<JobBoard />
					</TabPanel>

					<TabPanel>
						<h1>account settings</h1>
					</TabPanel>
				</div>
			</Tabs>
		</div>
	);
};
