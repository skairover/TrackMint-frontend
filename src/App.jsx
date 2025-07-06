import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./auth/Register";
import Overview from "./pages/Overview";
import Login from "./auth/Login"
import Profile from "./pages/Profile"
import Expenses from "./pages/Expenses"
import Incomes from "./pages/Incomes"
import Settings from "./pages/Settings"
import { Toaster } from 'react-hot-toast';
function App() {
  return( 
   
  <BrowserRouter>
   <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/incomes" element={<Incomes/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </BrowserRouter>)
}

export default App
