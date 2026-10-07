import { configureStore } from '@reduxjs/toolkit';
import  filterReducer  from '../../features/FilterItems/model/filterSlice';
import  searchReducer from '../../features/SearchItems/model/searchSlice';
import cartReducer from '../../features/CartItem/model/cartSlice';
import { api } from '../../shared/api/api';
import { userApi } from '../../features/Auth/api/UserApi';


    export const store = configureStore({
    reducer: {
        filter: filterReducer,
        search: searchReducer,
        cart: cartReducer,
        [userApi.reducerPath]: userApi.reducer,
        // Add the generated reducer as a specific top-level slice
        [api.reducerPath]: api.reducer,
        
    },

    // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(api.middleware)

});


