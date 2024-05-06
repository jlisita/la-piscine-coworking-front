import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllCoworkingsPage from './pages/AllCoworkingsPage';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coworkings" element = {<AllCoworkingsPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
