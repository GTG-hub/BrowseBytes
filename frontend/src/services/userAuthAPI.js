import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthAPI = createApi({
  reducerPath: 'userAuthAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
        query:(user)=>{
            return {
                url:'register/',
                method:'POST',
                body:user,
                headers:{
                    'Content-type':'application/json',
                }
            }
        }
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'login/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    getUser: builder.query({
      query: (access_token) => {
        return {
          url: 'profile/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    postArticle: builder.mutation({
      query:(article)=>{
          return {
              url:'addarticle/',
              method:'POST',
              body:article,
              headers:{
                  'Content-type':'application/json',
              }
          }
      }
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'resetpwmail/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `resetpw/${id}/${token}/`,
          method: 'POST',
          body: actualData,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: 'changepw/',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
  }),
})
export const {useRegisterUserMutation, useLoginUserMutation, useGetUserQuery, usePostArticleMutation, useSendPasswordResetEmailMutation, useResetPasswordMutation, useChangeUserPasswordMutation } = userAuthAPI