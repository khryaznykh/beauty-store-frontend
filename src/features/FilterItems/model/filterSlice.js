import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    
    initialState: {
        selectedTag: '' || 'all',
    },
    
    reducers: {
        filterTag: (state, action) => {
            state.selectedTag = action.payload;
        }
    },
})

export const getSelectedTag = state => state.filter.selectedTag;
export const { filterTag } = filterSlice.actions
export default filterSlice.reducer