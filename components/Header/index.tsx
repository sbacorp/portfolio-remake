"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./nav";
import gsap from "gsap";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";

const navItems = [
	{
		title: "Работы",
		href: "/work",
	},
	{
		title: "Обо мне",
		href: "/about",
	},
	{
		title: "Контакты",
		href: "/contact",
	},
];

export default function index() {
	const pathname = usePathname();

	const [isActive, setIsActive] = useState(false);
	const burger = useRef(null);
	useLayoutEffect(() => {
		document.addEventListener("scroll", () => setIsActive(false));
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(burger.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight / 4,
				onLeave: () => {
					gsap.to(burger.current, { scale: 1 });
				},
				onEnterBack: () => {
					gsap.to(burger.current, { scale: 0 });
				},
			},
		});
	}, []);
	return (
		<header className={styles.header}>
			<Link href="/">
				<div className={styles.logo}>
					<svg
						width="33"
						height="23"
						viewBox="0 0 33 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.71951 5.71053L1.5 11.6754L7.71951 17.6404M19.4268 1.5L16.5 11.5L13.5732 21.5M25.6463 5.71053L31.5 11.6754L25.6463 17.6404"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<div className={styles.name}>
						<p className={styles.dev}>Dev by</p>
						<p className={styles.bogdan}>Богдан</p>
						<p className={styles.shankin}>Шанькин</p>
					</div>
				</div>
			</Link>
			<div className={styles.nav}>
				{navItems.map((data, index) => {
					return (
						<Magnetic>
							<div
								className={styles.el}
								onClick={() => {
									console.log(pathname);
								}}
							>
								<Link href={data.href}>{data.title}</Link>
								<div
									className={`${styles.indicator} ${
										pathname == data.href ? styles.indicatorActive : ""
									}
										}`}
								></div>
							</div>
						</Magnetic>
					);
				})}
			</div>

			<div ref={burger} className={styles.headerButtonContainer}>
				<Magnetic>
				<div onClick={() => setIsActive(!isActive)} className={styles.button}>
					<div
						className={`${styles.burger} ${
							isActive ? styles.burgerActive : ""
						}`}
					></div>
				</div>
				</Magnetic>
			</div>

			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</header>
	);
}
