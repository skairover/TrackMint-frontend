import { useEffect, useState } from 'react';
import { deleteExpense } from '../services/expenseService';
import Layout from '../Components/Layout';

import Form from '../Components/Form';
import toast from 'react-hot-toast';
import { getExpenses, createExpense } from '../services/expenseService';
import { AiOutlineDelete } from "react-icons/ai";

function Expenses() {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
 

  useEffect(() => {
    fetchExpenses();
    if (showForm) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  }, [showForm]);

 const fetchExpenses = async () => {
  try {
    const data = await getExpenses();
    if (!Array.isArray(data)) throw new Error("Expected array, got " + typeof data);
    setExpenses(data);
  } catch (err) {
    console.error("Fetch failed", err.message || err);
    toast.error('Failed to fetch expenses');
  }
};

  const handleAddExpense = async (expense) => {
    try {
      const newExpense = await createExpense(expense);
      setExpenses(prev => [...prev, newExpense]);
    } catch (err) {
      console.error("Add expense error:", err.message || err);
      toast.error("Failed to add expense");
    }
  };


  const handleDeleteExpense = async (id) => {
  try {
    await deleteExpense(id);
    setExpenses(expenses.filter((exp) => exp._id !== id));
    toast.success('Expense deleted');
  } catch (err) {
    console.error('Delete failed', err.response?.data || err.message);
    toast.error('Failed to delete expense');
  }
};



  return (
    
     <Layout title="Expenses" >
     
        
        <main className="flex-1 text-black dark:text-white min-h-full bg-gray-200 dark:bg-[#121212] relative px-4 sm:px-6 py-6">
          {showForm && (
            <div className="absolute inset-0 bg-black/40 dark:bg-black/40 flex justify-center items-center z-20">
              <div className="w-[90%] md:w-[50%] lg:w-[30%] bg-white dark:bg-[#181818] rounded-xl shadow-xl z-50">
                <Form
                  type={'expense'}
                  onAdd={(expense) => {
                    handleAddExpense(expense);
                    setShowForm(false);
                  }}
                />
                
                <button
                  onClick={() => setShowForm(false)}
                  className="mt-2 text-red-300 py-[0.6em] px-[1.2em]"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowForm(true)}
            className="text-white dark:text-black font-black z-50 mb-6 mr-6 bg-[#40798C] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#305B69] rounded-full w-12 h-12 flex items-center justify-center fixed right-4 bottom-4 sm:right-8 sm:bottom-8"
          >
            +
          </button>

          <section className="mt-4 ">
            {expenses.length === 0 ? (
              <p className="text-gray-300">No expenses yet.</p>
            ) : (
              <ul>
                {expenses.map((exp) => (
                  <li
                    key={exp._id}
                    className="bg-white dark:bg-[#2b2b2b] rounded p-3 mb-2 shadow border-red-500 border-r-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                  >
                    <span>
                      <p className='bg-red-300 w-20 text-red-900 rounded-xl px-2 py-1 mb-1 flex justify-center items-center text-xs'>{exp.category}</p>
                      <strong className='ml-1'>{exp.amount} {exp.currency}</strong>
                    </span>
                    <span className='font-light text-sm flex'> 
                      {formatDate(exp.createdAt)}
                      <AiOutlineDelete className= 'w-9 h-9 ml-3 cursor-pointer hover:bg-red-200 dark:hover:bg-red-900 transition delay-150 duration-300 ease-in-out rounded-xl p-2'
                        onClick={()=>handleDeleteExpense(exp._id)}/>
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

export default Expenses;
