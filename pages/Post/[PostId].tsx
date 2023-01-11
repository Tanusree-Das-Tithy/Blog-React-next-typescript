/** @format */
import { useRouter } from "next/router";
import TemplateData from "./PostData.tsx";
const postStyle = "grid ml-20 mr-20 place-items-center mt-10";
function postData(num) {
	let i = 0 + num;
	return (
		<>
			<div className="flex justify-center">
				<img
					src={TemplateData[i].image}
					className=" h-96 w-96"
					width="100"
					height="100"
				/>
			</div>
			<p className="text-cyan-500 font-extrabold text-xl mt-5 mb-3">{TemplateData[i].title}</p>
			<p className="font-black text-justify">{TemplateData[i].shortdesc}</p>
			<p className="font-black text-justify">{TemplateData[i].longdesc}</p>
		</>
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
		return <div className={postStyle}>{postData(3)}</div>;
	}
}
