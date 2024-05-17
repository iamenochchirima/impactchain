import { API_BASE_URL } from '../../hooks/exporter';
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    signup : builder.mutation({
      query: (data) => ({
        url: "/api/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    logout : builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
        method: "POST",
      }),
    }),
    authenticate: builder.query({
      query: () => "/api/auth/authenticate",

    }),
    getUsers: builder.query({
      query: () => `${API_BASE_URL}`,
    }),
    getUser: builder.query({
      query: () => "/api/users/profile",
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: API_BASE_URL,
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `${API_BASE_URL}/api/users/update/`,
        method: "PUT",
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `${API_BASE_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLazyAuthenticateQuery,
  useLogoutMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApiSlice;
