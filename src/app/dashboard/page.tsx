import Navbar from "@/components/shared/Navbar";
import AtGlance from "./components/AtGlance";
import Insights from "./components/Insights";
import Orders from "./components/Orders";
import orders from "../lib/data";
import { OrdersProps } from "../../lib/type";

async function getOrdersData(): Promise<OrdersProps[]> {
	// Fetch data from your API here.
	const res = orders;
	return res;
}

export default async function Dashboard() {
	const orderData = await getOrdersData();

	return (
		<div className="flex flex-col w-full">
			<Navbar />
			<section className="flex flex-col px-4 py-6 md:px-10 md:py-8">
				<div className="rounded-lg bg-white shadow-[0_5px_22px_0px_rgba(0,0,0,0.04),0_0px_0px_1px_rgba(0,0,0,0.06)]">
					<AtGlance />
					<Insights />
					<Orders orderData={orderData} />
				</div>
			</section>
		</div>
	);
}
