/** @format */
import { useRouter } from "next/router";
import Image from "next/image";
import TemplateData from "./PostData";
import { MainData } from "./PostData";

import CommentList from "../../Components/CommentList";
import { BrowserRouter } from "react-router-dom";
const postStyle = "grid ml-20 mr-20 place-items-center mt-10";
//const inputStyle = "p-3 border-solid border-2 border-slate-400 rounded-md w-1/2 focus:outline-none";

function postData(num) {
	let i = 0 + num;
	return (
		<div className="mx-20">
			<div className="flex w-full h-96 md:h-11/12 justify-center ">
				<img
					src={TemplateData[i].image}
					className=" w-full h-full  object-cover "
					alt={""}
				/>
			</div>

			<p className="text-cyan-500 font-extrabold text-2xl text-center mt-5 mb-3">
				{TemplateData[i].title}
			</p>
			<p className="font-black text-justify">{TemplateData[i].shortdesc}</p>
			<p className="font-black text-justify">{TemplateData[i].longdesc}</p>
			<BrowserRouter>
				<CommentList />
			</BrowserRouter>
		</div>
	);
}
export default function PostDetail() {
	const router = useRouter();
	const postId = router.query.PostId;

	if (postId === "place-to-go-on-winter") {
		return <div className={postStyle}>{postData(0)}</div>;
	}
	if (postId === "place-to-go-on-summer") {
		return <div className={postStyle}>{postData(1)}</div>;
	}

	if (postId === "place-to-go-on-spring") {
		return <div className={postStyle}>{postData(2)}</div>;
	}
	if (postId == "main-page") {
		return (
			<div className="mx-20 mb-10">
				<div className={postStyle}>
					<div className="flex w-full h-96 md:h-11/12 justify-center">
						<img
							src={MainData[0].image}
							className=" w-full h-full object-cover "
							alt={""}
						/>
					</div>

					<p className="text-cyan-500 font-extrabold text-xl mt-5 mb-3">{MainData[0].title}</p>
					<p className="font-black text-justify">{MainData[0].shortdesc}</p>
					<p className="font-black text-justify">{MainData[0].longdesc}</p>
				</div>
			</div>
		);
	}
}
