import { useState } from "react";

function AddExpenseModal({ addExpense, close }) {
    const [form, setForm] = useState({
       title: "",
       price: "",
       category: "",
       date: "",  
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.title || !form.price || !form.category || !form.date) {
            alert("All fields required");
            return;
        }

        addExpense({
            ...form,
            id: Date.now(),
            price: Number(form.price),
        });

        setForm({ title: "", price: "", category: "", date: ""});
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <h3>Add Expense</h3>

                <input name="title" placeholder="Title" 
                    onChange={(e) => setForm({ ...form, title: e.target.value })} />

                <input name="price" placeholder="Price" type="number"
                    onChange={(e) => setForm({ ...form, price: e.target.value})} />

                <select name="category"
                    onChange={(e) => setForm({ ...form, category: e.target.value})}>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Travel">Travel</option>
                </select>

                <input name="date" type="date"
                    onChange={(e) => setForm({ ...form, date: e.target.value })} />
                
                <button type="submit">Add Expense</button>
                <button type="button" onClick={close}>Cancel</button>
            </form>
        </div>
    );
}

export default AddExpenseModal;