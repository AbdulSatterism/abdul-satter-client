import { baseApi } from "@/redux/api/baseApi";

const ProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["project"],
    }),

    singleProject: builder.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
    }),

    createProject: builder.mutation({
      query: (info) => ({
        url: "/projects/create-project",
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["project"],
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"],
    }),

    updateProject: builder.mutation({
      query: (args) => ({
        url: `/projects/${args?.id}`,
        method: "PUT",
        body: args?.updateInfo,
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useSingleProjectQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} = ProjectApi;
