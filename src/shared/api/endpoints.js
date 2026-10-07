export const endpoints = {
    path: {
    //AUTH
        signup: '/signup',
        login: '/login',
        profile: '/profile',
        deleteprofile: '/delete-profile',
        
        resetpassword: '/reset-password',
        forgotpassword: '/forgot-password',

        //admin only
        getsubscribers: '/admin/subscribers',
        updateuserrole: '/admin/users',

    //PRODUCTS

        //admin only
        createproduct: '/products',
        editproduct: '/products',
        deleteproduct: 'products',

        //public
        getallproducts: '/products',
        getproductbyid: '/products',

    //REVIEW
        //logged in customer
        postreview:'/products',
        getmyreviews: '/account/my-reviews',
        editmyreview: '/account/my-reviews',
        deletemyreview: '/account/my-reviews',

        //ADMIN
        getadminallreviews: '/admin/reviews',
        changereviewstatus: '/admin/reviews',

        //public
        getpublishedreviews: "/products"
    }
}