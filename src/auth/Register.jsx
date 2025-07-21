import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {register }from '../services/authServices'
import AuthLayout from '../Components/AuthLayout';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({name:'', email:'', password:''});

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await register(form);
    const token = res.data.token;

    // Store JWT
    localStorage.setItem('token', token);

    toast.success('Registered successfully');
    navigate('/overview');
  } catch (err) {
    toast.error(err.response?.data?.message || err.response?.data?.error || 'Something went wrong');
  }
};

  const handleLogin = () => {
    navigate('/login')
  }
  return (
<AuthLayout>
  <div className="w-full  max-w-md bg-white p-6 rounded-lg shadow-md dark:bg-[#121212]">
    <h1 className="text-black dark:text-white text-2xl font-bold mb-6 text-center">Register</h1>

    <form onSubmit={handleSubmit} className="text-black dark:text-white">
      <label className="block mb-2 font-semibold">Name</label>
      <input
        type="text"
        name="name"
        placeholder="name"
        autoComplete="off"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full bg-gray-200 text-black px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500 transition hover:bg-gray-300 dark:hover:bg-gray-300"
      />

      <label className="block mb-2 font-semibold">Email</label>
      <input
        type="email"
        name="Register_email"
        placeholder="example@gmail.com"
        autoComplete="new-email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full bg-gray-200 text-black px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500 transition hover:bg-gray-300 dark:hover:bg-gray-300"
      />

      <label className="block mb-2 font-semibold">Password</label>
      <input
        type="password"
        name="Register_password"
        placeholder="minimum 8 characters"
        autoComplete="new-password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full bg-gray-200 text-black px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500 transition hover:bg-gray-300 dark:hover:bg-gray-300"
      />

      <button className="w-full bg-[#48C072] dark:hover:bg-[#6ecd8f] text-white dark:text-black py-2 rounded-lg hover:bg-[#32864f] dark:bg-[#48C072] dark:hover:bg-[#3D7D85] transition duration-300 font-semibold">
        Sign Up
      </button>

      <p className="mt-4 text-center">
        Already have an account?{' '}
        <a
          onClick={handleLogin}
          className="text-[#48C072] font-semibold ml-1 cursor-pointer hover:underline"
        >
          Login
        </a>
      </p>
    </form>
  </div>
</AuthLayout>



);


}

export default Register;