import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { login } from '../services/authServices';

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
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Minimum 8 characters"
            autoComplete="current-password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button type="submit">Login</button>
          <p>
            Don't have an account? <a onClick={handleRegister}>Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
