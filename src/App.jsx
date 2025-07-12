import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./auth/Register";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Login from "./auth/Login";
import Profile from "./pages/Profile";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import Settings from "./pages/Settings";
import { Toaster } from 'react-hot-toast';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>TrackMint – Smart Expense Tracking</title>
        <meta name="description" content="TrackMint helps you manage income and expenses efficiently with a clean dashboard and modern UI." />
        <meta name="keywords" content="expense tracker, budget app, money management, TrackMint" />
        <meta name="author" content="Sofiane" />
        <meta property="og:title" content="TrackMint" />
        <meta property="og:description" content="Smart Expense Tracking App" />
        <meta property="og:image" content="/trackmint-preview.png" />
      </Helmet>

      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
