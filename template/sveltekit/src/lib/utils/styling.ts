import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx';

// Use `clsx` and `tailwind-merge` together to create a single class combining utility
export const combineClasses = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
