import { useState } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../utils/routes';

function Sidebar() {
    const [sidebarOpened, setSidebarOpened] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpened(!sidebarOpened);
    }
    return (
        <>
            <span
                className="fixed text-white text-4xl top-5 left-4 cursor-pointer"
                onClick={toggleSidebar}
            >
                <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md sm:hidden"></i>
            </span>
            <div
                className={
                    `fixed sm:relative sm:min-h-screen sm:block w-screen top-0 bottom-0 sm:left-0 p-2 sm:w-[300px] overflow-y-auto text-center bg-gray-900 
                    ${sidebarOpened ? 'block' : 'hidden sm:block'}`
                }
            >
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <i
                            className="bi bi-x text-3xl cursor-pointer sm:hidden"
                            onClick={toggleSidebar}
                        ></i>
                        <div className='ml-auto sm:ml-0 flex items-center'>
                            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Star wars</h1>
                        </div>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                {Routes.map(route =>
                    route.path && <Link
                        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        to={route.path}
                    >
                        <i className={"bi " + route.icon}></i>
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">{route.name}</span>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Sidebar