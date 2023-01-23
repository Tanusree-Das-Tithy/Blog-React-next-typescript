/** @format */

export async function getStaticPaths() {
	const res = await fetch("https://63be6aa1585bedcb36acc7d4.mockapi.io/header");

	const data = await res.json();
	const paths = data.map(ninja => {
		return {
			params: { userid: ninja.userid.toString() },
		};
	});
	return {
		paths: paths,
		fallback: true,
	};
}
export const getStaticProps = async context => {
	const userid = context.params.userid;
	const res = await fetch("https://63be6aa1585bedcb36acc7d4.mockapi.io/header/" + userid);
	const data = await res.json();
	return {
		props: { ninja: data },
	};
};
export default function navDetail({ ninja }) {
	return (
		<div className="grid ml-20 mr-20 place-items-center mt-10">
			<div className="flex justify-center">
				<img
					src={ninja.avatar}
					className=" h-96 w-96"
					width="100"
					height="100"
				/>
			</div>

			<p className="text-cyan-500 font-extrabold text-xl mt-5 mb-3">{ninja.title}</p>
			<p className="font-black text-justify">{ninja.desc}</p>
		</div>
	);
}
