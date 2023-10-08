import { Outlet, useMatch, useNavigate } from "react-router-dom";
import FilmCard from "../components/FilmCard";
import { Film } from "../models/Film";
import { useAppSelector } from "../store/store";

export default function Films() {
    const films = useAppSelector((state) => state.film.films)
    const navigate = useNavigate();
    const matches = useMatch('films/:id');
    const selectedFilm = Number(matches?.params?.id);

    const handleShowPeopleClick = (film: Film) => {
        navigate(`${film.episode_id}`);
    }

    return (
        <>
            <div className="flex flex-none overflow-x-auto overflow-y-hidden flex-nowrap pb-3 max-w-full gap-5">
                {films.length ?
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
                    : <div>Loading films..</div>
                }
            </div>

            <Outlet />
        </>
    )
}
