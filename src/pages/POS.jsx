import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keypad from "../components/Keypad";

function POS() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handlePress = (value) => {
    setAmount((prev) => prev + value);
  };

  return (
    <div className="container">
      <h1>Merchant POS</h1>

      <div className="amount">${amount || "0.00"}</div>

      <Keypad onPress={handlePress} />

      <div className="actions">
        <button
          className="primary"
          onClick={() =>
            navigate("/method", { state: { amount } })
          }
        >
          Pay
        </button>

        <button
          className="secondary"
          onClick={() => navigate("/transactions")}
        >
          Transactions
        </button>
      </div>
    </div>
  );
}

export default POS;