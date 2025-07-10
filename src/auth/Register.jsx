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
    <div>
        <div className='flex flex-col items-center  justify-center'>
            <h1 className='text-black font-bold mb-8'>Register</h1>
            <div>
                <form onSubmit={handleSubmit} className='text-black'>
                    <p>name</p>
                    <input type="text"
                      name='name'
                      placeholder='name' 
                      autoComplete='off'
                      onChange={(e)=>setForm({...form, name:e.target.value})}
                      className='bg-gray-300 px-3 py-2 rounded mb-3 hover:bg-gray-200 outline-none font-semibold min-w-100 transition duration-300 '
                      />

                    <p>email</p>
                    <input type="email" 
                      name='Register_email' 
                      placeholder='example@gmail.com' 
                      autoComplete='new-email'
                      onChange={(e)=>setForm({...form, email:e.target.value})}
                      className='bg-gray-300 px-3 py-2 rounded mb-3 hover:bg-gray-200 outline-none font-semibold min-w-100 transition duration-300'/>

                    <p>password</p>
                    <input type="password" 
                      name='Register_password' 
                      placeholder='minimun 8 characters' 
                      autoComplete='new-password'
                      onChange={(e)=>setForm({...form, password:e.target.value})}
                      className='bg-gray-300 px-3 py-2 rounded mb-3 hover:bg-gray-200 outline-none font-semibold min-w-100 transition duration-300'/><br/>

                    <button type='submit' className='flex items-center justify-center text-white rounded-xl my-3 min-w-100 bg-[#0B2027] hover:bg-[#173f4f] py-2 px-4 transition duration-300 ' >Sign up</button>
                    <p>already have an account?  <span><a onClick={handleLogin} className=' hover:text-green-800 font-bold hover:underline'> login</a></span></p>
                 
                </form>
                

            </div>
        </div>

    </div>
    </AuthLayout>
  );
}

export default Register;