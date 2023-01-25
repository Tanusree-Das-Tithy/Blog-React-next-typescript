/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BuilderProgram } from "typescript";
import { Blog, BlogDetail } from "../models/Blog";
import { Comment, CommentDetail } from "../models/Comment";
export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		//baseUrl: "https://jsonplaceholder.typicode.com",
		baseUrl: "https://63be6aa1585bedcb36acc7d4.mockapi.io",
	}),

	tagTypes: ["Comment", "Header"],
	endpoints: builder => ({
		getComments: builder.query<Comment, void>({
			query: () => "/comment",
			providesTags: ["Comment"],
		}),
		addNewComment: builder.mutation({
			query: payload => ({
				url: "/comment",

				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			invalidatesTags: ["Comment"],
		}),
		deleteComment: builder.mutation({
			query: id => ({
				url: `/comment/${id}`,

				method: "DELETE",
				//credentials: "include",
			}),
			invalidatesTags: ["Comment"],
		}),
		updateComment: builder.mutation({
			query: ({ comment }) => ({
				url: `/comment/${comment.id}`,

				method: "PUT",
				body: comment,
				//credentials: "include",
			}),
			invalidatesTags: ["Comment"],
		}),
		getHeaders: builder.query<Blog, void>({
			query: () => "/header",
			providesTags: ["Header"],
		}),
	}),
});
export const {
	useGetCommentsQuery,
	useAddNewCommentMutation,
	useDeleteCommentMutation,
	useUpdateCommentMutation,
	useGetHeadersQuery,
} = apiSlice;
