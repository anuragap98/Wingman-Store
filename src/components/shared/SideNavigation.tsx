"use client";

import Image from "next/image";
import React from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	HomeIcon,
	UserGroupIcon,
	ChatBubbleOvalLeftIcon,
	Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import logo from "./../../../public/logo.png";

const SideNavigation = () => {
	return (
		<NavigationMenu
			orientation="vertical"
			className="fixed left-0 top-0 flex h-screen min-w-[60px] flex-col justify-between border-r border-gray-200 bg-[#115E56] px-4 py-6"
		>
			{/* Top section with logo and main navigation */}
			<div className="flex flex-col items-center gap-7">
				{/* Logo */}
				<div>
					<Image src={logo} alt="Wingman store" width={32} height={32} />
				</div>

				{/* Spacer */}
				<div className="w-7 h-px bg-[#134E48]" />

				{/* Main navigation items */}
				<NavigationMenuList className="flex-col items-center gap-6">
					<NavigationMenuItem>
						<button className="h-8 w-8 p-1 flex items-center justify-center rounded-md text-[#CCFBEF] hover:text-[#115E56] hover:bg-slate-100 transition-colors">
							<HomeIcon className="" aria-hidden="true" />
						</button>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<button className="h-8 w-8 p-1 flex items-center justify-center rounded-md text-[#CCFBEF] hover:text-[#115E56] hover:bg-slate-100 transition-colors">
							<ChatBubbleOvalLeftIcon className="" aria-hidden="true" />
						</button>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<button className="h-8 w-8 p-1 flex items-center justify-center rounded-md text-[#CCFBEF] hover:text-[#115E56] hover:bg-slate-100 transition-colors">
							<UserGroupIcon className="" aria-hidden="true" />
						</button>
					</NavigationMenuItem>
				</NavigationMenuList>
			</div>

			{/* Bottom section with settings */}
			<div className="flex flex-col items-center">
				<button className="h-8 w-8 p-1 flex items-center justify-center rounded-md text-[#CCFBEF] hover:text-[#115E56] hover:bg-slate-100 transition-colors">
					<Cog6ToothIcon className="" aria-hidden="true" />
				</button>
			</div>
		</NavigationMenu>
	);
};

export default SideNavigation;
