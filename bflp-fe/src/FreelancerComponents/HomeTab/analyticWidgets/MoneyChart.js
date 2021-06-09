import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getDays, nth } from '../../../HelperFunctions/HelperFunctions';

export const MoneyChart = () => {
	var current = new Date();
	const [chartlabels, setChartlabels] = useState();

	const monthNames = ['January', 'February', 'March', 'April', 'may', 'june', 'july'];

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		spanGaps: '50',
		plugins: {
			legend: {
				display: false,
			},
		},
		elements: {
			line: {
				fill: 'start',
				tension: 0.3,
				borderColor: 'blue',
				borderWidth: 1.6,
			},
		},

		scales: {
			x: {
				ticks: {
					maxTicksLimit: 8,
					maxRotation: 0,
					minRotation: 0,
					font: {
						size: 10,
					},
				},

				grid: {
					display: false,
					drawBorder: false,
				},
			},

			y: {
				suggestedMax: 2000,
				beginAtZero: true,
				ticks: {
					autoSkip: true,
					maxTicksLimit: 6,
					font: {
						size: 10,
					},
				},
				grid: {
					drawBorder: false,
					// display: false,
				},
			},
		},
	};

	const data = (canvas) => {
		const ctx = canvas.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, 400);
		gradient.addColorStop(0, 'rgb(164,214,253)');
		gradient.addColorStop(1, 'rgb(255,255,255)');

		return {
			labels: monthNames,
			datasets: [
				{
					backgroundColor: gradient,
					borderColor: 'rgb(99, 173, 241)',
					borderWidth: 2,
					data: [500, 600, 925, 256, 100, 1250, 1600, 2000, 200, 200],
				},
			],
		};
	};

	return <Line data={data} options={options} />;
};
