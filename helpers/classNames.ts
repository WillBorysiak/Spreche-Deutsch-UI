// concatenates conditional class names
export const classNames = (...classes: string[]) => {
	return classes.filter(Boolean).join(' ');
};
