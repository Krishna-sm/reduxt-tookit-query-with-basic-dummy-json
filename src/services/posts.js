import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),
        getAllPostById: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: "GET"
            })
        }),
        updatePostById: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'PUT'
            })
        }),
        deletePostById: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            })
        }),
        createUser:builder.mutation({
            query:(user)=>({
                url:'posts',
                method:"POST",
                body:user
            })
        })
    })
})

export const { useGetAllPostQuery, useGetAllPostByIdQuery, useUpdatePostByIdMutation,useDeletePostByIdMutation ,useCreateUserMutation} = postApi;