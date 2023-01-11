/** @format */

import Image from "next/image";
import Link from "next/link";
import TemplateData from "../pages/Post/PostData.tsx";

function sectionLink(num) {
	let i = 0 + num;
	const title = TemplateData[i].title;
	const slug = title
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
	console.log(slug);
	return (
		<div>
			<img
				src={TemplateData[i].image}
				alt="main Logo"
				className=" h-1/2 w-full"
				width="100"
				height="100"
			/>
			<div className="mt-5 font-bold text-xl">
				<Link
					href={`http://localhost:3000/Post/${slug}`}
					className=" text-cyan-500 hover:text-cyan-700"
				>
					{TemplateData[i].title}
				</Link>
			</div>
			<p className="text-justify ">{TemplateData[i].shortdesc}</p>
		</div>
	);
}
export default function Feature() {
	return (
		<div className="mt-10 mb-10 ml-20 mr-20">
			<span className=" p-2 text-2xl  bg-slate-300"> Featured Posts </span>

			<div className=" flex grid-md:grid-cols-3 space-x-8 mt-10">
				{sectionLink(0)}
				{sectionLink(1)}
				{sectionLink(2)}
			</div>
		</div>
	);
}
