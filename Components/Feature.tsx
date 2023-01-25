/** @format */

import Link from "next/link";
import TemplateData from "../pages/Post/PostData";
import { ImBin } from "react-icons/im";
import { useState } from "react";
import Image from "next/image";

interface SectionLinkProps {
	template: { id: number; image: string; title: string; shortdesc: string; longdesc: string };
}

const SectionLink = ({ template }: SectionLinkProps) => {
	const { id, image, title } = template;
	const [showModal, setShowModal] = useState(false);
	const [visible, setVisible] = useState(true);

	const Modal = ({ closeModal }) => {
		return (
			<>
				<div
					id="popup-modal"
					tabIndex={-1}
					className="fixed grid top-0 left-0 right-0 z-50 p-2 h-full place-items-center overflow-x-hidden overflow-y-auto  md:inset-0 h-modal md:h-full bg-[#090922] bg-opacity-30"
				>
					e
					<div className="w-full h-full max-w-md md:h-auto">
						<div className=" bg-white rounded-lg shadow">
							<div className="p-6 text-center">
								<h3 className="mb-5 text-lg font-normal text-black dark:text-gray-400">
									Are you sure you want to delete this blog?
								</h3>
								<button
									data-modal-hide="popup-modal"
									type="button"
									className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
									onClick={() => {
										setVisible(prev => !prev);
										closeModal();
									}}
								>
									Yes, I am sure
								</button>
								<button
									data-modal-hide="popup-modal"
									type="button"
									className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
									onClick={() => {
										closeModal();
									}}
								>
									No, cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	let i = 0 + id;
	// const title = TemplateData[i].title;
	const slug = title
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
	console.log(slug);
	return (
		<>
			<div className="">
				{visible && (
					<>
						<div className="relative h-48 lg:h-64 w-full overflow-hidden">
							<Image
								src={image}
								alt="main Logo"
								className=" object-cover object-center"
								fill
							/>
						</div>
						<div className="mt-5 md:mb-1 font-bold text-xl h-10 w-full md:h-auto">
							<Link
								href={`http://localhost:3000/Post/${slug}`}
								className=" text-cyan-500 hover:text-cyan-700"
							>
								{TemplateData[i].title}
							</Link>
						</div>
						<p className="text-justify h-44 sm:h-24 md:h-44  xl:h-1/3 ">
							{TemplateData[i].shortdesc}
						</p>
						{showModal && <Modal closeModal={handleCloseModal} />}

						<button onClick={handleShowModal}>
							<ImBin className="w-6 h-6" />
						</button>
					</>
				)}
			</div>
		</>
	);
};
export default function Feature() {
	return (
		<div className="mt-10 mb-1 md:mb-14 px-16">
			<Link href={"http://localhost:3000/Blog"}>
				<span className="text-xl md:text-2xl  bg-slate-300"> Featured Posts </span>
			</Link>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mt-5 md:mt-10">
				{TemplateData.map((template, key) => (
					<SectionLink
						key={key}
						template={template}
					/>
				))}
			</div>
		</div>
	);
}
