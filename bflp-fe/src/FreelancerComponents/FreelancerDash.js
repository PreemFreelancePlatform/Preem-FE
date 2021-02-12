import React, { useState } from 'react';
import '../styles/Shared-Styles/Nav.css';
import { JobBoard } from './JobBoardTab/Main/JobBoard';
import DashboardIcon from '../assets/dashboard-24px.svg';
import jobicon from '../assets/public-24px.svg';
import settingsIcon from '../assets/settings-24px.svg';
import messages from '../assets/chat-24px.svg';
import openmenu from '../assets/menu-24px.svg';
import closemenu from '../assets/menu_open-24px.svg';
import { ReactComponent as Logo } from '../assets/adwords.svg';
import { ReactComponent as Account } from '../assets/account_circle-24px.svg';
import { ReactComponent as Notifications } from '../assets/notifications-24px.svg';

import { Settings } from './SettingsTab/Settings';
import { Home } from './HomeTab/Home';
import { Communication } from '../DeprecatedComponents/Communication';

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
		1: <JobBoard category={props.data.category}/>,
		2: <Communication />,
		3: <Settings data={props.data} />,
	};

	const tabText = ['Dashboard', 'JobBoard', 'Messages', 'Settings'];
	const [activeTab, setActiveTab] = useState(1);
	const [hamburgerMenu, setHamburgerMenu] = useState(false);
	const displayTab = tabs[activeTab];

	return (
		<div>
			<div className="topnavvy">
				<img
					className="icon"
					src={hamburgerMenu ? closemenu : openmenu}
					onClick={() => setHamburgerMenu(!hamburgerMenu)}
				/>
				<div className="mainlogo">
					<Logo />
					<span>Simple</span>
				</div>

				<div className="navright">
					<Notifications />
					<Account />
				</div>
			</div>
			<nav className={hamburgerMenu ? 'navbar-wide' : 'navbar'}>
				<ul className="navbar-nav">
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
