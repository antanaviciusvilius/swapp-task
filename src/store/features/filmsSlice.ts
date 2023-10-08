import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { Film } from "../../models/Film";
import { FilmFetchResponse } from "../../models/FilmFetchResponse";
import { RootState } from "../store";

interface FilmState {
    films: Film[];
    loading?: boolean;
}

const initialState: FilmState = {
    films: [],
    loading: false
};

export const fetchFilm = createAsyncThunk(
    "film/fetch",
    async () => {
        const response = await fetch("https://swapi.dev/api/films", {
            method: "GET",
        });
        const data: FilmFetchResponse = await response.json();
        return data.results;
    },
);

export const FilmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilm.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchFilm.fulfilled, (state, action) => {
            state.films = action.payload;
            state.loading = false;
        });
    },
});

export default FilmSlice.reducer;

const films = (state: RootState) => state.film.films;

export const filmByIdSelector = createSelector(
    [films, (_, id?: number) => id],
    (films, id) => {
        return films.find(film => film.episode_id === id);
    }
);

export const searchFilmsSelector = createSelector(
    [films, (_, searchTerm: string = '') => searchTerm],
    (films, searchTerm) => {
        return searchTerm !== '' ? films.filter(film => film.title.toLowerCase().includes(searchTerm.toLowerCase())) : films;
    }
);

export const searchAndSortFilmsSelector = createSelector(
    [searchFilmsSelector, (_, __, sortKey: keyof Film = 'episode_id') => sortKey, (_, __, ___, sortOrder: 'asc' | 'desc' = 'asc') => sortOrder],
    (films, sortKey, sortOrder) => {
        return [...films].sort((a, b) => {
            if (a[sortKey] > b[sortKey]) {
                return sortOrder === 'asc' ? 1 : -1;
            } else if (a[sortKey] < b[sortKey]) {
                return sortOrder === 'asc' ? -1 : 1;
            } else {
                return 0;
            }
        });
    }
);