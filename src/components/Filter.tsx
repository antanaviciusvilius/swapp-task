import { useState } from "react";
import { Film } from "../models/Film";
import { setSearchTerm, setSortKey, setSortOrder } from "../store/features/filterSlice";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { useOutsideClick } from "../utils/useOutsideClick";

export default function Filter() {
    const [sortToggled, setSortToggled] = useState(false);
    const dispatch = useAppDispatch();
    const filter = useAppSelector((state: RootState) => state.filter);

    const outsideClickRef = useOutsideClick(() => {
        closeSortDropdown();
    });

    const handleSortClick = (key: keyof Film, order: 'asc' | 'desc') => {
        dispatch(setSortKey(key));
        dispatch(setSortOrder(order));
        closeSortDropdown();
    }

    const closeSortDropdown = () => {
        setSortToggled(false);
    }

    return (
        <>
            <div className="flex relative" ref={outsideClickRef}>
                <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-700 border border-gray-300 rounded-l-lg hover:bg-blue-600 focus:ring-1 focus:outline-none focus:ring-blue-600"
                    type="button"
                    onClick={() => setSortToggled(!sortToggled)}
                >
                    Sort
                    <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                <div
                    id="dropdown"
                    className={`absolute top-12 ${!sortToggled && 'hidden'} bg-blue-700 divide-y divide-blue-500 rounded-lg shadow w-44`}
                >
                    <ul
                        className="py-2 text-sm text-white"
                        aria-labelledby="dropdown-button"
                    >
                        <li>
                            <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 hover:bg-blue-600"
                                onClick={() => handleSortClick('episode_id', 'asc')}
                            >
                                Episode ascending
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 hover:bg-blue-600"
                                onClick={() => handleSortClick('episode_id', 'desc')}
                            >
                                Episode descending
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 hover:bg-blue-600"
                                onClick={() => handleSortClick('release_date', 'asc')}
                            >
                                From oldest
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 hover:bg-blue-600"
                                onClick={() => handleSortClick('release_date', 'desc')}
                            >
                                From newest
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full text-sm text-white bg-blue-700 rounded-r-lg border-l-blue-200 border-l-0 border border-blue-400 placeholder-gray-200 focus:ring-1 focus:outline-none focus:ring-blue-600"
                        placeholder="Search by episode title"
                        required
                        value={filter.searchTerm}
                        onChange={e => dispatch(setSearchTerm(e.target.value))}
                    />
                </div>
            </div>
        </>
    )
}
