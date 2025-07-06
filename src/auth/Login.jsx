import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import {login} from '../services/authServices';


function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({email:'', password:''});

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // eslint-disable-next-line no-unused-vars
    const res = await login(form); // capture the response
    toast.success('Logged in successfully');
    navigate('/');
  } catch (err) {
    const msg = err.response?.data?.error || 'Login failed. Try again.';
    toast.error(msg)
  }

  }
  const handleRegister = () => {
    navigate('/register')
  }
  return (
    <div>
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    

                    <p>email</p>
                    <input type="email" 
                      name='Register_email' 
                      placeholder='example@gmail.com' 
                      autoComplete='new-email'
                      onChange={(e)=>setForm({...form, email:e.target.value})}/>

                    <p>password</p>
                    <input type="password" 
                      name='Register_password' 
                      placeholder='minimun 8 characters' 
                      autoComplete='new-password'
                      onChange={(e)=>setForm({...form, password:e.target.value})}/>

                    
                      <button type='submit' >login</button>
                    <p>don't have an account? <a onClick={handleRegister}>Sign up</a></p>
                 

                </form>
            </div>
        </div>

    </div>
  );
}

export default Login;