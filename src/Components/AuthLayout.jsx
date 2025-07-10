
import Chart2 from '../assets/Chart2.png';
import { FaArrowTrendUp } from "react-icons/fa6";
const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row bg-[#FDFFFD]">
      
      {/* LEFT SECTION: Form + Headings */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 py-10">
        {/* Branding + Intro */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B2027]">Welcome to <span className="text-[#40798C]">TrackMint</span></h1>
          <p className="text-gray-600 mt-2">Track your finances the smart way</p>
        </div>

        {/* Form content */}
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* RIGHT SECTION: Decorative Chart */}
      <div className="hidden md:flex flex-1 relative justify-center max-w-xl items-center overflow-hidden bg-[#E6F5F2]">
        {/*Floating Notification */}


      <div className="absolute top-[10%] shadow-xl z-2 rounded-xl bg-white w-86 text-black flex items-center  h-16">
        <span className="flex items-center justify-center h-16 px-3 mr-5">
          <FaArrowTrendUp color="green" size="24px" />
        </span>
        <div className='flex flex-col justify-center items-start'>
          <span className="text-sm font-medium text-gray-700">
          Track your income and expenses
          </span>
          <span className="font-bold text-[#0B2027] ">$430,000</span>
        </div>
      </div>


        {/* Floating Card Shadow */}
        <div className="absolute top-[-15%] right-[30%] w-72 h-48 bg-[#077A7D] rounded-3xl blur-[2px]"></div>
        {/* Border Box */}
        <div className="absolute bottom-[5%] right-[-10%] w-72 h-48 border-10 border-[#7AE2CF] rounded-3xl blur-[2px]"></div>
        <div className='absolute bottom-[20%] right-[80%] w-64 h-64 bg-[#7af593] rounded-full blur-[2px]'></div>
        {/* Chart Image */}
        <img
          src={Chart2}
          alt="TrackMint Chart Preview"
          className="z-10 absolute bottom-[10%] w-[350px] rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
