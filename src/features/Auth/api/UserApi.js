import { api } from '@/shared/api/api'
import { createApiConfig } from '@/shared/api/createApiConfig'
import { endpoints } from '@/shared/api/endpoints'


export const userApi = api.injectEndpoints({

    endpoints: (builder) => ({

        signUp: builder.mutation({
            query: (userData) => createApiConfig({
                method: 'POST',
                url: endpoints.path.signup,  
                body: userData,
            }),
            invalidatesTags: ['SUBSCRIBERS']
        }),

        logIn: builder.mutation({
            query: (credentials) => createApiConfig({
                method: 'POST',
                url: endpoints.path.login,  
                body: credentials,
            }),
        }),

        //can be done better using cookies and info stored at backend
        signOut: builder.mutation({
            queryFn: () => {
                return { data: null };
            },

            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    localStorage.removeItem("token");
                    dispatch(api.util.resetApiState());
                } catch (error) {
                    console.log(error);
                }
            }
        }),

        getProfile: builder.query({
            query: () => createApiConfig({
                method: 'GET',
                url: endpoints.path.profile,  
            }),
            providesTags: ['PROFILE']
        }),

        deleteProfile: builder.mutation({
            query: ()=> createApiConfig({
                method:"DELETE",
                url: endpoints.path.deleteprofile,
            }),
            invalidatesTags: ['SUBSCRIBERS', 'PROFILE']
        }),
    
        forgotPassword: builder.mutation({
            query: (body)=> createApiConfig({
                method:"POST",
                url: endpoints.path.forgotpassword,
                body,
            })
        }),

        resetPassword: builder.mutation({
            query: (body)=> createApiConfig({
                method:"PUT",
                url: endpoints.path.resetpassword,
                body,
            }),
        }),

        getSubscribers: builder.query({
            query: () => createApiConfig({
                method:"GET",
                url: endpoints.path.getsubscribers,
            }),
            providesTags: ['SUBSCRIBERS']
        }), 

        changeUserRole: builder.mutation({
            query: ({id, role}) => createApiConfig({
                method:"PATCH",
                url: `${endpoints.path.updateuserrole}/${id}/role`,
                body: { role }
            }),
            invalidatesTags: ['SUBSCRIBERS']
        })

    }),
})

export const { 
    useSignUpMutation,
    useLogInMutation,
    useSignOutMutation,
    useGetProfileQuery,
    useDeleteProfileMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useGetSubscribersQuery,
} = userApi;