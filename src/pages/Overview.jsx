import Layout from '../Components/Layout';
import axios from 'axios';
import { useEffect, useState } from "react";

function Overview() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const totalBalance = totalIncome - totalExpense;
  const baseURL = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    fetchIncomes();
    fetchExpenses();
  }, []);

  const fetchIncomes = async () => {
    const res = await axios.get(`${baseURL}/api/incomes`, { withCredentials: true });
    const total = res.data.reduce((acc, i) => acc + i.amount, 0);
    setTotalIncome(total);
  };

  const fetchExpenses = async () => {
    const res = await axios.get(`${baseURL}/api/expenses`, { withCredentials: true });
    const total = res.data.reduce((acc, e) => acc + e.amount, 0);
    setTotalExpense(total);
  };

  return (
    <Layout title="Overview">
      <section className="p-6">
        <div className="flex w-full justify-between">
          <div className="w-1/3 bg-[#546673] text-white mr-6 p-5 rounded-xl flex items-center">
            <span>
              total balance <br />
              <p className="text-3xl">{totalBalance.toFixed(2)}$</p>
            </span>
          </div>

          <div className="w-1/3 bg-[#40798C] text-white mr-6 p-5 rounded-xl flex items-center">
            <span>
              expenses <br />
              <p className="text-3xl">{totalExpense.toFixed(2)}$</p>
            </span>
          </div>

          <div className="w-1/3 bg-[#546673] text-white p-5 rounded-xl flex items-center">
            <span>
              incomes <br />
              <p className="text-3xl">{totalIncome.toFixed(2)}$</p>
            </span>
          </div>
        </div>
      </section>

      <section className="p-6 pt-0">
        <div className="h-[15rem] bg-[#F5F5F5] flex p-5 rounded-xl">
          <ul>
            <li>+500$: freelance</li>
            <li>-100$: groceries</li>
            <li>-290$: subscriptions</li>
          </ul>
        </div>

        <div>
          <button className="text-white rounded-xl mt-6 mr-6 bg-[#40798C] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#305B69] py-[0.6em] px-[1.2em]">
            add expense
          </button>
          <button className="text-white rounded-xl mt-6 mr-6 bg-[#40798C] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#305B69] py-[0.6em] px-[1.2em]">
            add income
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default Overview;
