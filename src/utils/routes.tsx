import { redirect } from "react-router-dom";
import { Route } from "../models/Route";
import About from "../pages/About";

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
]

export default Routes;