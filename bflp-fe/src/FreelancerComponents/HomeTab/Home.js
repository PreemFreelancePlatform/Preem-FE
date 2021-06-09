import React from 'react';
import { Link } from 'react-router-dom';
import { MoneyChart } from './analyticWidgets/MoneyChart';
import '../../styles/FreelancerStyles/HomeTab/HomeTab.css';
import { DoughnutChart } from './analyticWidgets/DoughnutChart';

export const Home = () => {
	return (
		<div className="homeTab">
			<div className="idek">
				<p className="greet">Good Morning, William</p>
				<p className="yeet">Here is whats happening in your shit today</p>
			</div>
			<div className="home-top">
				<div className="hometop-left">
					<div className="linechart-box">
						<h1 className="chart-header">Financial Progress</h1>
						<MoneyChart />
					</div>
					<div className="hometop-anas">
						<div className="ana-1">
							<p className="ana-title">Total Income</p>
							<p className="ana-int">{`$${'124,152'}`}</p>
						</div>
						<div className="ana-1">
							<p className="ana-title">Total Income</p>
							<p className="ana-int">{`$${'24,152'}`}</p>
						</div>
						<div className="ana-1">
							<p className="ana-title">Total Income</p>
							<p className="ana-int">{`$${'45,152'}`}</p>
						</div>
						<div className="ana-1">
							<p className="ana-title">Total Income</p>
							<p className="ana-int">{`$${'4,152'}`}</p>
						</div>
					</div>
				</div>
				<div className="hometop-right">
					<h1 className="chart-header">Projects</h1>
					<DoughnutChart />
				</div>
			</div>

			<div className="home-bot">
				<div></div>
			</div>
		</div>
	);
};
