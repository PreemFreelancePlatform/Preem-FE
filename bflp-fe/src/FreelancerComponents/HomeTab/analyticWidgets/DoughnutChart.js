import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = () => {
	const options = {
		maintainAspectRatio: false,
		cutout: '75%',
		radius: '100%',
		plugins: {
			legend: {
				position: 'bottom',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
				},
			},
		},
	};

	const data = {
		labels: ['completed on time', 'completed late', 'uncompleted'],
		datasets: [
			{
				data: [250, 100, 10],
				backgroundColor: ['rgba(0, 98, 255)', 'rgb(255,0,255)', 'rgb(231, 67, 67)'],
				// borderWidth: ['1', '6', '6'],
				hoverOffset: 10,
			},
		],
	};

	return (
		<div className="doughnut-chart">
			<Doughnut data={data} options={options} />
		</div>
	);
};
