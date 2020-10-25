import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JobBoard from './JobBoard';
import logo1 from '../iconsnstuff/baseline_tonality_black_18dp-1.png';
import DashboardIcon from '../assets/dashboard-24px.svg';
import profileicon from '../assets/account_circle-24px.svg';
import jobicon from '../assets/public-24px.svg';
import settingsIcon from '../assets/settings-24px.svg';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';
import messages from '../assets/chat-24px.svg';
import logo from '../assets/instagram-2-1.svg';
import { Settings } from './Settings';

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
	console.log(props.data);

	const [tabIndex, setTabIndex] = useState(0);
	const [subtabIndex, setSubTabIndex] = useState(0);
	const [name, setName] = useState(null);


	// const get = () => {
	// 	axios.get('http://localhost:2019/image/get/' + selectedFile.name).then((res) => {
	//         var name = res.data.name
	//         console.log(name.slice(-3))
	// 	});
	// };

	// return (
	// 	<div>
	// 		<input type="file" onChange={fileSelectedHandler} />
	// 		{/* <button onClick={fileUploadHandler}>submit</button> */}
	// 		{/* <button onClick={get}>fetiimage</button> */}
	// 		{/* {image ? <img src={`data:image/png;base64,${image}`} /> : ''} */}
	// 	</div>
	// );

	return (
		<div className="tabdiv">
			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<div className="grid">
					<div className="nav">
						<TabList className="tablist">
							{/* <Tab className={tabIndex === 0 ? 'active' : 'nonactive'}>
								<img className="profile" src={"f"} />
							</Tab> */}
							<Tab className={tabIndex === 1 ? 'active' : 'nonactive'}>
								<img className="icon" src={DashboardIcon} />
							</Tab>
							<Tab className={tabIndex === 2 ? 'active' : 'nonactive'}>
								<img className="icon" src={jobicon} />
							</Tab>
							<Tab className={tabIndex === 3 ? 'active' : 'nonactive'}>
								<img className="icon" src={messages} />
							</Tab>

							<Tab className={tabIndex === 5 ? 'active' : 'nonactive'}>
								<img className="icon" src={settingsIcon} />
							</Tab>
						</TabList>
					</div>

					<div className="main">
						<div className="topbar"></div>
						<TabPanel>
							<div className="div4">
								<div>
									<h1>HOME</h1>
								</div>
							</div>
						</TabPanel>

						<TabPanel>
							<div className="div4">
								<JobBoard />
							</div>
						</TabPanel>

						<TabPanel>
							<div className="div4">
								<h1>messages</h1>
							</div>
						</TabPanel>

						<TabPanel>
							<div className="settings">
								<h1 className="tabTitle">Profile Settings and save button</h1>
								<div className="contentContainer">
									<Settings self={props.data}/>
								</div>
							</div>
						</TabPanel>
					</div>
				</div>
			</Tabs>
		</div>
	);
};
