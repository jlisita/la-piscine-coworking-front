import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import AllCoworkingsPage from './pages/public/AllCoworkingsPage';
import CoworkingsDetailPage from './pages/public/CoworkingsDetailPage';

import LoginPage from './pages/public/LoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminAllCoworkingsPage from './pages/admin/AdminAllCoworkingsPage';
import AdminCreateCoworkingPage from './pages/admin/AdminCreateCoworkingPage';
import AdminUpdateCoworkingPage from './pages/admin/AdminUpdateCoworkingPage';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coworkings" element = {<AllCoworkingsPage/>} />
          <Route path="/coworkings/details/:id" element = {<CoworkingsDetailPage/>} />

          <Route path="/login" element={<LoginPage/>} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/coworkings" element={<AdminAllCoworkingsPage />} />
          <Route path="/admin/coworkings/create" element={<AdminCreateCoworkingPage />} />
          <Route path="/admin/coworkings/:id/update" element={<AdminUpdateCoworkingPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
