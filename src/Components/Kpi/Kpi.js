"use client";

import React, { useState } from "react";
import KpiLine from "./KpiLine";

const Kpi = () => {
	const data = [43, 40, 50, 40, 70, 40, 45];
	const labelCharts = "Sales";
	const titleCharts = "Sales Last Week";
	const backgroundColor = "yellow";
	const lineTension = 0.4;
	const fill = true;
	const ticksColor = "black";

	return (
		<>
			<h2>Kpi</h2>
			<KpiLine
				data={data}
				labelCharts={labelCharts}
				titleCharts={titleCharts}
				colorBackground
				lineTension
				fill
				ticksColor
			></KpiLine>
		</>
	);
};

export default Kpi;
