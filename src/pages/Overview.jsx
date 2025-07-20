import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import toast from 'react-hot-toast';
import api from '../services/api'; // ✅ centralized axios instance with JWT

function Overview() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const totalBalance = totalIncome - totalExpense;

  useEffect(() => {
    fetchIncomes();
    fetchExpenses();
  }, []);

  const fetchIncomes = async () => {
    try {
      const res = await api.get('/api/incomes');
      const total = res.data.reduce((acc, i) => acc + i.amount, 0);
      setTotalIncome(total);
    } catch (err) {
      toast.error('Failed to fetch incomes');
      console.error('Income fetch error:', err);
    }
  };

  const fetchExpenses = async () => {
    try {
      const res = await api.get('/api/expenses');
      const total = res.data.reduce((acc, e) => acc + e.amount, 0);
      setTotalExpense(total);
    } catch (err) {
      toast.error('Failed to fetch expenses');
      console.error('Expense fetch error:', err);
    }
  };

  return (
    <Layout title="Overview">
      <section className="p-6">
        <div className="flex flex-col md:flex-row w-full justify-between gap-4 ">
          <div className="flex-1 bg-[#546673] text-white p-5 rounded-xl flex items-center justify-between">
            <span>
              total balance <br />
              <p className="text-3xl">{totalBalance.toFixed(2)}$</p>
            </span>
          </div>

          <div className="flex-1 bg-[#40798C] text-white p-5 rounded-xl flex items-center justify-between">
            <span>
              expenses <br />
              <p className="text-3xl">{totalExpense.toFixed(2)}$</p>
            </span>
          </div>

          <div className="flex-1 bg-[#546673] text-white p-5 rounded-xl flex items-center justify-between">
            <span>
              incomes <br />
              <p className="text-3xl">{totalIncome.toFixed(2)}$</p>
            </span>
          </div>
        </div>
      </section>

      <section className="p-6 pt-0">
        <div className="h-[15rem] bg-[#F5F5F5] dark:bg-[#181818] flex p-5 rounded-xl justify-center items-center text-gray-500">
          <p>Transaction list preview coming soon</p>
        </div>

        <div>
          <button className="text-white rounded-xl mt-6 mr-4 bg-[#40798C] transition hover:-translate-y-1 hover:scale-105 hover:bg-[#305B69] py-2 px-4">
            Add Expense
          </button>
          <button className="text-white rounded-xl mt-6 bg-[#40798C] transition hover:-translate-y-1 hover:scale-105 hover:bg-[#305B69] py-2 px-4">
            Add Income
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Overview;
