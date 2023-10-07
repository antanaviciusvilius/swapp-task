import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { Film } from "../../models/Film";
import { FilmFetchResponse } from "../../models/FilmFetchResponse";
import { RootState } from "../store";

interface FilmState {
    films: Film[];
}

const initialState: FilmState = {
    films: [],
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
        builder.addCase(fetchFilm.fulfilled, (state, action) => {
            state.films = action.payload;
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