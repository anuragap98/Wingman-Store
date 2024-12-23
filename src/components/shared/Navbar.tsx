import Link from "next/link";
import { Tag, ChartPie, MessageCircleMore } from "lucide-react";

export default function Sidebar() {
	return (
		<nav className="flex gap-2 p-2 sm:px-10 sm:py-6 border-b text-slate-600">
			<Link
				id="nav-summary"
				href="/dashboard"
				className="flex items-center gap-2 px-3 py-2 hover:bg-[#CCFBEF] hover:text-gray-900 rounded-full"
			>
				<ChartPie className="size-4 sm:size-5" />
				<span className="text-sm sm:text-md">Summary</span>
			</Link>
			<Link
				id="nav-sales"
				href="/dashboard"
				className="flex items-center gap-2 px-3 py-2 hover:bg-[#CCFBEF] hover:text-gray-900 rounded-full"
			>
				<Tag className="size-4 sm:size-5" />
				<span className="text-sm sm:text-md">Sales</span>
			</Link>
			<Link
				id="nav-chats"
				href="/dashboard"
				className="flex items-center gap-2 px-3 py-2 hover:bg-[#CCFBEF] hover:text-gray-900 rounded-full"
			>
				<MessageCircleMore className="size-4 sm:size-5" />
				<span className="text-sm sm:text-md">Chats</span>
			</Link>
		</nav>
	);
}
