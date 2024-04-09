import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    completions: builder.mutation({
      query: (data) => ({
        url: "/api/completions",
        method: "POST",
        body: data,
      }),
    }),
    stream: builder.mutation({
      query: (data) => ({
        url: "/api/stream",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCompletionsMutation, useStreamMutation } = usersApiSlice;
