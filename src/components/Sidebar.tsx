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
                role="sidebar-hamburger"
                className="fixed text-white text-4xl top-5 left-5 cursor-pointer"
                onClick={toggleSidebar}
            >
                <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md md:hidden"></i>
            </span>
            <div
                role="navigation"
                className={
                    `fixed md:relative md:min-h-screen md:block w-screen top-0 bottom-0 
                    md:left-0 p-2 md:w-[200px] overflow-y-auto text-center bg-gray-900 
                    ${sidebarOpened ? 'block' : 'hidden md:block'}`
                }
            >
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <i
                            role="button"
                            className="bi bi-x text-3xl cursor-pointer md:hidden"
                            onClick={toggleSidebar}
                        ></i>
                        <div className='ml-auto md:ml-0 flex items-center'>
                            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Star wars</h1>
                        </div>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                {Routes.map(route =>
                    route.path && <Link
                        key={route.name}
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