import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Routes from './utils/routes.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: Routes,
    errorElement: <NotFoundPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
