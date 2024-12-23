import { Header } from "./Header";

import { MessageCircle, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PeriodChart from "./PeriodChart";
import ConsultationsChart from "./ConsultationsChart";

export default function Insights() {
	return (
		<>
			<Header title={"Insights"}> </Header>
			<div className="bg-white px-6 py-8">
				<div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:max-h-4xl md:max-h-3xl">
					{/* Chart 1 */}
					<div className="md:col-span-2">
						<ConsultationsChart />
					</div>

					{/* Chart 2 */}
					<div className="">
						<PeriodChart />
					</div>

					{/* Placeholder for metrics */}
					<div className="">
						<Card className="h-full rounded-2xl shadow bg-gradient-to-r from-[#15B79F] to-[#0E9382] text-white">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 font-semibold text-xs">
									<MessageCircle size={12} strokeWidth={3} />
									<span>FORECASTS</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-3">
								<div className="flex justify-between">
									<span className="text-4xl xl:text-6xl font-semibold">
										+15%
									</span>
									<TrendingUp className="size-6 lg:size-8" />
								</div>
								<div className="text-sm">
									forecasted increase in your sales closed by the end of the
									current month
								</div>
							</CardContent>
							<CardContent className="flex flex-col gap-3">
								<div className="flex justify-between">
									<span className="text-4xl xl:text-6xl font-semibold">
										+20%
									</span>
									<TrendingUp className="size-6 lg:size-8" />
								</div>
								<div className="text-sm">
									forecasted increase in your sales closed by the end of the
									current month
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
