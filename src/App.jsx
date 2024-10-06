import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import './App.css'
import { ShareScreen } from './pages/ShareScreen'
import { Recommend } from './pages/Recommend'
import { AboutUs } from './pages/AboutUs'

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recomendar" element={<Recommend />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/:referenceId" element={<ShareScreen />} />
      </Routes>
    </div>
  )
}

export default App
