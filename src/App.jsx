import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import './App.css'
import { ShareScreen } from './pages/ShareScreen'

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:referenceId" element={<ShareScreen />} />
      </Routes>
    </div>
  )
}

export default App
