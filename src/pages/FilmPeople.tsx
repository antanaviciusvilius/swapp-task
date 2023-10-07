import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "../components/PeopleTable";
import { FilmPerson } from "../models/FilmPerson";
import { filmByIdSelector } from "../store/features/filmsSlice";
import { useAppSelector } from "../store/store";

export default function FilmPeople() {
    const filmId = Number(useParams().film);
    const selectedFilm = useAppSelector((state) => filmByIdSelector(state, filmId));
    const [people, setPeople] = useState<FilmPerson[]>([]);
    const [isLoadingPeople, setIsLoadingPeople] = useState(true);

    useEffect(() => {
        const fetchPeople = async () => {
            if (!selectedFilm) {
                return;
            }
            setIsLoadingPeople(true);
            const peoplePromises = selectedFilm.characters.map(async url => {
                const response = await fetch(url, {
                    method: "GET",
                });
                const data: FilmPerson = await response.json();
                return data;
            });
            const allPeople = await Promise.all(peoplePromises);
            setPeople(allPeople);
            setIsLoadingPeople(false);
        }

        fetchPeople();
    }, [selectedFilm])

    return (
        <>
            {!isLoadingPeople && (
                <div className="flex flex-1 flex-col mt-8 lg:m-8 rounded-md overflow-y-auto">
                    <div className="border-b-2 p-3 text-xl bg-blue-600 text-white text-center">
                        People in <span className="font-bold">{selectedFilm?.title}</span>
                    </div>
                    <PeopleTable peopleList={people} />
                </div>
            )}

            {selectedFilm && isLoadingPeople && <div>Loading people</div>}
        </>
    )
}