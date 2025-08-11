import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import toast from 'react-hot-toast';
import api from '../services/api';
import YearlyBarChart from '../Components/YearlyBarChart';

function Overview() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const totalBalance = totalIncome - totalExpense;

  useEffect(() => {
    const loadData = async () => {
      await fetchIncomes();
      await fetchExpenses();
    };
    loadData();
  }, []);

  const fetchIncomes = async () => {
    try {
      const res = await api.get('/api/incomes');
      const total = res.data.reduce((acc, i) => acc + i.amount, 0);
      setTotalIncome(total);
      setIncomes(res.data);
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
      setExpenses(res.data);
    } catch (err) {
      toast.error('Failed to fetch expenses');
      console.error('Expense fetch error:', err);
    }
  };

  



  return (
    <Layout title="Overview">
      <section className="p-6">
        {/* Summary Cards */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
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
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 my-2 mx-5"> 
          <button className=" text-black dark:text-white rounded-xl border-2 border-[#40798C] hover:border-[#305B69] py-2 px-4 ">
            Add Income
          </button>
          <button className=" text-black dark:text-white rounded-xl border-2 border-[#40798C] hover:border-[#305B69] py-2 px-4 ">
            Add Expense
          </button>

        </div>
      {/* Charts */}
      <section className="p-6">
        <div className="flex flex-col lg:flex-row gap-4 bg-[#F5F5F5] dark:bg-[#181818] rounded-xl p-4 items-center justify-evenly">
          <div className="w-full lg:w-1/2">
            <p className='text-zinc-400 mb-6'>Last Year Incomes</p>
            <YearlyBarChart
              items={incomes}
              backgroundColor={['rgba(75, 192, 192, 0.6)',  'rgba(227, 255, 255, 0.6)']}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className='text-zinc-400 mb-6'>Last Year Expenses</p>
            <YearlyBarChart
              items={expenses}
              backgroundColor={['rgba(255, 99, 132, 0.6)', 'rgba(255, 227, 227, 0.6)']}
            />
          </div>
        </div>


      </section>

    </Layout>
  );
}

export default Overview;
