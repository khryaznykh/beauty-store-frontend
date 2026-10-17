// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie';

export const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const rawBaseQuery = fetchBaseQuery ({
  baseUrl: apiUrl,
  prepareHeaders: (headers) => {
    const token = Cookies.get("token"); 

    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers;
  }
})

const baseQueryWithAuth = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    Cookies.remove("token")
    window.dispatchEvent(new Event("auth:unauthorized"))
  } 
  return result
}




export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithAuth,


tagTypes: [ "PROFILE", 
            "SUBSCRIBERS", 
            "MY_REVIEWS", 
            "PUBLISHED_REVIEWS", 
            "ADMIN_REVIEWS",
            "PRODUCTS"],

endpoints: () => ({}),
})

