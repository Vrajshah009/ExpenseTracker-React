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
                    <div className="inputbar">
                        <input
                            type="number"
                            placeholder="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                        <div className="button">
                            <button className="in" onClick={() => addTransaction(true)}>In</button>
                            <button className="out" onClick={() => addTransaction(false)}>Out</button>
                        </div>
                </div>
                <div cvlassName="transaction-history">
                    <ul >
                        <div className="transaction-list">
                        {transactions_history.map((v) => (
                            <li key={v.id} className={`transaction ${v.isIncome ? "in" : "out"}`}>
                                {v.amount}
                            </li>
                        ))}
                        </div>
                    </ul>
                </div>
            </div>

            <div className="balance-section">
                <div className="balance-display">
                    <div className="pie">
                    </div>
                 <div className="heading">
                    <h4>${balance}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseTracker;
