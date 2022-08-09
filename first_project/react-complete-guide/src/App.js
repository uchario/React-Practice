import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    name: 'e1',
    title: 'Mercedes Benz',
    amount: 94.12,
    date: new Date(2018, 1, 12)
  },
  {
    name: 'e2',
    title: 'Range Rover',
    amount: 78.12,
    date: new Date(2019, 2, 12)
  },{
    name: 'e3',
    title: 'Lamborghini',
    amount: 65.12,
    date: new Date(2020, 6, 12)
  },
  {
    name: 'e4',
    title: 'Ferrari',
    amount: 84.12,
    date: new Date(2021, 11, 12)
  }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler}
      />
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
