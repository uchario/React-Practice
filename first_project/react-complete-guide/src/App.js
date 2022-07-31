import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      name: 'e1',
      title: 'Mercedes Benz',
      amount: 94.12,
      date: new Date(2000, 1, 12)
    },
    {
      name: 'e2',
      title: 'Range Rover',
      amount: 78.12,
      date: new Date(2008, 2, 12)
    },{
      name: 'e3',
      title: 'Lamborghini',
      amount: 65.12,
      date: new Date(2012, 6, 12)
    },
    {
      name: 'e4',
      title: 'Ferrari',
      amount: 84.12,
      date: new Date(2020, 11, 12)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
