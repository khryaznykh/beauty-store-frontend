export const getRouteMain = () => '/';
export const getRouteCart = () => '/cart';

export const getRouteProductDetails = (productId) => `/products/${productId ? `${productId}` : ':productId'}`;
export const getRouteProducts = () => '/products';

export const getRouteSignUp = () => '/signup';
export const getRouteSignIn = () => '/signin';
export const getRouteUserProfile = () => '/profile';
export const getRouteForgotPassword = () => '/forgot-password';
export const getRouteResetPassword = () => '/reset-password';

export const getRouteLeaveReview = (productId) =>  `/products/${productId ? `${productId}/reviews` : ':productId/reviews'}`;
export const getRouteProductReviews = () => "/products/:productId/reviews";//may need it later to show many reviews
export const getRouteUpdateUsersReview = () => '/profile/my-reviews/:reviewId';
export const getRouteGetUsersReviews = () => '/profile/my-reviews';

export const getRoute404 = () => '*';
export const getRouteContactUs = () => '/contact-us';
export const getRoutePrivacyPolicy = () => '/privacy-policy';
export const getRouteTermsAndCond = () => '/terms-and-cond';

export const getRouteFAQ = () => '/faq';

//ADMIN
export const getRouteAdminGetSubscribers = () => '/admin/subscribers';
export const getRouteAdminChangeUserRole = () => "/admin/users/:id/role";
export const getRouteAdminCreateProducts = () => '/products';
export const getRouteAdminUpdateProducts = () => '/products/:id';
export const getRouteAdminGetAllReviews = () => '/admin/reviews';
export const getRouteAdminChangeReviewStatus = () => "/admin/reviews/:reviewId/status";







