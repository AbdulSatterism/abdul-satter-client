import { baseApi } from "@/redux/api/baseApi";

const DeveloperApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDevInfo: builder.query({
      query: () => ({
        url: "/dev-info",
        method: "GET",
      }),
    }),

    // createSkill: builder.mutation({
    //   query: (info) => ({
    //     url: "/skills/create-skill",
    //     method: "POST",
    //     body: info,
    //   }),
    //   invalidatesTags: ["skill"],
    // }),

    // deleteSkill: builder.mutation({
    //   query: (id) => ({
    //     url: `/skills/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["skill"],
    // }),
  }),
});

export const { useGetDevInfoQuery } = DeveloperApi;
