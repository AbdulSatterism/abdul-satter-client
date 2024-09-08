import { baseApi } from "@/redux/api/baseApi";

const ProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProjectsQuery } = ProjectApi;
