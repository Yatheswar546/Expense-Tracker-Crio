function ExpenseList({ expenses, deleteExpense }) {
    if (expenses.length === 0) {
        return <p>No transactions</p>;
    }

    return (
        <div>
            <h2>Recent Transactions</h2>

            {expenses.map((e) => (
                <div key={e.id}>
                    <p>{e.title}</p>
                    <p>₹{e.price}</p>
                    <button onClick={() => deleteExpense(e.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ExpenseList;