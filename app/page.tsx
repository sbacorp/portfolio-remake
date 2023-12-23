"use client";

import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import { motion} from 'framer-motion'

 function Home() {
    

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