import FilmCard from "../components/FilmCard";
import { useAppSelector } from "../store/store";

export default function Films() {
    const films = useAppSelector((state) => state.film.films)

    return (
        <div className="flex overflow-x-auto overflow-y-hidden flex-nowrap pb-3 max-w-full gap-5">
            {films.length ?
                films.map(film => <FilmCard key={film.title} film={film} />)
                : <div>Loading films..</div>
            }
        </div>
    )
}
