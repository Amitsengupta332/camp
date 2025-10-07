import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    // baseUrl: "https://camps-back-4l3ybxx6q-amitsengupta332s-projects.vercel.app/api/v1"
    baseUrl: `https://camps-back.vercel.app/api`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
