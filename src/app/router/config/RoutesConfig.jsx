import { element } from "prop-types";
import CartPage from "@/pages/CartPage/ui/CartPage";
import { HomePage } from "@/pages/Home/ui/HomePage";
import ShopPage from "@/pages/Shop/ui/ShopPage";
import ShopItemPage from "@/pages/ShopItemPage/ui/ShopItemPage";
import Cart from "@/widgets/Cart/ui/Cart";
import { getRoute404, 
        getRouteCart, 
        getRouteContactUs, 
        getRouteFAQ, 
        getRouteMain, 
        getRoutePrivacyPolicy, 
        getRouteProducts, 
        getRouteProductDetails, 
        getRouteLeaveReview,
        getRouteProductReviews,//add 
        getRouteUpdateUsersReview,//add profile
        getRouteGetUsersReviews, //add profile
        getRouteSignUp,
        getRouteSignIn,
        getRouteUserProfile,//add profile
        getRouteForgotPassword,//add
        getRouteResetPassword,//add  //add admin routes
        getRouteTermsAndCond} from "./routes";
import LeaveReviewPage from "@/pages/LeaveReviewPage/ui/LeaveReviewPage";
import Signin from "@/shared/ui/AuthTabs/AuthTabs";
import { SignInPage } from "@/pages/SignInPage/SignInPage";
import { SignUpPage } from "@/pages/SignUpPage/SignUpPage";
import { Store } from 'lucide-react';
import { User } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { Headset } from 'lucide-react';

export const RoutesConfig = [

    {
        path: getRouteMain(),
        element: <HomePage/>
    },

    {
        path: getRouteProducts(),
        name: 'Shop',
        element: <ShopPage/>,
    },

    {
        path: getRouteProductDetails(),
        element: <ShopItemPage/>,
    },

    {
        path: getRouteContactUs(),
        name: 'Contact Us',
        element: <h1>Contact us</h1>,
    },

    {
        path: getRouteSignUp(),
        element: <SignUpPage/>
    },

    {
        path: getRouteSignIn(),
        name: 'Sign In',
        element: <SignInPage/>
    },

    {
        path: getRouteUserProfile(),
        element: "Profile"
    },

    {
        path: getRouteCart(),
        element: <CartPage/>,
    },

    {
        path: getRouteForgotPassword(),
        element: <h1>Forgot Password</h1>
    },

    {
        path: getRouteResetPassword(),
        element: <h1>Reset Password</h1>
    },

    // {
    //     path: getRouteAdminShopData(),
    //     // AdminOnly: true,
    //     element: <h1>Admin Shop DAta</h1>
    // },

    {
        path: getRouteFAQ(),
        // name: 'FAQ',
        element: <h1>FAQ</h1>
    },

    {
        path: getRouteLeaveReview(),
        element: <LeaveReviewPage/>
    },
    
    {
        path: getRoutePrivacyPolicy(),
        // name: 'Privacy Policy',
        element: <h1>Privacy Policy</h1>
    },

    {
        path: getRouteTermsAndCond(),
        // name: 'Privacy Policy',
        element: <h1>Terms and Conditions</h1>
    },
    {
        path: getRoute404(),
        element: <h1>404</h1>,
    },
]