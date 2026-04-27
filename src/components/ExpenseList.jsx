import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
    return (
        <div className="list">
            <h2>Recent Transactions</h2>

            {expenses.length === 0 ? (
                <p>No transactions</p>
            ) : (
              expenses.map((e) => (
                <ExpenseItem key={e.id} expense={e} deleteExpense={deleteExpense} />
                ))
            )}
        </div>
    );
}

export default ExpenseList;