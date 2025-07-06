import HouseRealEstate from './Icons/HouseRealEstate';
import ExpensesIcon from './Icons/ExpensesIcon';
import IncomeIcon from './Icons/IncomeIcon';
import ProfileIcon from './Icons/ProfileIcon';
import ExitIcon from './Icons/ExitIcon';
import wallet from '../assets/wallet-filled-money-tool.png';
import SettingsIcon from './Icons/SettingsIcon';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const handleLogout = async () => {
    try {
      await axios.post(`${baseURL}/api/auth/logout`, {}, { withCredentials: true });
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err.response?.data || err.message);
      toast.error('Logout failed');
    }
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-[#0B2027] text-white w-64 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex flex-col items-center mb-8">
            <img src={wallet} alt="wallet icon" className="h-8 w-8 invert mb-2" />
            <h2 className="font-[Florisha] text-lg">TrackMint</h2>
          </div>

          <nav className="space-y-5 flex-1">
            <a href="/" className="flex items-center hover:text-gray-300">
              <HouseRealEstate className="mr-3" />
              <span>Overview</span>
            </a>
            <a href="/expenses" className="flex items-center hover:text-gray-300">
              <ExpensesIcon className="mr-3" />
              <span>Expenses</span>
            </a>
            <a href="/incomes" className="flex items-center hover:text-gray-300">
              <IncomeIcon className="mr-3" />
              <span>Incomes</span>
            </a>
            <a href="/profile" className="flex items-center hover:text-gray-300">
              <ProfileIcon className="mr-3" />
              <span>Profile</span>
            </a>
            <a href="/settings" className="flex items-center hover:text-gray-300">
              <SettingsIcon className="mr-3" />
              <span>Settings</span>
            </a>
          </nav>

          <button onClick={handleLogout} className="flex items-center hover:text-red-400 mt-auto">
            <ExitIcon className="mr-3" />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex bg-[#0B2027] text-white w-[15%] h-screen flex-col items-center p-4">
        <div className="flex flex-col items-center mb-8">
          <img src={wallet} alt="wallet icon" className="h-8 w-8 invert mb-2" />
          <h2 className="font-[Florisha] text-lg">TrackMint</h2>
        </div>

        <div className="flex flex-col flex-1 w-full">
          <nav className="space-y-5">
            <a href="/" className="flex items-center hover:text-gray-300">
              <HouseRealEstate className="mr-3" />
              <span>Overview</span>
            </a>
            <a href="/expenses" className="flex items-center hover:text-gray-300">
              <ExpensesIcon className="mr-3" />
              <span>Expenses</span>
            </a>
            <a href="/incomes" className="flex items-center hover:text-gray-300">
              <IncomeIcon className="mr-3" />
              <span>Incomes</span>
            </a>
            <a href="/profile" className="flex items-center hover:text-gray-300">
              <ProfileIcon className="mr-3" />
              <span>Profile</span>
            </a>
            <a href="/settings" className="flex items-center hover:text-gray-300">
              <SettingsIcon className="mr-3" />
              <span>Settings</span>
            </a>
          </nav>

          <button onClick={handleLogout} className="flex items-center hover:text-red-400 mt-auto">
            <ExitIcon className="mr-3" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
