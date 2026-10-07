import { api } from "../../../api/api";
import { createApiConfig } from "../../../api/createApiConfig";
import { endpoints } from "../../../api/endpoints";

export const ReviewApi = api.injectEndpoints({
    endpoints: (builder) => ({
        
        //for logged in customer
        createReview: builder.mutation({
            query:({productId, ...reviewData}) => createApiConfig({
                method: "POST",
                url: `${endpoints.path.postreview}/${productId}/reviews`,
                body: reviewData
            }),
            invalidatesTags: ['ADMIN_REVIEWS', 'MY_REVIEWS']
        }),

        getMyReviews:  builder.query({
            query: ()=> createApiConfig({
                method: "GET",
                url: endpoints.path.getmyreviews,
            }),
            providesTags: ["MY_REVIEWS"]
        }),

        editMyReview: builder.mutation({
            query: ({reviewId, productId, ...reviewData})=> createApiConfig({
                method: "PATCH",
                url: `${endpoints.path.editmyreview}/${reviewId}`,
                body: reviewData 
            }),
            invalidatesTags: (result, error, { productId }) => [
                                "MY_REVIEWS", 
                                "ADMIN_REVIEWS", 
                                {type: "PUBLISHED_REVIEWS", id: productId}
                            ]
        }),

        //when calling add deleteMyReview({reviewId: review._id,productId: review.product._id});
        deleteMyReview: builder.mutation({
            query:({reviewId})=> createApiConfig({
                method: "DELETE",
                url: `${endpoints.path.deletemyreview}/${reviewId}`
            }),
            invalidatesTags: (result, error, { productId }) => [
                                "MY_REVIEWS", 
                                "ADMIN_REVIEWS", 
                                {type: "PUBLISHED_REVIEWS", id: productId}
                            ]
        }),

        //for ADMIN
        getAdminAllReviews: builder.query({
            query: ({status}={})=> createApiConfig ({
                method: "GET",
                url: status  
                    ? `${endpoints.path.getadminallreviews}?status=${status}`
                    : endpoints.path.getadminallreviews
            }),
            providesTags: ["ADMIN_REVIEWS"],
        }),

        changeReviewStatus: builder.mutation({
            query: ({reviewId, status, productId})=> createApiConfig({
                method: "PATCH",
                url: `${endpoints.path.changereviewstatus}/${reviewId}/status`,
                body: {status}
            }),
            invalidatesTags: (result, error, { productId }) => [
                                "MY_REVIEWS", 
                                "ADMIN_REVIEWS", 
                                { type: "PUBLISHED_REVIEWS", id: productId }
                            ]
        }),

        //public
        getPublishedReviews: builder.query({
            query: ({productId})=> createApiConfig({
                method: "GET",
                url: `${endpoints.path.getpublishedreviews}/${productId}/reviews`
            }),
            providesTags: (result, error, { productId }) => [
                { type: "PUBLISHED_REVIEWS", id: productId }
            ]
        })

    })
})

export const {
    useCreateReviewMutation,
    useEditMyReviewMutation,
    useDeleteMyReviewMutation,
    useGetMyReviewsQuery,
    useGetAdminAllReviewsQuery,
    useChangeReviewStatusMutation,
    useGetPublishedReviewsQuery
} = ReviewApi