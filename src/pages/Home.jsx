import { Link } from 'react-router-dom';
import My3DComponent from '../Components/My3dComponenet';

const Home = () => {
  return (
  <div className="flex flex-col h-screen w-screen ">
    {/* Header: fixed height, no padding at top */}
    <header className="bg-[#FDFFFD] dark:bg-[#181818] flex justify-between items-center h-[70px] w-full px-5">
      <h2 className="font-bold text-2xl text-[#0B2027] dark:text-white font-[Florisha]">Trackmint</h2>

      <nav className="flex">
        <Link
          to="/login"
          className="flex items-center justify-center text-black dark:text-white rounded-xl border-2 border-[#48C072] hover:border-[#39995A] py-2 px-6 mx-3 transition duration-300"
        >
          <span>LogIn</span>
        </Link>
        <Link
          to="/register"
          className="flex items-center justify-center text-white font-semibold dark:text-black rounded-xl bg-[#48C072] hover:bg-[#39995A] py-2 px-4 transition duration-300"
        >
          <span>SignUp</span>
        </Link>
      </nav>
    </header>

    {/* Main takes remaining height */}
    <main className="flex-1 relative overflow-hidden z-0 bg-[#121212]">
        <div className="absolute inset-0 z-[-5]" />
        <My3DComponent/>
        <section className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex flex-col items-center justify-between h-[25rem]">
            <div className="text-center">
                <h1 className="mb-3 text-black dark:text-white leading-tight text-4xl sm:text-5xl font-bold">
                    <span>Tired of Wondering</span>
                    <br />
                    <span>
                        Where Your <strong className='text-[#48C072]/80'>Paycheck</strong> Went?
                    </span>
                </h1>
                <p className="mb-3 text-[#363737] dark:text-gray-400 text-base sm:text-lg text-gray-600">
                    <span>Track your spending effortlessly and finally see where every penny goes</span>
                    <br />
                    <span>all in one clean, simple dashboard.</span>
                </p>
            </div>
            <Link to="/register">
                <button className="py-2 px-4 mb-3 bg-[#48C072] rounded-xl font-bold text-black text-xl hover:bg-[#39995A] hover:scale-105 transition duration-300 shadow-md hover:shadow-lg">
                Start Tracking for Free
                </button>
            </Link>
        </div>
      </section>
    </main>
  </div>
);

};

export default Home;