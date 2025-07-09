import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center h-screen bg-gray-200  w-screen ">

        <header className="bg-[#F5F5F5] flex absolute top-0 justify-between items-center h-[70px] w-screen px-5">
            <h2 className="font-bold text-2xl text-[#0B2027] font-[Florisha]">Trackmint</h2>
        
            <nav className="flex ">
                <Link
                    to="/login"
                    className="flex items-center justify-center text-white rounded-xl bg-[#0B2027] hover:bg-[#173f4f] py-2 px-6 mx-3"
                    >
                    <span>Login</span>
                </Link>
                <Link
                    to="/register"
                    className="flex items-center  justify-center text-black rounded-xl border border-2 border-[#0B2027] hover:border-[#173f4f] py-2 px-4"
                    >
                    <span>Sign up</span>
                </Link>
            </nav>
        </header>

    </div>

  );
};

export default Home;