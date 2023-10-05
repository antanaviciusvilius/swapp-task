import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import { fetchFilm } from './store/features/filmsSlice';
import { useAppDispatch } from './store/store';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilm());
  })
  return (
    <main className="flex">
      <Sidebar />
      <section className="px-5 py-32 sm:p-8 flex-1 h-full overflow-auto max-w-[100vw] sm:max-w-[calc(100vw-200px)]">
        <Outlet />
      </section>
    </main>
  )
}

export default App
