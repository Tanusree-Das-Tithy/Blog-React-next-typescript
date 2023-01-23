/** @format */
/*
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com",
	}),
	tagTypes: ["Post"],
	endpoints: builder => ({
		getPosts: builder.query({
			query: id => `/posts/${id}`,
		}),
	}),
});
export const { useGetPostsQuery } = apiSlice;
*/
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		//baseUrl: "https://jsonplaceholder.typicode.com",
		baseUrl: "https://63be6aa1585bedcb36acc7d4.mockapi.io",
	}),

	tagTypes: ["Comment"],
	endpoints: builder => ({
		getComments: builder.query({
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
			query: ({ id, ...rest }) => ({
				url: `/comment`,

				method: "PUT",
				body: rest,
				//credentials: "include",
			}),
			invalidatesTags: ["Comment"],
			async onQueryStarted({ id, ...rest }, { dispatch, queryFulfilled }) {
				try {
					const { data: updatedComment } = await queryFulfilled;
					const patchResult = dispatch(
						api.util.updateQueryData("getPost", id, draft => {
							Object.assign(draft, updatedPost);
						})
					);
				} catch {}
			},
		}),
	}),
});
export const {
	useGetCommentsQuery,
	useAddNewCommentMutation,
	useDeleteCommentMutation,
	useUpdateCommentMutation,
} = apiSlice;
