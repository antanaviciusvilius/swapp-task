import { redirect } from "react-router-dom";
import { Route } from "../models/Route";
import About from "../pages/About";
import Films from "../pages/Films";

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
    },
]

export default Routes;