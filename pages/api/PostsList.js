/** @format */
/*
import React from "react";
import { useGetPostsQuery } from "./apiSlice";
const PostCard = ({ content }) => {
	return (
		<div
			className="col-lg-12 mb-3 "
			key={content.id}
		>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{content.title}</h5>
					<p className="card-text">{content.body}</p>
				</div>
			</div>
		</div>
	);
};
function PostsList() {
	const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery();
	let postContent;
	if (isLoading) {
		postContent = (
			<div className="d-flex justify-content-center">
				<div
					className="spinner-border"
					role="status"
				>
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	} else if (isSuccess) {
		postContent = posts.map(item => {
			return (
				<PostCard
					content={item}
					key={item.id}
				/>
			);
		});
	} else if (isError) {
		postContent = (
			<div
				className="alert alert-danger"
				role="alert"
			>
				{error}
			</div>
		);
	}
	return <div>{postContent}</div>;
}
export default PostsList;
*/
import React from "react";
import { useGetPostsQuery, useAddNewPostMutation, useDeletePostMutation } from "./apiSlice";
const PostCard = ({ content }) => {
	const [deletePost, response] = useDeletePostMutation();
	return (
		<div className="col-lg-4 mb-3 d-flex align-items-stretch">
			<div className="card alert alert-secondary">
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{content.title}</h5>
					<p className="card-text">{content.desc}</p>
					<button
						onClick={() => deletePost(content.id)}
						className="btn btn-outline-danger"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};
function PostsList() {
	let formSubmitError;
	const [addNewPost, response] = useAddNewPostMutation();
	const [postForm, setPostForm] = React.useState("Submit");
	const onSubmit = e => {
		e.preventDefault();
		const { title, body } = e.target.elements;
		let formData = {
			title: title.value,
			desc: desc.value,
		};
		addNewPost(formData)
			.unwrap()
			.then(() => {})
			.then(error => {
				console.log(error);
			});
	};
	const {
		data: posts,
		isLoading: isGetLoading,
		isSuccess: isGetSuccess,
		isError: isGetError,
		error: getError,
	} = useGetPostsQuery();
	let postContent;
	if (isGetLoading) {
		postContent = (
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
		postContent = posts.map(item => {
			return (
				<PostCard
					content={item}
					key={item.id}
				/>
			);
		});
	} else if (isGetError) {
		postContent = (
			<div
				className="alert alert-danger"
				role="alert"
			>
				{getError}
			</div>
		);
	}
	return (
		<div className="row">
			{formSubmitError}
			<div className="col-md-4 offset-md-*">
				<form onSubmit={onSubmit}>
					<div className="mb-3">
						<label className="form-label">
							<strong>Enter Title</strong>
						</label>
						<input
							type="text"
							className="form-control"
							id="title"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">
							<strong>Enter content</strong>
						</label>
						<textarea
							className="form-control"
							id="desc"
							rows="3"
						></textarea>
					</div>
					<div className="d-grid">
						<button
							className="btn btn-success"
							type="submit"
						>
							{postForm}
						</button>
					</div>
				</form>
			</div>
			<div className="col-lg-8">
				<div className="row">{postContent}</div>
			</div>
		</div>
	);
}
export default PostsList;
