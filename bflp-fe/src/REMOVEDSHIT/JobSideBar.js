import React from 'react';
import calendar from '../../../assets/calendar_today-24px.svg';
import moneysign from '../../../assets/local_atm-24px.svg';
import summary from '../../../assets/format_align_left-24px.svg';
import { axiosWithAuth } from '../../../Utils/axiosWIthAuth';

export const JobSideBar = ({ applyToPost, data }) => {
	return (
		<div className="side-bar">
			<div className="side-header">
				<span className="side-id">{'# ' + data.postid}</span>
				<h3 className="side-task">{data.task}</h3>
				<div className="side-info">
					<div className="side-info-profile">
						<img className="clientimg" src={`data:image/jpg/png;base64,${data.customer.picByte}`} />
						<div className="side-info-name">
							<span className="rq">Requested by</span>
							<span>Duck Duckerson</span>
						</div>
					</div>

					<div className="side-info-time">
						<div className="icon-circle">
							<img src={calendar}></img>
						</div>

						<div className="side-info-date">
							<span className="rq">Due by</span>
							<span>January 12</span>
						</div>
					</div>

					{/* <div className="side-info-budget">
						<img src={moneysign}></img>
						<p>blahblah</p>
					</div> */}
				</div>
				<div className="side-content">
					<div className="side-content-icon">
						<img src={summary}></img>
						<h5 className="dah5">Description</h5>
					</div>
					<p>{data.description}</p>
				</div>
				<button
					onClick={() => {
						applyToPost(data.postid);
					}
					}
					className="submit-button"
				>
					Submit Profile
				</button>
			</div>
		</div>
	);
};
