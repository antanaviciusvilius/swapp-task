import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Films from '../pages/Films';
import filmReducer from '../store/features/filmsSlice';
import filterReducer from '../store/features/filterSlice';

describe('Films', () => {
    test('renders Films component', () => {
        const store = configureStore({
            reducer: {
                film: filmReducer,
                filter: filterReducer
            },
            preloadedState: {
                film: {
                    films: [{
                        "title": "A New Hope",
                        "episode_id": 4,
                        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                        "director": "George Lucas",
                        "producer": "Gary Kurtz, Rick McCallum",
                        "release_date": "1977-05-25",
                        "characters": [
                            "https://swapi.dev/api/people/1/",
                            "https://swapi.dev/api/people/2/",
                        ],
                        "planets": [
                            "https://swapi.dev/api/planets/1/",
                        ],
                        "starships": [
                            "https://swapi.dev/api/starships/2/",
                        ],
                        "vehicles": [
                            "https://swapi.dev/api/vehicles/4/",
                        ],
                        "species": [
                            "https://swapi.dev/api/species/1/",
                        ],
                        "created": "2014-12-10T14:23:31.880000Z",
                        "edited": "2014-12-20T19:49:45.256000Z",
                        "url": "https://swapi.dev/api/films/1/"
                    }],
                    loading: false
                },
                filter: {
                    searchTerm: '',
                    sortKey: 'episode_id',
                    sortOrder: 'asc'
                }
            }
        })

        const { getByText, queryByText } = render(
            <Provider store={store}>
                <Router>
                    <Films />
                </Router>
            </Provider>
        )

        expect(queryByText('Loading films..')).not.toBeInTheDocument();
        expect(getByText('A New Hope')).toBeInTheDocument();

        const showPeopleButton = getByText(/show people/i);
        fireEvent.click(showPeopleButton);

        setTimeout(() => {
            expect(window.location.pathname).toBe('/films/4/people');
        }, 1000);
    });

    test('renders loading state', () => {
        const store = configureStore({
            reducer: {
                film: filmReducer,
                filter: filterReducer
            },
            preloadedState: {
                film: {
                    films: [],
                    loading: true
                },
                filter: {
                    searchTerm: '',
                    sortKey: 'episode_id',
                    sortOrder: 'asc'
                }
            }
        })

        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <Films />
                </Router>
            </Provider>
        )

        expect(getByText('Loading films..')).toBeInTheDocument();
    });
});
