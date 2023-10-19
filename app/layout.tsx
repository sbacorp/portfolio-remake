"use client";

import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import { useLayoutEffect, useRef, useState } from "react";

const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["300", "400", "500", "700"],
});
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState(true);
	useLayoutEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			document.body.style.cursor = "default";
			document.body.style.overflowY = "auto";
		}, 2000);
	}, []);

	return (
		<html lang="en">
			<body className={roboto.className}>
				<AnimatePresence mode="wait">
					{isLoading && <Preloader />}
				</AnimatePresence>
				<Header />
				
				{children}
			</body>
		</html>
	);
}
