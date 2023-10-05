import { Link } from "react-router-dom";
import Routes from "../utils/routes";

export default function NotFoundPage() {
    const mainPage = Routes.find(route => !!route.path);
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-white py-48">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <div className="text-indigo-500 font-bold text-7xl">
                            404
                        </div>

                        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                            This page does not exist
                        </div>

                        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                            The page you are looking for could not be found.
                        </div>

                        {mainPage?.path &&
                            <div className="text-gray-400 font-small text-sm md:text-xl lg:text-2xl mt-8">
                                Go to main page: <Link className="text-gray-500 font-bold" to={mainPage.path}>{mainPage.name}</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
