import React, { useState } from "react";
import "./App.css";
import "./Expencetracker.css";
function ExpenseTracker() {
    const [amount, setAmount] = useState("");
    const [balance, setBalance] = useState(150);
    const [transactions_history, setTransactions_history] = useState([]);

    const addTransaction = (isIncome) => {
        const numAmount = parseFloat(amount);
        if (!numAmount || numAmount <= 0) return;

        const newBalance = isIncome ? balance + numAmount : balance - numAmount;
        setBalance(newBalance);

        const newTransaction_history = {
            id: transactions_history.length,
            amount: numAmount,
            isIncome,
        };
        setTransactions_history([...transactions_history, newTransaction_history]);
        setAmount("");
    };

    return (
        <div className="container">
            <div className="transaction-section">
                <div className="input-section">
                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <div className="button">
                    <button className="in" onClick={() => addTransaction(true)}>In</button>
                    <button className="out" onClick={() => addTransaction(false)}>Out</button>
                    </div>
                </div>
                <div cvlassName="transaction-history">
                    <h4>Transaction History</h4>
                    <ul>
                        {transactions_history.map((v) => (
                            <li key={v.id} className={v.isIncome ? "in" : "out"}>
                                {v.isIncome ? "+" : "-"} rupess{v.amount}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="balance-section">
                {/* Balance Display */}
                <div className="balance-display">
                    <div className="pie">
                    </div>
                    <h4>Balance: rupess{balance}</h4>
                </div>
            </div>
        </div>
    );
}

export default ExpenseTracker;
