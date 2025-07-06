import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {register }from '../services/authServices'
import AuthLayout from '../Components/AuthLayout';

function Register() {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [form, setForm] = useState({name:'', email:'', password:''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
          await register(form)
          toast.success('registered successfully')
          navigate('/login');
    }catch(err){
    toast.error(err.response.data.message || err.response.data.error || 'Something went wrong');
    }

  }
  const handleLogin = () => {
    navigate('/login')
  }
  return (
    <AuthLayout>
    <div>
        <div>
            <h1>Register</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>user name</p>
                    <input type="text"
                      name='name'
                      placeholder='name' 
                      autoComplete='off'
                      onChange={(e)=>setForm({...form, name:e.target.value})}/>

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

                    <button type='submit' >Sign up</button>
                    <p>already have an account? <a onClick={handleLogin}>login</a></p>
                 
                </form>
                <p className="my-2 text-center text-sm text-gray-500">OR</p>

                <hr />
                <button
                  type="button"
                  onClick={() => window.location.href = `${baseURL}/api/auth/google`}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Sign up with Google
                </button>

            </div>
        </div>

    </div>
    </AuthLayout>
  );
}

export default Register;