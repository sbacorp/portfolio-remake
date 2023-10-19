"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useLayoutEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import {AnimatePresence, motion} from 'framer-motion'

 function Home() {
	
	const comp = useRef();
	const [isLoading, setIsLoading] = useState(true);
	useLayoutEffect(() => {
		
		setTimeout(() => {
			setIsLoading(false);
			document.body.style.cursor = 'default'
			document.body.style.overflowY= 'auto'
		}, 2000);
	}, []);
    

	return (
		<>
				<motion.main
					className={styles.main}
				>
					Hi
					<Hero />
				</motion.main>
		</>
	);
}
export default Home;