
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: apiUrl              
}),


tagTypes: [ "PROFILE", 
            "SUBSCRIBERS", 
            "MY_REVIEWS", 
            "PUBLISHED_REVIEWS", 
            "ADMIN_REVIEWS",
            "PRODUCTS"],

endpoints: () => ({}),
})

