import { Film } from "./Film";

export interface FilmFetchResponse {
    count: number;
    next?: string;
    previous?: string;
    results: Film[];
}