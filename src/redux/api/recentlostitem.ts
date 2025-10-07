import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const recentlostitemApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        recetlostitem: build.query({
            query: () => ({
                method: "GET",
                url: "/lost-items",
               
            }),
            providesTags: [tagTypes.lostItems],
        }),

        // updateUserStatus: build.mutation({
        //     query: (data) => ({
        //         method: "PUT",
        //         url: `/user/${data.id}`,
        //         data: data.status,
        //     }),
        //     invalidatesTags: [tagTypes.user, tagTypes.meta],
        // }),
    }),
});

export const {  useRecetlostitemQuery } =  recentlostitemApi;
