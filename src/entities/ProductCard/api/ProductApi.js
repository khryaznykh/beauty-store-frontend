import { api } from "@/shared/api/api";
import { createApiConfig } from "@/shared/api/createApiConfig";
import { endpoints } from "@/shared/api/endpoints";

export const ProductApi = api.injectEndpoints({
    endpoints: (builder)=>({
        //public
        getAllProducts: builder.query({
            query:()=>createApiConfig({
                method: "GET",
                url: endpoints.path.getallproducts,
            }),
            providesTags: ["PRODUCTS"]
        }),

        getProductById: builder.query({
            query:({productId})=> createApiConfig({
                method:"GET",
                url: `${endpoints.path.getproductbyid}/${productId}`,
            }),
            providesTags: (result, error, { productId }) => [
                { type: "PRODUCTS", id: productId }
            ]
        }),

        //ADMIN
        createProduct: builder.mutation({
            query: (productData)=> createApiConfig({
                method: "POST",
                url: endpoints.path.createproduct,
                body: productData
            }),
            invalidatesTags: ["PRODUCTS"]
        }),
        editProduct: builder.mutation({
            query:({productId, ...productData})=>createApiConfig({
                method: "PUT",
                url: `${endpoints.path.editproduct}/${productId}`,
                body: productData
            }),
            invalidatesTags: (result, error, { productId }) => [
                "PRODUCTS",
                { type: "PRODUCTS", id: productId }
            ]
        }),
        deleteProduct: builder.mutation({
            query: ({productId})=>createApiConfig({
                method: "DELETE",
                url: `${endpoints.path.deleteproduct}/${productId}`
            }),
            invalidatesTags:["PRODUCTS"]
        })

    })
})

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useEditProductMutation,
    useDeleteProductMutation
} = ProductApi;