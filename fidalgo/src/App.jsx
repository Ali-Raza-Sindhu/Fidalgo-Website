import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Password from "./pages/Password.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/password" element={<Password/>} />
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
