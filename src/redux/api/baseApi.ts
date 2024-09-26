// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://portfolio-server-alpha-silk.vercel.app/api",
  prepareHeaders: (headers) => {
    const cookieString = document.cookie;
    const token = cookieString.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    if (token?.accessToken) {
      headers.set("authorization", `Bearer ${token?.accessToken}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["skill", "project", "user", "dev"],
  endpoints: () => ({}),
});
