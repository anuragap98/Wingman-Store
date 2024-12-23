"use client";

import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts";

import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
} from "@/components/ui/chart";
import { ChartTooltipContent } from "@/components/ui/chart";
import { ChartNoAxesColumnIncreasingIcon } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const vsPastData = [
	{ time: "This week", consultations: 90, order_closed: 80 },
	{ time: "Last week", consultations: 75, order_closed: 70 },
];

const vsPastChartConfig = {
	consultations: {
		label: "Consultations",
		color: "#CCFBEF",
	},
	order_closed: {
		label: "Order Closed",
		color: "#134E48",
	},
} satisfies ChartConfig;

const payload = [
	{ color: "#CCFBEF", value: "Consultations" },
	{ color: "#134E48", value: "Order Closed" },
];

const PeriodChart = () => {
	return (
		<Card className="h-full rounded-2xl shadow">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 font-semibold text-xs tracking-wider text-gray-500">
					<ChartNoAxesColumnIncreasingIcon size={12} strokeWidth={4} />
					<span>VS PAST PERIOD</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<ChartContainer
					config={vsPastChartConfig}
					className="min-h-[200px]  w-full"
				>
					<BarChart accessibilityLayer data={vsPastData}>
						<CartesianGrid
							vertical={false}
							stroke="#DCDFE4"
							strokeDasharray="5 5"
						/>
						<XAxis
							dataKey="time"
							tickLine={false}
							axisLine={false}
							tickMargin={10}
						/>
						<YAxis
							tickLine={false}
							tickCount={6}
							tickMargin={30}
							axisLine={false}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						{/* <Legend
								verticalAlign="bottom"
								height={36}
								content={({ payload }) => {
									if (!payload) return null;
									return (
										<div className="flex flex-wrap text-xs items-center gap-4 pt-8">
											<div className="h-px w-full rounded-full bg-gray-300" />
											{payload.map((entry, index) => (
												<div key={index} className="flex items-center gap-2">
													<div
														className="h-1 w-4 rounded-full"
														style={{ backgroundColor: entry.color }}
													/>
													<span className="text-gray-500">{entry.value}</span>
												</div>
											))}
										</div>
									);
								}}
							/> */}
						<Bar
							dataKey="consultations"
							fill="var(--color-consultations)"
							radius={4}
							name="Consultations"
						/>
						<Bar
							dataKey="order_closed"
							fill="var(--color-order_closed)"
							radius={4}
							name="Order Closed"
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-4">
				<div className="h-px w-full rounded-full bg-gray-300" />
				<div className="flex flex-wrap text-xs items-center gap-4">
					{payload.map((entry, index) => (
						<div key={index} className="flex items-center gap-2">
							<div
								className="h-1 w-4 rounded-full"
								style={{ backgroundColor: entry.color }}
							/>
							<span className="text-gray-500">{entry.value}</span>
						</div>
					))}
				</div>
			</CardFooter>
		</Card>
	);
};

export default PeriodChart;
