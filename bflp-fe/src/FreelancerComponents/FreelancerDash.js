import React, { useState } from 'react';
import { JobBoard } from './JobBoard';
import DashboardIcon from '../assets/dashboard-24px.svg';
import jobicon from '../assets/public-24px.svg';
import settingsIcon from '../assets/settings-24px.svg';
import messages from '../assets/chat-24px.svg';
import openmenu from '../assets/menu-24px.svg';
import closemenu from '../assets/menu_open-24px.svg';
import { Settings } from './Settings';
import { Home } from './Home';
import { Communication } from './Communication';

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
	const [tabList, setListTabs] = useState([
		<img className="icon" src={DashboardIcon} />,
		<img className="icon" src={jobicon} />,
		<img className="icon" src={messages} />,
		<img className="icon" src={settingsIcon} />,
	]);

	const tabs = {
		0: <Home />,
		1: <JobBoard />,
		2: <Communication />,
		3: <Settings data={props.data} />,
	};

	const tabText = ['Dashboard', 'JobBoard', 'Messages', 'Settings'];
	const [activeTab, setActiveTab] = useState(0);
	const [hamburgerMenu, setHamburgerMenu] = useState(false);
	const displayTab = tabs[activeTab];

	return (
		<div>
			<nav className={hamburgerMenu ? 'navbar-wide' : 'navbar'}>
				<ul className="navbar-nav ">
					<img
						className="burgermenu"
						src={hamburgerMenu ? closemenu : openmenu}
						onClick={() => setHamburgerMenu(!hamburgerMenu)}
					/>

					{tabList.map((tab, index) => (
						<li
							className={activeTab === index ? 'active-tab' : 'nav-item'}
							key={index}
							onClick={() => {
								setActiveTab(index);
							}}
						>
							<div className="nav-link">
								{tab}
								<span className={hamburgerMenu ? 'show-text' : 'hide-text'}>{tabText[index]}</span>
							</div>
						</li>
					))}
				</ul>
			</nav>
			<div className="main">{displayTab}</div>
		</div>
	);
};
