import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import FilmPeople from './pages/FilmPeople';
import Films from './pages/Films';
import { fetchFilm } from './store/features/filmsSlice';
import { useAppDispatch } from './store/store';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilm());
  })
  return (
    <main className="flex flex-1">
      <Sidebar />
      <section className="flex flex-col px-5 pt-20 pb-12 md:p-8 flex-1 h-full overflow-auto max-w-[100vw] md:max-w-[calc(100vw-200px)]">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/films" element={<Films />}>
            <Route path=":film" element={<FilmPeople />} />
          </Route>
        </Routes>
      </section>
    </main>
  )
}

export default App
