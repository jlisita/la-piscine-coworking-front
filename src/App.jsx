import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllCoworkingsPage from './pages/AllCoworkingsPage';
import CoworkingsDetailPage from './pages/CoworkingsDetailPage';
import LoginPage from './pages/LoginPage';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coworkings" element = {<AllCoworkingsPage/>} />
          <Route path="/coworkings/details/:id" element = {<CoworkingsDetailPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
