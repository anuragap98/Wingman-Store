import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	const options: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "short",
		year: "numeric",
	};

	const formattedDate = new Date(date).toLocaleDateString("en-GB", options);
	return formattedDate;
}

export function formatTime(date: string) {
	const options: Intl.DateTimeFormatOptions = {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	};

	const formattedTime = new Date(date).toLocaleTimeString("en-US", options);
	return formattedTime;
}
