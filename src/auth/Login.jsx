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
      <div className='flex flex-col items-center text-black  justify-center'>
        <h1 className='text-black font-bold mb-8'>Login</h1>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className='bg-gray-300 px-3 py-2 rounded mb-3 hover:bg-gray-200 outline-none font-semibold min-w-100 transition duration-300 '

          />

          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Minimum 8 characters"
            autoComplete="current-password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className='bg-gray-300 px-3 py-2 rounded mb-3 hover:bg-gray-200 outline-none font-semibold min-w-100 transition duration-300 '
          />

          <button type="submit" className='flex items-center justify-center text-white rounded-xl my-3 min-w-100 bg-[#0B2027] hover:bg-[#173f4f] py-2 px-4 transition duration-300 '>Login</button>
          <p>
            Don't have an account? <a onClick={handleRegister} className=' hover:text-green-800 font-bold hover:underline'>Sign up</a>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
