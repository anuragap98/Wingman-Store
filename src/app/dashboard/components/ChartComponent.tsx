"use client";

import React from "react";
import {
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	ComposedChart,
} from "recharts";

const data = [
	{ day: "Mon", incoming: 30, answered: 28, experts: 12 },
	{ day: "Tue", incoming: 35, answered: 30, experts: 10 },
	{ day: "Wed", incoming: 40, answered: 32, experts: 10 },
	{ day: "Thu", incoming: 55, answered: 50, experts: 15 },
	{ day: "Fri", incoming: 50, answered: 45, experts: 12 },
	{ day: "Sat", incoming: 52, answered: 48, experts: 11 },
	{ day: "Sun", incoming: 60, answered: 55, experts: 11 },
];

const ChartComponent = () => {
	return (
		<div style={{ width: "100%", height: 300 }}>
			<ResponsiveContainer>
				<ComposedChart
					data={data}
					margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid vertical={false} strokeDasharray="3 3" />
					<XAxis dataKey="day" tickLine={false} axisLine={false} />
					<YAxis
						yAxisId="left"
						orientation="left"
						tickLine={false}
						axisLine={false}
						tickCount={6}
						label={{
							value: "Consultations",
							angle: -90,
							position: "insideLeft",
						}}
					/>
					<YAxis
						yAxisId="right"
						orientation="right"
						tickLine={false}
						axisLine={false}
						tickCount={6}
						label={{
							value: "Experts Online",
							angle: 90,
							position: "insideRight",
						}}
					/>
					<Tooltip />
					<Legend
						align="left"
						wrapperStyle={{ fontSize: "12px", color: "#8A94A6" }}
						iconType="rect"
						iconSize={12}
					/>
					<Bar
						yAxisId="right"
						orientation={"right"}
						dataKey="experts"
						fill="#FFF3C6"
						name="Experts online"
					/>

					<Line
						yAxisId="left"
						type="monotone"
						dataKey="incoming"
						stroke="#8A94A6"
						name="Incoming"
						dot={false}
						strokeWidth={2}
					/>
					<Line
						yAxisId="left"
						type="monotone"
						dataKey="answered"
						stroke="#15B79F"
						name="Answered"
						dot={false}
						strokeWidth={2}
					/>
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ChartComponent;
