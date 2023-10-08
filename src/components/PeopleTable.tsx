import { FilmPerson } from "../models/FilmPerson";

export interface PeopleTableProps {
    peopleList: FilmPerson[];
}
export default function PeopleTable({ peopleList }: PeopleTableProps) {
    return (
        <div className={`overflow-y-auto overflow-x-hidden [&>*:nth-child(odd)]:bg-gray-900`}>
            {!peopleList.length && <div className="flex flex-1">No people in episode</div>}
            {peopleList.length && peopleList.map((person, index) => {
                return (
                    <div role="grid" key={person.name} className="grid grid-cols-[50px,_1fr] grid-flow-col md:grid-flow-row md:grid-cols-[50px_repeat(2,_minmax(0,_1fr))] p-2 md:p-8 bg-gray-700 text-white text-xl">
                        <div className="row-span-2 md:row-auto flex items-center justify-center text-3xl md:text-xl">{index + 1}.</div>
                        <div className="col-span-2 md:col-auto flex items-center justify-center md:justify-start">{person.name}</div>
                        <div className="flex justify-around items-center">
                            <div>{person.birth_year}</div>
                            <div>{person.gender}</div>
                            <div>{person.mass} kg</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
