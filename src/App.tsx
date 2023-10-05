import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <main className="flex">
      <Sidebar />
      <section className="px-5 py-32 sm:p-20 flex-1 h-full overflow-auto">
        <Outlet />
      </section>
    </main>
  )
}

export default App
