/** @format */

import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Feature from "./Feature";

export default function Main() {
	return (
		<div className=" block md:flex w-full">
			<section className="w-full font-bold">
				<Header />
				<br />
				<h1 className="mt-5 font-extrabold text-3xl flex flex-col justify-center items-center ">
					Welcome to Travel Blog
				</h1>
				<br />
				<div className="relative px-16 block lg:flex lg:grid-cols-2 space-x-0 lg:gap-8">
					<Image
						src="/main.jpg"
						alt="main Logo"
						className=" h-full w-full md:w-1/2 object-cover"
						width={500}
						height={500}
						priority
					/>
					<p className="w-full mt-4 lg:mt-0 lg:w-1/2 text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt pulvinar est
						eget aliquam. Nullam vel gravida purus, et porta lorem. Morbi malesuada sapien nec
						pretium consectetur. Ut est quam, accumsan in urna nec, suscipit cursus elit. Cras
						efficitur ullamcorper augue et cursus. Cras semper sodales elementum. Cras sit amet
						lectus nec massa tempus convallis ac vitae mauris. Proin vestibulum eleifend dignissim.
						Sed pretium fringilla bibendum. Quisque quis enim nisl. Morbi fermentum nisl vitae neque
						ornare sollicitudin. Vivamus tincidunt, risus vitae sagittis eleifend, ligula mauris
						sollicitudin tortor, eget pharetra massa lorem vel arcu. Phasellus sodales mollis enim,
						a ullamcorper nunc posuere eu. Aenean tristique neque nisi, in interdum odio euismod
						quis.
						<br />
						<Link
							className="text-cyan-500 hover:text-cyan-700"
							href={"http://localhost:3000/Post/main-page"}
						>
							see more...
						</Link>
					</p>
				</div>
				<Feature />
				<Footer />
			</section>
		</div>
	);
}
