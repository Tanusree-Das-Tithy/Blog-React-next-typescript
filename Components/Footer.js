/** @format */
import Image from "next/image";
import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube, ImInstagram } from "react-icons/im";

const boxNav = " flex float-right ml-24 p-2 align-middle mt-4 white ";

export default function Footer() {
	return (
		<div className="flex justify-center float-right gap-6 box-border mt-3 h-24 bg-black  p-4 border-1 space-x-8 w-full">
			<p className="text-slate-100 font-extrabold align-middle mt-6">Contact Us</p>
			<Link
				href={"/"}
				className={boxNav}
			>
				<ImFacebook color="#FFFFFF" />
			</Link>
			<Link
				href={"/"}
				className={boxNav}
			>
				<ImTwitter color="#FFFFFF" />
			</Link>
			<Link
				href={"/"}
				className={boxNav}
			>
				<ImInstagram color="#FFFFFF" />
			</Link>
			<Link
				href={"/"}
				className={boxNav}
			>
				{" "}
				<ImYoutube color="#FFFFFF" />
			</Link>
		</div>
	);
}
