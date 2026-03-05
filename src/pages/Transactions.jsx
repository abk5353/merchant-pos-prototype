import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(data);
  }, []);

  return (
    <div className="container">
      <h2>Transactions</h2>

      {transactions.length === 0 && (
        <p>No transactions yet</p>
      )}

      {transactions.map((t, i) => (
        <div key={i} className="transaction">
          <p><b>Amount:</b> ${t.amount}</p>
          <p><b>Method:</b> {t.method}</p>
          <p><b>Status:</b> {t.status}</p>
          <p><b>Time:</b> {t.time}</p>
        </div>
      ))}

      <button className="primary" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default Transactions;