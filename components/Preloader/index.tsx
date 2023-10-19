import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slideUp, opacity } from "./animation";

	const percents = [
		"1",
		"5",
		"7",
		"15",
		"20",
		"20",
		"25",
		"30",
		"35",
		"40",
		"45",
		"50",
		"55",
		"60",
		"65",
		'70',
		"75",
		"80",
		"85",
		"90",
		"95",
		"100",
	];


function index() {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });
	useEffect(() => {
		setDimension({ width: window.innerWidth, height: window.innerHeight });
	}, []);
	const [index, setIndex] = useState(0);
	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
		dimension.height
	}  L0 0`;
	useEffect(() => {
		if (index == percents.length - 1) return;
		setTimeout(
			() => {
				setIndex(index + 1);
			},
			index == 0 ? 400 : index<5? 150:100
		);
	}, [index]);

	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;
	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial=" initial"
			exit="exit"
			className={styles.preloader}
		>
			{dimension.height > 0 && (
				<>
					<motion.p  variants={opacity} initial="initial" animate="enter" exit='exit'>
						{percents[index]}%
					</motion.p>
					<svg>
						<motion.path
							variants={curve}
							initial="initial"
							exit="exit"
						></motion.path>
					</svg>
				</>
			)}
		</motion.div>
	);
}

export default index;
