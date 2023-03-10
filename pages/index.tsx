/** @format */

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Main from "../Components/Main.tsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className=" flex flex-col justify-center items-center ">
			<Main />
		</div>
	);
}
