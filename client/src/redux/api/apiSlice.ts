
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../hooks/exporter'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL,
    credentials: 'include'
   }),
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
})
