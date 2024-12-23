import { Header } from "./Header";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	TrendingDown,
	TrendingUp,
	MessageCircle,
	TagIcon,
	Coins,
	Check,
	PiggyBank,
} from "lucide-react";

export default function AtGlance() {
	const data = [
		{
			label: "CONSULTATIONS",
			value: 24,
			change: "15%",
			isPositive: true,
			icon: MessageCircle,
		},
		{
			label: "ORDERS PLACED",
			value: 12,
			change: "15%",
			isPositive: false,
			icon: TagIcon,
		},
		{
			label: "CONVERSION",
			value: "50%",
			change: "15%",
			isPositive: false,
			icon: Check,
		},
		{
			label: "TOTAL SALES VALUE",
			value: "$2400",
			change: "15%",
			isPositive: true,
			icon: Coins,
		},
		{
			label: "AVG ORDER VALUE",
			value: "$240",
			change: "15%",
			isPositive: true,
			icon: Coins,
		},
		{
			label: "COMMISSION PAID",
			value: "$240",
			change: "15%",
			isPositive: true,
			icon: PiggyBank,
		},
	];

	return (
		<>
			<Header title={"At a glance"}>
				<Select>
					<SelectTrigger className="max-w-[130px]">
						<SelectValue placeholder="Select days" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="7 days">7 days</SelectItem>
						<SelectItem value="30 days">30 days</SelectItem>
						<SelectItem value="365 days">365 days</SelectItem>
					</SelectContent>
				</Select>
			</Header>
			<div className="px-6 py-8">
				<div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8">
					{data.map((item) => (
						<Card key={item.label}>
							<CardHeader className="pb-2">
								<div className="flex items-center text-xs gap-2 font-semibold text-slate-500">
									{item.icon && <item.icon size={14} strokeWidth={2} />}
									{item.label}
								</div>
							</CardHeader>
							<CardContent className="py-0 text-2xl lg:text-3xl font-semibold">
								{item.value}
							</CardContent>
							<CardFooter className="pt-2">
								<div className="flex items-center text-sm sm:text-md space-x-2">
									{item.isPositive ? (
										<>
											<TrendingUp className="size-5 lg:size-6 text-green-600" />
											<span className="text-green-600">{item.change}</span>
											<span className="text-slate-500">increase</span>
										</>
									) : (
										<>
											<TrendingDown className="size-5 lg:size-6 text-red-600" />
											<span className="text-red-600">{item.change}</span>
											<span className="text-slate-500">decrease</span>
										</>
									)}
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</>
	);
}
