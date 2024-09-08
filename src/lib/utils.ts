import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function parseToSeconds(timeString: string) {
	const regex = /^(\d+)([a-zA-Z]+)$/;
	const match = timeString.match(regex);

	if (match) {
		const value = match[1];
		const unit = match[2];

		switch (unit) {
			case "hrs":
			case "hr":
				return Number(value) * 3600;
			case "mins":
			case "min":
				return Number(value) * 60;
			case "secs":
			case "sec":
				return Number(value);
		}
	}

	console.log(`Invalid Format: ${match}`);
}
