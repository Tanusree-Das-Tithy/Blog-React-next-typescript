/** @format */

import { Inter } from "@next/font/google";

import Main from "../Components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className=" flex flex-col justify-center items-center ">
			<Main />
		</div>
	);
}
