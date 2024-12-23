"use client";

import Link from "next/link";
import { formatDate, formatTime } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRight, PackageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type OrdersProps = {
	id: string;
	product: string;
	date: string;
	time_spent: string;
	order_value: string;
	commission: string;
	chat_id: string;
};

// Type defination for data table using tanstack
export const columnsType: ColumnDef<OrdersProps>[] = [
	{
		accessorKey: "product",
		header: "Product",
		cell: ({ cell, row }) => {
			return (
				<div id={`${cell.column.id}`} className="flex items-center gap-2">
					<PackageIcon />
					<div className="font-semibold">{row.original.product}</div>
				</div>
			);
		},
	},
	{
		accessorKey: "date",
		header: "Date",
		cell: ({ cell, row }) => {
			return (
				<div id={`${cell.column.id}`}>
					<div>{formatDate(row.original.date)}</div>
					<div className="text-xs text-gray-500">
						{formatTime(row.original.date)}
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: "time_spent",
		header: "Time Spent",
	},
	{
		accessorKey: "order_value",
		header: "Order Value",
	},
	{
		accessorKey: "commission",
		header: "Commission",
		cell: ({ cell, row }) => {
			return (
				<div id={`${cell.column.id}`} className="font-semibold">
					{row.original.commission}
				</div>
			);
		},
	},
	{
		accessorKey: "chat_id",
		header: "",
		cell: ({ cell, row }) => {
			return (
				<div
					id={`${cell.column.id}-${row.original.chat_id}`}
					className="font-semibold"
				>
					<Button asChild variant="ghost" className="text-gray-500 gap-2">
						<Link href={`#${cell.column.id}-${row.original.chat_id}`}>
							View Chat
							<ArrowUpRight />
						</Link>
					</Button>
				</div>
			);
		},
	},
];
