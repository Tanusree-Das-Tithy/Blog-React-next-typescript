/** @format */

import React, { useState } from "react";

import {
	useGetCommentsQuery,
	useAddNewCommentMutation,
	useDeleteCommentMutation,
	useUpdateCommentMutation,
} from "../services/apiSlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeleteIcon, EditIcon } from "./Icons";
import error from "next/error";
const inputStyle =
	" p-1 border-solid border-2 border-slate-400  h-1/2 rounded-md w-2/4 focus:outline-none mb-6";

const schema = yup.object().shape({
	email: yup.string().matches(/^$|^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"),
	comment: yup.string().required("Leave a comment"),
});

const CommentCard = ({ content }) => {
	const [deleteComment, response] = useDeleteCommentMutation();

	const [isEdit, setIsEdit] = useState(false);

	const [updateComment, { isLoading }] = useUpdateCommentMutation();

	const [email, setEmail] = useState(content.email);
	const [comments, setComments] = useState(content.comment);

	const onEmailChanged = e => setEmail(e.target.value);
	const onCommentChanged = e => setComments(e.target.value);

	const onSaveClicked = () => {
		if (email && comments) {
			console.log({ comments });
			const newComment = { id: content.id, email: email, comment: comments };
			// updateComment({ id: content.id, email, comments });
			updateComment({ comment: newComment });

			// router.push(`/comment/${content.id}`);
		}
	};

	return (
		<div className=" mb-3 d-flex align-items-stretch bg-slate-100 ">
			<div className=" py-4  ">
				<h5 className="flex w-full">
					<div>
						<b>
							Email<span className="ml-12 mr-10">:</span>
						</b>
					</div>
					{content.email}
				</h5>
				<div className="flex w-full">
					<div>
						<b>
							Comment &ensp;<span className="mr-10">:</span>
						</b>
					</div>
					{content.comment}
				</div>
				<div className="my-2">
					<button
						className="bg-slate-300 p-0.5 hover:bg-red-300 mr-5"
						onClick={() => deleteComment(content.id)}
					>
						<DeleteIcon />
					</button>
					<button
						className="bg-slate-300 p-0.5 hover:bg-cyan-200"
						onClick={() => setIsEdit(true)}
					>
						<EditIcon />
					</button>
				</div>

				{isEdit && (
					<>
						<input
							placeholder="Enter new email"
							type="text"
							className="focus:outline-none ml-2 mr-4 p-2"
							onChange={onEmailChanged}
						/>
						<input
							placeholder="updated comment"
							type="text"
							className="focus:outline-none p-2"
							onChange={onCommentChanged}
						/>
						<button
							onClick={() => {
								onSaveClicked();
							}}
							className="ml-4 h-8 w-12 bg-green-300 hover:bg-green-400"
						>
							save
						</button>
					</>
				)}
			</div>
		</div>
	);
};
function CommentsList() {
	let formSubmitError;

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const [addNewComment, response] = useAddNewCommentMutation();
	const [commentForm, setCommentForm] = React.useState("Post");
	function notify() {
		toast("Thanks for your comment!", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	}
	const onSubmithandler = data => {
		notify();
		console.log({ data });
		console.log(data.email);
		//const { email, comment } = data;

		if (data.email.includes("@")) {
			let formData = {
				email: data.email,
				comment: data.comment,
			};
			addNewComment(formData)
				.unwrap()
				.then(() => {})
				.then(error => {
					console.log(error);
				});
		} else {
			alert("Please enter valid email address");
			return false;
		}
		reset();
	};

	const {
		data: comments,
		isLoading: isGetLoading,
		isSuccess: isGetSuccess,
		isError: isGetError,
		error: getError,
	} = useGetCommentsQuery();
	let commentContent;
	if (isGetLoading) {
		commentContent = (
			<div className="d-flex justify-content-center">
				<div
					className="spinner-border"
					role="status"
				>
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	} else if (isGetSuccess) {
		commentContent =
			Array.isArray(comments) &&
			comments.map((item: { id: React.Key }) => {
				return (
					<CommentCard
						content={item}
						key={item.id}
					/>
				);
			});
	} else if (isGetError) {
		commentContent = (
			<div
				className="alert alert-danger"
				role="alert"
			>
				{Boolean(getError)}
			</div>
		);
	}
	return (
		<div>
			{formSubmitError}
			<div>
				<form onSubmit={handleSubmit(onSubmithandler)}>
					<div className="block w-full mb-10 ">
						<section className="block w-full   mt-10">
							<div className="flex  w-full">
								<div className="w-1/6">
									<label>
										<strong>Enter email </strong>
									</label>
								</div>
								<input
									type="text"
									{...register("email")}
									className={inputStyle}
									id="email"
									placeholder="example@mail.com"
									required
								/>
								<p className="text-red-600 font-bold">
									{Boolean(errors["email"]?.message)}
									{errors.email?.message?.toString()}
								</p>
							</div>
							<div className="flex w-full">
								<div className="w-1/6">
									<label>
										<strong>Comment</strong>
									</label>
								</div>

								<textarea
									className={inputStyle}
									{...register("comment")}
									id="comment"
									rows={3}
									placeholder="Enter your comment here"
									required
								></textarea>
								<p className="text-red-600 font-bold">
									{Boolean(errors["comment"]?.message)}
									{errors.comment?.message?.toString()}
								</p>
							</div>
						</section>
						<section className="flex ml-44 justify-left ">
							<button
								className="p-2 align-middle w-16  h-10 bg-gray-300 hover:bg-gray-400"
								type="submit"
							>
								<ToastContainer
									position="top-right"
									autoClose={2000}
									hideProgressBar={false}
									newestOnTop={false}
									closeOnClick
									rtl={false}
									pauseOnFocusLoss
									draggable
									pauseOnHover
									theme="dark"
								/>
								{commentForm}
							</button>
						</section>
					</div>
				</form>
			</div>
			<div className="col-lg-8">
				<div className="row">{commentContent}</div>
			</div>
		</div>
	);
}
export default CommentsList;
