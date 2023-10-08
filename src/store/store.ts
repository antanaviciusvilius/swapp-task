
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FilmSlice } from "./features/filmsSlice";
import { FilterSlice } from "./features/filterSlice";

export const store = configureStore({
    reducer: {
        film: FilmSlice.reducer,
        filter: FilterSlice.reducer
    },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;