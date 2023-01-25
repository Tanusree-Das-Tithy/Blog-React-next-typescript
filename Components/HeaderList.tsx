/** @format */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useGetHeadersQuery } from "../services/apiSlice";

const HeaderCard = ({ content }) => {
	return (
		<div className="flex mt-10 mb-1 md:mb-10 px-8">
			<div>
				<div className="relative h-48 lg:h-64 w-full overflow-hidden">
					<Image
						src={content.avatar}
						alt="main Logo"
						className=" object-cover object-center"
						fill
					/>
				</div>

				<p className="mt-5 md:mb-1 font-bold text-xl h-10 w-full md:h-auto text-cyan-500 hover:text-cyan-700">
					{content.title}
				</p>

				<p className="text-justify h-44 sm:h-24 md:h-44  xl:h-1/3 ">{content.shortdesc}</p>
			</div>
		</div>
	);
};
function HeaderList() {
	const {
		data: blogs,
		isLoading: isGetLoading,
		isSuccess: isGetSuccess,
		isError: isGetError,
		error: getError,
	} = useGetHeadersQuery(null);

	const renderError = (
		<div
			className="alert alert-danger"
			role="alert"
		>
			{Boolean(getError)}
		</div>
	);
	const renderLoading = (
		<div className="d-flex justify-content-center">
			<div
				className="spinner-border"
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);

	return (
		<div className="my-5">
			<h1 className=" flex m-auto text-xl font-bold md:text-2xl justify-center">Featured Posts</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 md: mx-12 lg:grid-cols-3 gap-2 md:gap-0 ">
				{isGetError
					? renderError
					: isGetLoading
					? renderLoading
					: isGetSuccess &&
					  Array.isArray(blogs) &&
					  blogs.slice(3, 8).map((item: { id: React.Key }) => {
							return (
								<HeaderCard
									content={item}
									key={item.id}
								/>
							);
					  })}
			</div>
		</div>
	);
}
export default HeaderList;
