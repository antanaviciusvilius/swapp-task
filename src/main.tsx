import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import NotFoundPage from './pages/NotFoundPage.tsx';
import { store } from './store/store.ts';
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
