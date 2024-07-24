import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
);

const KpiLine = ({
	data,
	labelCharts,
	titleCharts,
	backgroundColor,
	lineTension,
	fill,
	ticksColor,
}) => {
	const canvasData = {
		datasets: [
			{
				label: labelCharts,
				borderColor: "navy",
				pointRadius: 0,
				fill,
				backgroundColor,
				lineTension,
				data,
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			x: {
				grid: {
					display: false,
				},
				labels: ["Mon", "Tur", "Wen", "Thu", "Fri", "Sat", "Sun"],
				ticks: {
					color: ticksColor,
					font: {
						family: "Nunito",
						size: 12,
					},
				},
			},
			y: {
				grid: {
					display: false,
				},
				border: {
					display: false,
				},
				min: 0,
				max: 80,
				ticks: {
					stepSize: 10,
					color: ticksColor,
					font: {
						family: "Nunito",
						size: 12,
					},
				},
			},
		},
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
	};

	const graphStyle = {
		minHeight: "10rem",
		maxWidth: "540px",
		width: "100%",
		border: "1px solid #C4C4C4",
		borderRadius: "0.375rem",
		padding: "0.5rem",
	};

	return (
		<>
			<div className="App">
				<p>{titleCharts} </p>
				<div style={graphStyle}>
					<Line id="home" options={options} data={canvasData} />
				</div>
			</div>
		</>
	);
};

export default KpiLine;
