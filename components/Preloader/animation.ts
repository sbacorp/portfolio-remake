export const slideUp = {
	initial: {
		top: 0,
	},
	exit: {
		top: "-100vh",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], type:'tween' },
	},
};
export const opacity = {
	initial: {
		opacity: 0,
		top: "40vh",
	},
	enter: {
		opacity: 1,
		top: "50vh",
		transition: { duration: 1, delay: 0.1, type: "tween" },
	},
	exit: {
		opacity: 0,
		top: "30vh",
		transition: { duration: 0.2},
	},
};
