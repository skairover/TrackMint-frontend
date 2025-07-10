import { Link } from 'react-router-dom';
import dashboard from '../assets/Dashboard.png'
const Home = () => {
  return (
  <div className="flex flex-col h-screen w-screen ">
    {/* Header: fixed height, no padding at top */}
    <header className="bg-[#FDFFFD] flex justify-between items-center h-[70px] w-full px-5">
      <h2 className="font-bold text-2xl text-[#0B2027] font-[Florisha]">Trackmint</h2>

      <nav className="flex">
        <Link
          to="/login"
          className="flex items-center justify-center text-black rounded-xl border-2 border-[#0B2027] hover:border-[#173f4f] py-2 px-6 mx-3 transition duration-300"
        >
          <span>Login</span>
        </Link>
        <Link
          to="/register"
          className="flex items-center justify-center text-white rounded-xl bg-[#0B2027] hover:bg-[#173f4f] py-2 px-4 transition duration-300"
        >
          <span>Sign up</span>
        </Link>
      </nav>
    </header>

    {/* Main takes remaining height */}
    <main className="flex-1 relative overflow-hidden z-0 bg-[#F6FFF7]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6FFF7] to-transparent z-[-5]" />
        <img 
        src={dashboard} 
        alt="dashboard-image" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] -z-10 rounded-3xl opacity-40 blur-[1px]"
        />   
        <section className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex flex-col items-center justify-between h-[25rem]">
            <div className="text-center">
                <h1 className="mb-3 text-black  leading-tight text-4xl sm:text-5xl font-bold">
                    <span>Tired of Wondering</span>
                    <br />
                    <span>
                        Where Your <strong>Paycheck</strong> Went?
                    </span>
                </h1>
                <p className="mb-3 text-[#363737] text-base sm:text-lg text-gray-600">
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