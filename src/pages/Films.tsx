import { Outlet, useMatch, useNavigate } from "react-router-dom";
import FilmCard from "../components/FilmCard";
import Filter from "../components/Filter";
import { Film } from "../models/Film";
import { searchAndSortFilmsSelector } from "../store/features/filmsSlice";
import { RootState, useAppSelector } from "../store/store";

export default function Films() {
    const filter = useAppSelector((state: RootState) => state.filter);
    const films = useAppSelector((state) => searchAndSortFilmsSelector(state, filter.searchTerm, filter.sortKey, filter.sortOrder));
    const isLoadingFilms = useAppSelector((state) => state.film.loading);
    const navigate = useNavigate();
    const matches = useMatch('films/:id');
    const selectedFilm = Number(matches?.params?.id);

    const handleShowPeopleClick = (film: Film) => {
        navigate(`${film.episode_id}`);
    }

    return (
        <>
            <Filter />
            {isLoadingFilms && <div>Loading films..</div>}
            {!!films.length &&
                <div className="flex flex-none overflow-x-auto overflow-y-hidden flex-nowrap pb-3 max-w-full gap-5">
                    {
                        films.map(film => {
                            return (
                                <FilmCard
                                    key={film.title}
                                    film={film}
                                    showPeopleClick={handleShowPeopleClick}
                                    selected={selectedFilm === film.episode_id}
                                />
                            )
                        })
                    }
                </div>
            }

            <Outlet />
        </>
    )
}
