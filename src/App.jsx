import { useEffect, useState } from 'react';
import Balance from './components/Balance';
import ExpenseList from './components/ExpenseList';
import AddBalanceModal from './components/AddBalanceModal';
import AddExpenseModal from './components/AddExpenseModal';
import Charts from './components/Charts';
import './App.css'

function App() {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);

  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const savedBalance = JSON.parse(localStorage.getItem("balance"));

    if (savedBalance !== null) setBalance(savedBalance);
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [expenses, balance])

  const addIncome = (amount) => {
    setBalance((prev) => prev + Number(amount));
    setShowIncomeModal(false);
  };

  const addExpense = (expense) => {
    if (expense.price > balance) {
      alert("Insufficient balance!");
      return;
    }

    setExpenses((prev) => [...prev, expense]);
    setBalance((prev) => prev - expense.price);
    setShowExpenseModal(false);
  };

  const deleteExpense = (id) => {
    const exp = expenses.find((e) => e.id === id);
    setBalance((prev) => prev + exp.price);
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className='container'>
      <h1>Expense Tracker</h1>

      <Balance 
        balance={balance}
        setShowIncomeModal={setShowIncomeModal}
        setShowExpenseModal={setShowExpenseModal}
      />

      <Charts expenses={expenses} />

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />

      {showIncomeModal && (
        <AddBalanceModal 
          addIncome={addIncome}
          close={() => setShowIncomeModal(false)}
        />
      )}

      {showExpenseModal && (
        <AddExpenseModal 
          addExpense={addExpense}
          close={() => setShowExpenseModal(false)}
        />
      )}
    </div>
  );
}

export default App
