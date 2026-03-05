import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="container">
        <h2>No Payment Data</h2>
        <button className="primary" onClick={() => navigate("/")}>
          Back to POS
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>
        {state.status === "Success"
          ? "✅ Payment Successful"
          : "❌ Payment Failed"}
      </h2>

      <p>Amount: ${state.amount}</p>
      <p>Method: {state.method}</p>
      <p>Status: {state.status}</p>

      <button className="primary" onClick={() => navigate("/")}>
        Back to POS
      </button>
    </div>
  );
}

export default Result;