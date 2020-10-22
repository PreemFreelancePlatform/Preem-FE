import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import JobBoard from './JobBoard';
import logo1 from '../iconsnstuff/baseline_tonality_black_18dp-1.png';
import DashboardIcon from '../assets/dashboard-24px.svg';
import profileicon from '../assets/account_circle-24px.svg';
import jobicon from '../assets/public-24px.svg';
import { axiosWithAuth } from '../Utils/axiosWIthAuth';

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
	console.log(props);

	const [name, setName] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [image, setimage] = useState(null);

	const fileSelectedHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const fileUploadHandler = () => {
		const fd = new FormData();
		fd.append('imageFile', selectedFile);
		axiosWithAuth()
			.post(`http://localhost:2019/freelancer/4/upload`, fd)
			.then((res) => {
				console.log(res.data);
			});
	};

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
						<div className="profile">
							<img className="icon" src={profileicon} />
						</div>

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
								<img className="icon" src={logo1} />
							</Tab>
							<Tab className={tabIndex === 4 ? 'active' : 'nonactive'}>
								<img className="icon" src={logo1} />
							</Tab>
						</TabList>
					</div>

					<div className="main">
						<div className="componentdiv">
							<TabPanel>
								<div>
									<input type="file" onChange={fileSelectedHandler} />
									<button onClick={fileUploadHandler}>submit</button>
								</div>
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
					</div>
				</div>
			</Tabs>
		</div>
	);
};
