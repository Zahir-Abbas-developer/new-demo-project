import { GlobalApiSlice } from "../../service";

export const ManageUserApi = GlobalApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getRequestUsers: builder.query({
      query: ({ pagination }: any) => ({
        url: `/api/users/active?page=1&limit=10`,
        method: "GET",
      }),

      providesTags: ["ManageActiveUser"],
    }),

    getRequestInactiveUser: builder.query({
      query: ({ query,pagination }: any) => ({
        url: `/api/users/inactive/filtered?${pagination}${query}`,
        method: "GET",
      }),

      providesTags: ["ManageActiveUser"],
    }),

    getRequestDeletedUser: builder.query({
      query: ({ query, pagination }: any) => ({
        url: `/api/users/deleted/filtered?${pagination}${query}`,
        method: "GET",
      }),

      providesTags: ["ManageActiveUser"],
    }),

    deleteUser: builder.mutation({
      query: ({ userId }: any) => ({
        url: `/api/users/delete?ids=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ManageActiveUser"],
    }),

    deactivateUser: builder.mutation({
      query: ({ userId }: any) => ({
        url: `/api/users/active/deactivate?ids=${userId}`,
        method: "PUT",
      }),
      invalidatesTags: ["ManageActiveUser"],
    }),

    restoreUser: builder.mutation({
      query: ({ userId }: any) => ({
        url: `/api/users/deleted/restore?ids=${userId}`,
        method: "PUT",
      }),
      invalidatesTags: ["ManageActiveUser"],
    }),

    activateUser: builder.mutation({
      query: ({ userId }: any) => ({
        url: `/api/users/inactive/activate?ids=${userId}`,
        method: "PUT",
      }),
      invalidatesTags: ["ManageActiveUser"],
    }),
    filterUser: builder.query({
      query: ({ query,pagination }: any) => ({
        url: `/api/users/active/filtered?${pagination}${query} `,

        method: "GET",
      }),

      providesTags: ["ManageActiveUser"],
    }),

  }),
});

export const {
  useGetRequestUsersQuery,
  useGetRequestInactiveUserQuery,
  useGetRequestDeletedUserQuery,
  useDeleteUserMutation,
  useDeactivateUserMutation,
  useRestoreUserMutation,
  useActivateUserMutation,
  useFilterUserQuery
} = ManageUserApi;
