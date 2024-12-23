import { DataTable } from "@/components/ui/data-table";
import { Header } from "./Header";
import { columnsType, OrdersProps } from "@/lib/type";

export default function Orders({ orderData }: { orderData: OrdersProps[] }) {
	return (
		<>
			<Header title={"Orders"}> </Header>
			<div className="bg-white shadow rounded-lg px-6 py-8">
				<DataTable columns={columnsType} data={orderData} />
			</div>
		</>
	);
}
