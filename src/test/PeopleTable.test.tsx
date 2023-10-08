import { render } from '@testing-library/react';
import PeopleTable from '../components/PeopleTable';
import { FilmPerson } from '../models/FilmPerson';

describe('PeopleTable', () => {
    const peopleList = [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/",
                "https://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.dev/api/starships/12/",
                "https://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.dev/api/people/1/"
        },
        {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female",
            "homeworld": "https://swapi.dev/api/planets/2/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "https://swapi.dev/api/vehicles/30/"
            ],
            "starships": [],
            "created": "2014-12-10T15:20:09.791000Z",
            "edited": "2014-12-20T21:17:50.315000Z",
            "url": "https://swapi.dev/api/people/5/"
        }
    ];

    it('should render a table with people data', () => {
        const { getByText } = render(<PeopleTable peopleList={peopleList} />);

        expect(getByText('Luke Skywalker')).toBeInTheDocument();
        expect(getByText('Leia Organa')).toBeInTheDocument();
    });

    it('should render a message when there are no people in the episode', () => {
        const peopleList: FilmPerson[] = [];

        const { getByText } = render(<PeopleTable peopleList={peopleList} />);

        expect(getByText('No people in episode')).toBeInTheDocument();
    });

    it('should display the correct number of rows', () => {

        const peopleList = [
            {
                "name": "Luke Skywalker",
                "height": "172",
                "mass": "77",
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "19BBY",
                "gender": "male",
                "homeworld": "https://swapi.dev/api/planets/1/",
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/6/"
                ],
                "species": [],
                "vehicles": [
                    "https://swapi.dev/api/vehicles/14/",
                    "https://swapi.dev/api/vehicles/30/"
                ],
                "starships": [
                    "https://swapi.dev/api/starships/12/",
                    "https://swapi.dev/api/starships/22/"
                ],
                "created": "2014-12-09T13:50:51.644000Z",
                "edited": "2014-12-20T21:17:56.891000Z",
                "url": "https://swapi.dev/api/people/1/"
            },
            {
                "name": "Leia Organa",
                "height": "150",
                "mass": "49",
                "hair_color": "brown",
                "skin_color": "light",
                "eye_color": "brown",
                "birth_year": "19BBY",
                "gender": "female",
                "homeworld": "https://swapi.dev/api/planets/2/",
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/6/"
                ],
                "species": [],
                "vehicles": [
                    "https://swapi.dev/api/vehicles/30/"
                ],
                "starships": [],
                "created": "2014-12-10T15:20:09.791000Z",
                "edited": "2014-12-20T21:17:50.315000Z",
                "url": "https://swapi.dev/api/people/5/"
            }
        ];

        const { getAllByRole } = render(<PeopleTable peopleList={peopleList} />);

        expect(getAllByRole('grid')).toHaveLength(2);
    });
});
