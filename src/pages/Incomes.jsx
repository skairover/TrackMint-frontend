import{ useEffect } from 'react';
import Layout from '../Components/Layout'

import Form from '../Components/Form'
import { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast'
import deleteIcon from '../assets/delete.png'


function Incomes() {
  const [showForm, setShowForm] = useState(false)
  const [incomes, setIncomes] = useState([])
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
   useEffect(() => {
    
      fetchIncomes();

}, []);



const fetchIncomes = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/incomes`, {
      withCredentials: true // ✅ this sends the cookie
    });
    setIncomes(res.data);
    
  } catch (err) {
    console.error("Fetch failed", err.response?.data || err.message);
    toast.error('Failed to fetch incomes');
  }
};


 
  

  const handleAddIncome = async (income) => {
  try {
    const res = await axios.post(`${baseURL}/api/incomes`, income, {
      withCredentials: true
    });
    
    setIncomes([...incomes, res.data]);
  } catch (err) {
    console.error("Add expense error:", err.response?.data || err.message);
    toast.error("Failed to add income");
  }
};

const handleDeleteIncome = async (id) => {
  try {
    await axios.delete(`${baseURL}/api/incomes/${id}`, {
      withCredentials: true
    });
    setIncomes(incomes.filter((inc) => inc._id !== id));
    toast.success('Income deleted');
  } catch (err) {
    console.error('Delete failed', err.response?.data || err.message);
    toast.error('Failed to delete income');
  }
};

 





  return (
  <Layout title="Incomes">
    <main className="flex-1 text-black min-h-full bg-gray-200 relative px-4 sm:px-6 py-6">
      {showForm && (
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-20">
          <div className="w-[90%] md:w-[50%] lg:w-[30%] bg-white rounded-xl shadow-xl z-50 p-4">
            <Form
              type="income"
              onAdd={(income) => {
                handleAddIncome(income);
                setShowForm(false);
              }}
            />
            <button
              onClick={() => setShowForm(false)}
              className="mt-2 text-red-500 py-[0.6em] px-[1.2em]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowForm(true)}
        className="text-white font-black z-50 mb-6 mr-6 bg-[#40798C] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#305B69] rounded-full w-12 h-12 flex items-center justify-center fixed right-4 bottom-4 sm:right-8 sm:bottom-8"
      >
        +
      </button>

      <section className="mt-4">
        {incomes.length === 0 ? (
          <p className="text-gray-600">No incomes yet.</p>
        ) : (
          <ul>
            {incomes.map((inc) => (
              <li
                key={inc._id}
                className="bg-white rounded p-3 mb-2 shadow border-green-500 border-r-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
              >
                <span>
                  <strong>
                    {inc.amount} {inc.currency}
                  </strong>{' '}
                  – {inc.category}
                </span>
                <span className="font-light text-sm flex items-center">
                  {String(day).padStart(2, '0')}-
                  {String(month).padStart(2, '0')}-
                  {year}
                  <img
                    src={deleteIcon}
                    className="w-5 h-5 ml-3 cursor-pointer"
                    onClick={() => handleDeleteIncome(inc._id)}
                  />
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  </Layout>
);

  
}

export default Incomes;