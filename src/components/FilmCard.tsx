import { Film } from "../models/Film";

export interface FilmCardProps {
    film: Film;
    showPeopleClick: (film: Film) => void
    selected: boolean
}
export default function FilmCard({ film, showPeopleClick, selected }: FilmCardProps) {
    return (
        <div className="flex min-w-[300px] md:min-w-[350px] min-h-[200px] shadow-[0_0_10px_5px_rgba(0,0,0,0.3)] bg-gray-900 rounded-md my-4">
            <div className="flex flex-1 flex-col m-4">
                <div className="text-2xl text-white font-bold h-[45px] md:h-[25px]">
                    {film.title}
                </div>
                <div className="text-md text-gray-200 mt-auto">
                    Release date: {film.release_date}
                </div>
                <button
                    disabled={selected}
                    className={`mt-auto p-2.5 flex items-center rounded-md duration-300 cursor-pointer bg-blue-700 ${selected ? 'bg-blue-900 cursor-not-allowed' : 'hover:bg-blue-600'} text-white w-fit`}
                    onClick={() => showPeopleClick(film)}
                >
                    Show people
                </button>
            </div>
            <div className={`flex h-16 w-16 md:h-24 md:w-24 bg-blue-600 ${selected && 'bg-blue-900'} m-2 items-center justify-center flex-wrap rounded-md text-center`}>
                <div className="text-lg md:text-2xl text-white">Episode</div>
                <div className="text-2xl md:text-4xl text-gray-100 font-bold">{film.episode_id}</div>
            </div>
        </div>
    )
}
