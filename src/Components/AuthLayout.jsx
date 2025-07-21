
import Chart2 from '../assets/Chart2.png';
import { FaArrowTrendUp } from "react-icons/fa6";
const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-[#FDFFFD] dark:bg-[#121212] overflow-hidden">
      
      {/* LEFT SECTION: Form + Headings */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 py-10">
        {/* Branding + Intro */}
        <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B2027] dark:text-[#E5E7EB]">
          Welcome to <span className="text-[#48C072] dark:text-[#48C072]">TrackMint</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Track your finances the smart way
        </p>

        </div>

        {/* Form content */}
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* RIGHT SECTION: Decorative Chart */}
        <div className="hidden md:flex flex-1 relative justify-center max-w-xl items-center overflow-hidden bg-[#E6F5F2] dark:bg-[#0B2027]">
      {/* Floating Notification */}
      <div className="absolute top-[10%] shadow-xl z-2 rounded-xl bg-white dark:bg-[#1E1E1E] w-86 text-black dark:text-white flex items-center h-16">
        <span className="flex items-center justify-center h-16 px-3 mr-5">
          <FaArrowTrendUp color="green" size="24px" />
        </span>
        <div className="flex flex-col justify-center items-start">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Track your income and expenses
          </span>
          <span className="font-bold text-[#0B2027] dark:text-[#E5E7EB]">
            $430,000
          </span>
        </div>
      </div>

      {/* Floating Card Shadow */}
      <div className="absolute top-[-15%] right-[30%] w-72 h-48 bg-[#077A7D] dark:bg-[#0D3E3E] rounded-3xl blur-[2px]"></div>
      {/* Border Box */}
      <div className="absolute bottom-[5%] right-[-10%] w-72 h-48 border-10 border-[#7AE2CF] dark:border-[#53B9AC] rounded-3xl blur-[2px]"></div>
      <div className="absolute bottom-[20%] right-[80%] w-64 h-64 bg-[#7af593] dark:bg-[#3B9E71] rounded-full blur-[2px]"></div>

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
