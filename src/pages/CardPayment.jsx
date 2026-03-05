import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CardPayment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");

  // Generate random fake card
  const generateCard = () => {
    const random = Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");

    setCardNumber(random);
  };

  const pay = () => {
   if (!cardNumber || cardNumber.length !== 16) {
    alert("Card must be 16 digits");
    return;
  }

    const success = Math.random() > 0.2;

    const transaction = {
      amount: state.amount,
      method: "Debit Card",
      cardNumber: cardNumber,
      status: success ? "Success" : "Failed",
      time: new Date().toLocaleString()
    };

    const oldTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    localStorage.setItem(
      "transactions",
      JSON.stringify([...oldTransactions, transaction])
    );

    navigate("/result", { state: transaction });
  };

  return (
    <div className="container">
      <h2>Insert / Tap Card</h2>

      <input
        type="text"
        placeholder="Enter Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />

      <br />

      <button className="secondary" onClick={generateCard}>
        Generate Random Card
      </button>

      <br />

      <button className="primary" onClick={pay}>
        Process Payment
      </button>
    </div>
  );
}

export default CardPayment;