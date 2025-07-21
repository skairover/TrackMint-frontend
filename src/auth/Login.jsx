import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { login } from '../services/authServices';
import AuthLayout from '../Components/AuthLayout';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      const token = res.data.token;

      localStorage.setItem('token', token);

      toast.success('Logged in successfully');
      navigate('/overview');
    } catch (err) {
      const msg = err.response?.data?.error || 'Login failed. Try again.';
      toast.error(msg);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    
<AuthLayout>
  <div className="h-full flex items-center justify-center px-4 bg-white dark:bg-[#121212] text-black dark:text-white">
    <div className="w-full  max-w-md p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          autoComplete="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-gray-200 hover:bg-gray-300 dark:text-black px-3 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#0B2027] transition duration-300"
        />

        <label className="block mb-2 font-semibold">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Minimum 8 characters"
          autoComplete="current-password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-300 dark:text-black px-3 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#0B2027] transition duration-300"
        />

        <button
          type="submit"
          className="w-full bg-[#48C072] dark:bg-[#48C072] dark:hover:bg-[#6ecd8f] dark:text-black text-white py-2 rounded-lg hover:bg-[#32864f] transition duration-300 font-semibold"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?
          <span
            onClick={handleRegister}
            className="text-green-700 dark:text-[#48C072] font-semibold ml-1 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  </div>
</AuthLayout>


  );
}

export default Login;
