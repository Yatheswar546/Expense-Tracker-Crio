function ExpenseItem({ expense, deleteExpense }) {
    return (
        <div className="expense-item">
            <div>
                <p>{expense.title}</p>
                <span>{expense.date}</span>
            </div>

            <div className="right">
                <span className="price">₹{expense.price}</span>
                <button onClick={() => deleteExpense(expense.id)}>❌</button>
            </div>
        </div>
    );
}

export default ExpenseItem;