/** @format */
import { useRouter } from "next/router";
import TemplateData from "./PostData";
import { MainData } from "./PostData";
import { connect } from "react-redux";
import CommentList from "../api/CommentList";

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
					fill
				/>
			</div>

			<p className="text-cyan-500 font-extrabold text-2xl text-center mt-5 mb-3">
				{TemplateData[i].title}
			</p>
			<p className="font-black text-justify">{TemplateData[i].shortdesc}</p>
			<p className="font-black text-justify">{TemplateData[i].longdesc}</p>

			<CommentList className="mt-16" />
		</div>
	);
}
export default function postDetail() {
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
			<div className={postStyle}>
				<>
					<div className="flex justify-center">
						<img
							src={MainData[0].image}
							className=" h-96 w-96"
							width="100"
							height="100"
						/>
					</div>

					<p className="text-cyan-500 font-extrabold text-xl mt-5 mb-3">{MainData[0].title}</p>
					<p className="font-black text-justify">{MainData[0].shortdesc}</p>
					<p className="font-black text-justify">{MainData[0].longdesc}</p>
				</>
			</div>
		);
	}
}
