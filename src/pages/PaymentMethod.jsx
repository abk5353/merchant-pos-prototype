import { useLocation, useNavigate } from "react-router-dom";

function PaymentMethod() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Select Payment Method</h2>

      <button
        className="primary"
        onClick={() =>
          navigate("/card", { state: { amount: state.amount } })
        }
      >
        Debit Card
      </button>

      <button
        className="primary"
        onClick={() =>
          navigate("/qr", { state: { amount: state.amount } })
        }
      >
        QR Payment
      </button>
    </div>
  );
}

export default PaymentMethod;