# 💰 Expense Tracker

A full-featured React application that allows users to **track, manage, and visualize expenses** with real-time wallet updates, charts, and persistent storage.

---

## 🚀 Live Demo

https://expense-tracker-crio.netlify.app/

---

## 📌 Features

### 💳 Wallet Management

* Default wallet balance: **₹5000**
* Add income using **+ Add Income**
* Real-time balance updates

### 💸 Expense Management

* Add expenses with:

  * Title
  * Amount
  * Category (Food, Entertainment, Travel)
  * Date
* Prevents overspending beyond wallet balance
* Delete expenses with automatic balance adjustment

### 📊 Data Visualization

* **Pie Chart** showing category-wise expense distribution
* Real-time updates based on expenses

### 🧾 Transaction History

* Displays all recent transactions
* Shows title, date, and amount

### 💾 Data Persistence

* Uses **localStorage**
* Data remains after page refresh

### 📱 Responsive Design

* Works across desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6+)
* CSS (Flexbox)
* Recharts (for charts)

---

## 📂 Project Setup

Run locally:

```bash
# Clone repository
git clone <your-repo-link>

# Navigate to project
cd expense-tracker

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## ⚙️ How It Works

1. App initializes with wallet balance and stored expenses
2. User can:

   * Add income → increases balance
   * Add expense → decreases balance
3. Expenses are stored in **localStorage**
4. Charts update dynamically based on data
5. Deleting an expense restores balance

---

## ⚠️ Important Functional Rules

* Cannot add expense greater than available balance
* All fields are required when adding an expense
* `expenses` is used as key in localStorage
* Only one `<h1>` is used in the application

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🙌 Acknowledgements

* Crio.Do for the project concept
* Recharts for visualization

---