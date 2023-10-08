import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../models/Film';

interface FilterState {
    sortKey: keyof Film;
    sortOrder: 'asc' | 'desc';
    searchTerm: string;
}

const initialState: FilterState = {
    sortKey: 'episode_id',
    sortOrder: 'asc',
    searchTerm: '',
};

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSortKey(state, action: PayloadAction<keyof Film>) {
            state.sortKey = action.payload;
        },
        setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
            state.sortOrder = action.payload;
        },
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        resetFilter(state) {
            state.sortKey = initialState.sortKey;
            state.sortOrder = initialState.sortOrder;
            state.searchTerm = initialState.searchTerm;
        },
    },
});

export const { setSortKey, setSortOrder, setSearchTerm, resetFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
