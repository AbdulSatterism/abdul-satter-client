import { baseApi } from "@/redux/api/baseApi";

const DeveloperApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDevInfo: builder.query({
      query: () => ({
        url: "/dev-info",
        method: "GET",
      }),
      providesTags: ["dev"],
    }),

    singleDeveloper: builder.query({
      query: (id) => ({
        url: `/dev-info/${id}`,
        method: "GET",
      }),
    }),

    createDevInfo: builder.mutation({
      query: (info) => ({
        url: "/dev-info/create-dev-info",
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["dev"],
    }),

    updateDev: builder.mutation({
      query: (args) => ({
        url: `/dev-info/${args?.id}`,
        method: "PUT",
        body: args?.updateInfo,
      }),
      invalidatesTags: ["dev"],
    }),

    deleteDev: builder.mutation({
      query: (id) => ({
        url: `/dev-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["dev"],
    }),
  }),
});

export const {
  useGetDevInfoQuery,
  useUpdateDevMutation,
  useDeleteDevMutation,
  useCreateDevInfoMutation,
  useSingleDeveloperQuery,
} = DeveloperApi;
