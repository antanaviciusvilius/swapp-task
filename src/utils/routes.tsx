import { redirect } from "react-router-dom";
import { Route } from "../models/Route";
import About from "../pages/About";
import FilmPeople from "../pages/FilmPeople";
import Films from "../pages/Films";

const filmRoutes: Route[] = [
    {
        path: ":film",
        element: <FilmPeople />
    },
]

const Routes: Route[] = [
    {
        index: true,
        loader: () => redirect('/about'),
    },
    {
        path: "about",
        element: <About />,
        name: "About",
        icon: 'bi-info-circle-fill',
    },
    {
        path: "films",
        element: <Films />,
        name: "Films",
        icon: 'bi-film',
        children: filmRoutes,
    },
]

export default Routes;