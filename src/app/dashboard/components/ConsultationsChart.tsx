"use client";

import {
	CartesianGrid,
	XAxis,
	YAxis,
	Bar,
	ResponsiveContainer,
	ComposedChart,
	Line,
} from "recharts";

import { MessageCircle } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const consultationsData = [
	{
		days: "Mon",
		incoming_consultations: 40,
		answered_consultations: 35,
		experts_online: 29,
	},
	{
		days: "Tue",
		incoming_consultations: 43,
		answered_consultations: 29,
		experts_online: 30,
	},
	{
		days: "Wed",
		incoming_consultations: 50,
		answered_consultations: 46,
		experts_online: 35,
	},
	{
		days: "Thu",
		incoming_consultations: 60,
		answered_consultations: 55,
		experts_online: 80,
	},
	{
		days: "Fri",
		incoming_consultations: 60,
		answered_consultations: 45,
		experts_online: 40,
	},
	{
		days: "Sat",
		incoming_consultations: 60,
		answered_consultations: 51,
		experts_online: 45,
	},
	{
		days: "Sun",
		incoming_consultations: 56,
		answered_consultations: 50,
		experts_online: 48,
	},
];

const payload = [
	{ color: "#8A94A6", value: "Incoming" },
	{ color: "#15B79F", value: "Answered" },
	{ color: "#FFF3C6", value: "Experts Online" },
];

const ConsultationsChart = () => {
	return (
		<Card className="h-full rounded-2xl shadow">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 font-semibold text-xs tracking-wider text-gray-500">
					<MessageCircle size={12} strokeWidth={4} />
					<span>CONSULTATIONS</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<ResponsiveContainer className="min-h-[200px] w-full">
					<ComposedChart data={consultationsData}>
						<CartesianGrid
							vertical={false}
							stroke="#DCDFE4"
							strokeDasharray="5 5"
						/>
						<XAxis
							dataKey="days"
							className="text-xs"
							tickLine={false}
							axisLine={false}
							tickMargin={10}
						/>
						<YAxis
							orientation="left"
							yAxisId="left"
							className="text-xs"
							tickLine={false}
							tickCount={6}
							axisLine={false}
							tickMargin={10}
							label={{
								value: "Consultations",
								angle: -90,
								position: "insideLeft",
							}}
						/>
						<YAxis
							orientation="right"
							yAxisId="right"
							className="text-xs"
							tickLine={false}
							tickCount={6}
							axisLine={false}
							tickMargin={10}
							label={{
								value: "Experts Online",
								angle: 90,
								position: "insideRight",
							}}
						/>
						<Bar
							yAxisId="right"
							dataKey="experts_online"
							fill="#FFF3C6"
							radius={[4, 4, 0, 0]}
							name="Experts Online"
						/>
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="incoming_consultations"
							stroke="#8A94A6"
							strokeWidth={2}
							strokeDasharray="3 3"
							dot={false}
							name="Incoming"
						/>
						<Line
							yAxisId="left"
							type="monotone"
							dataKey="answered_consultations"
							stroke="#15B79F"
							strokeWidth={2}
							dot={false}
							name="Answered"
						/>
					</ComposedChart>
				</ResponsiveContainer>
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

export default ConsultationsChart;
