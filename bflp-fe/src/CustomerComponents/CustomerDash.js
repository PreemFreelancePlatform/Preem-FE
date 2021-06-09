// import React, { useState } from 'react';
// import '../styles/Shared-Styles/Nav.css';
// import { JobBoard } from './JobBoardTab/Main/JobBoard';
// import { useParams } from 'react-router-dom';
// import { ReactComponent as Dash } from '../assets/dashicons/home2.svg';
// import { ReactComponent as Posts } from '../assets/dashicons/posts.svg';
// import { ReactComponent as Chat } from '../assets/dashicons/chat1.svg';
// import { ReactComponent as Cog } from '../assets/dashicons/settings3.svg';
// import { ReactComponent as Cog2 } from '../assets/dashicons/settings2.svg';
// import { ReactComponent as Tags } from '../assets/dashicons/apply1.svg';
// import { ReactComponent as Work } from '../assets/dashicons/office1.svg';
// import { ReactComponent as Bell } from '../assets/dashicons/bell1.svg';
// import { ReactComponent as Openmenu } from '../assets/menu-24px.svg';
// import { ReactComponent as Arrowdown } from '../assets/dashicons/arrowdown1.svg';

// export const CustomerDash = (props) => {
// 	const email = useParams();
// 	const text = ['Dashboard', 'Jobs', 'Messaging', 'Settings', 'Tags'];
// 	const [hamburgerMenu, setHamburgerMenu] = useState(false);
// 	const [activeTab, setActiveTab] = useState(1);

// 	// putting all components to be rendered in a obj
// 	const tabs = {
// 		0: <clientHome user={props.data} />,
// 		1: <JobBoard data={props.data} />,
// 		2: <Office data={props.data} />,
// 		3: <Communication data={props.data} />,
// 		4: <Settings data={props.data} />,
// 		5: <Apply data={props.data} />,
// 	};

// 	// iterate through these icons, when icon is clicked change active tab to index of tab.
// 	// find better way to do this
// 	const tabList = [
// 		<Dash className={activeTab === 0 ? 'icon-active' : 'icon'} />,
// 		<Posts className={activeTab === 1 ? 'icon-active' : 'icon'} />,
// 		<Work className={activeTab === 2 ? 'icon-active' : 'icon'} />,
// 		<Chat className={activeTab === 3 ? 'icon-active' : 'icon'} />,
// 		<Cog className={activeTab === 4 ? 'icon-active' : 'icon'} />,
// 		<Tags className={activeTab === 5 ? 'icon-active' : 'icon'} />,
// 	];

// 	const displayTab = tabs[activeTab];
// 	if (props.data.setup === false) {
// 		return <Setup data={props.data} />;
// 	}

// 	return (
// 		<div className="dash-flex">
// 			<div className="nav-box">
// 				{tabList.map((tab, index) => (
// 					<div
// 						onClick={() => {
// 							setActiveTab(index);
// 						}}
// 						className={'nav-items'}
// 					>
// 						{tab}
// 						{/*<p>{text[index]}</p>*/}
// 					</div>
// 				))}
// 			</div>

// 			<div className="top-nav">
// 				<div className="userbox">
// 					<Bell className="notifs" />
// 					<Cog2 className="notifs" />
// 					<div className="pic-name">
// 						<img src={`data:image/jpg/png;base64,${props.data.picByte}`} className="nav-pic" />
// 						<span>{`${props.data.firstname} ${props.data.lastname}`}</span>
// 						<Arrowdown className="iconsmall" />
// 					</div>
// 				</div>
// 			</div>
// 			{displayTab}
// 		</div>
// 	);
// };
