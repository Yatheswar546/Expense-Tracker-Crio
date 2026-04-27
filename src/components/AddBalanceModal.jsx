import { useState } from "react";

function AddBalanceModal({ addIncome, close }) {
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(amount);
        setAmount("");
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <h3>Add Balance</h3>

                <input 
                    type="number"
                    placeholder="Income Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <button type="submit">Add Balance</button>
                <button type="submit" onClick={close}>Close</button>
            </form>
        </div>
    );
}

export default AddBalanceModal;