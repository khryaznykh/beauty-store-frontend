import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',

    initialState: {
        searchTag: '',
    },

    reducers: {
        searchInput: (state, action) => {
            state.searchTag = action.payload;
        }
    }
})

export const getSearchQuery = state => state.search.searchTag;
export const { searchInput } = searchSlice.actions;
export default searchSlice.reducer
