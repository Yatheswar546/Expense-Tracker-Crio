function Balance({ balance, setShowIncomeModal, setShowExpenseModal }) {
    return(
        <div className="balance-container">
            <div className="card">
                <h3>Wallet Balance: ₹{balance}</h3>
                <button type="button" onClick={() => setShowIncomeModal(true)}>
                    + Add Income
                </button>
            </div>

            <div className="card">
                <h3>Expenses</h3>
                <button type="button" onClick={() => setShowExpenseModal(true)}>
                    + Add Expense
                </button>
            </div>
        </div>
    );
}

export default Balance;