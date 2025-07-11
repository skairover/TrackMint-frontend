import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import toast from 'react-hot-toast';
import deleteIcon from '../assets/delete.png';
import { getIncomes, createIncome, deleteIncome } from '../services/incomeService';

function Incomes() {
  const [showForm, setShowForm] = useState(false);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fetchIncomes();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : '';
  }, [showForm]);

  const fetchIncomes = async () => {
  try {
    const data = await getIncomes();
    if (!Array.isArray(data)) throw new Error('Expected array but got ' + typeof data);
    setIncomes(data);
  } catch (err) {
    console.error('Error fetching incomes:', err.message || err);
    toast.error('Failed to load incomes');
  }
};


  const handleAddIncome = async (income) => {
    try {
      const newIncome = await createIncome(income);
      setIncomes((prev) => [...prev, newIncome]);
    } catch (err) {
      console.error("Add income error:", err.response?.data || err.message);
      toast.error("Failed to add income");
    }
  };

  const handleDeleteIncome = async (id) => {
    try {
      await deleteIncome(id);
      setIncomes((prev) => prev.filter((inc) => inc._id !== id));
      toast.success('Income deleted');
    } catch (err) {
      console.error('Delete failed', err.response?.data || err.message);
      toast.error('Failed to delete income');
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
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
                    <strong>{inc.amount} {inc.currency}</strong> – {inc.category}
                  </span>
                  <span className="font-light text-sm flex items-center">
                    {formatDate(inc.createdAt)}
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
