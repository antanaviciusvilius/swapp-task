import { Film } from "../models/Film";

export interface FilmCardProps {
    film: Film;
}
export default function FilmCard(props: FilmCardProps) {
    return (
        <div className="flex min-w-[450px] min-h-[200px] shadow-[0_0_10px_5px_rgba(0,0,0,0.3)] bg-gray-900 rounded-md my-4">
            <div className="flex flex-1 flex-col m-4">
                <div className="text-2xl text-white font-bold">
                    {props.film.title}
                </div>
                <div className="text-lg text-gray-200 my-auto">
                    Release date: {props.film.release_date}
                </div>
                <button className="mt-auto p-2.5 flex items-center rounded-md duration-300 cursor-pointer bg-blue-700 hover:bg-blue-600 text-white w-fit">
                    Show people
                </button>
            </div>
            <div className="flex h-24 w-24 bg-blue-600 m-2 items-center justify-center flex-wrap rounded-md text-center">
                <div className="text-2xl text-white">Episode</div>
                <div className="text-4xl text-gray-100 font-bold">{props.film.episode_id}</div>
            </div>
        </div>
    )
}
