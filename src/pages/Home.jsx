import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='p-4 flex flex-col h-full w-full justify-center'>

        <nav className="space-y-5 flex-1">
                    <Link to="/register" className="flex bg-[#0B2027] items-center hover:text-gray-300">
                      <span>Sign up</span>
                    </Link>
        </nav>
        <nav className="space-y-5 flex-1">
                    <Link to="/login" className="flex bg-[#0B2027] items-center hover:text-gray-300">
                      <span>Login</span>
                    </Link>
        </nav>

    </div>
  );
};

export default Home;