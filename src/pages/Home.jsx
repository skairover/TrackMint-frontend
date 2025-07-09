import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='p-4 flex flex-col h-full'>

        <nav className="space-y-5 flex-1">
                    <Link to="/register" className="flex items-center hover:text-gray-300">
                      <span>Sign up</span>
                    </Link>
        </nav>
        <nav className="space-y-5 flex-1">
                    <Link to="/login" className="flex items-center hover:text-gray-300">
                      <span>Login</span>
                    </Link>
        </nav>

    </div>
  );
};

export default Home;