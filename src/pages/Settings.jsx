import Layout from '../Components/Layout';
import { useState, useEffect } from 'react';

function Settings() {

  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem("currency") || "USD"; 
  });
  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);


  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Layout title="Settings">
    <div className=' flex-1 text-black'>
      
      <main className='h-full bg-gray-200 dark:bg-[#121212] '>
          <select
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}          
            className="p-3 bg-white dark:bg-[#181818] dark:text-white rounded-xl border border-gray-300 m-3"
          >
            <option className='dark:bg-gray-800' value="">Select default Currency</option>
            <option className='dark:bg-gray-800' value="USD">USD</option>
            <option className='dark:bg-gray-800' value="EU">EU</option>
            <option className='dark:bg-gray-800' value="YEN">YEN</option>
            <option className='dark:bg-gray-800'value="DZD">DZD</option>
          </select>
      </main>
    </div>
    </Layout>
    </div>
    
    
  );
}

export default Settings;
