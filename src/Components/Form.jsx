import React, { useState } from 'react';

function Form({ onAdd, type }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !currency) return;
    onAdd({ amount, category, currency });
    setAmount('');
    setCategory('');
    setCurrency('USD');
  };

  const expenseCategories = [
    'Rent', 'Food', 'Transport', 'Entertainment', 'Bills', 'Health', 'Other',
  ];

  const incomeCategories = [
    'Salary', 'Freelancing', 'Gift', 'Investment', 'Other',
  ];

  const categories = type === 'income' ? incomeCategories : expenseCategories;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col dark:text-black">
      <input
        type="number"
        placeholder="Amount"
        name="amount"
        value={amount}
        className="p-3 bg-white dark:bg-gray-300  rounded-xl border border-gray-300 m-3"
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-3 bg-white dark:bg-gray-300 rounded-xl border border-gray-300 m-3"
      >
        <option value="">Select category</option>
        {categories.map((cat) => (
          <option className='dark:bg-gray-300' key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select
        name="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="p-3 bg-white dark:bg-gray-300 rounded-xl border border-gray-300 m-3"
      >
        <option className='dark:bg-gray-300' value="">Select Currency</option>
        <option className='dark:bg-gray-300' value="USD">USD</option>
        <option className='dark:bg-gray-300' value="EU">EU</option>
        <option className='dark:bg-gray-300' value="YEN">YEN</option>
        <option className='dark:bg-gray-300'value="DZD">DZD</option>
      </select>

      <button
        type="submit"
        className="bg-[#0B2027]  dark:bg-[#40798C] dark:hover:bg-[#0B2027] transition delay-150 duration-300 ease-in-out text-white rounded-xl m-3 py-[0.6em] px-[1.2em]"
      >
        Add {type}
      </button>
    </form>
  );
}

export default Form;
