import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function QRPayment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const paymentData = {
    amount: state.amount,
    method: "QR",
    time: new Date().toLocaleString()
  };

  const confirm = () => {
    const transaction = {
      ...paymentData,
      status: "Success"
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
      <h2>Scan QR Code</h2>

      {/* Real QR Code */}
      <QRCodeCanvas
        value={JSON.stringify(paymentData)}
        size={200}
      />

      <p>Amount: ${state.amount}</p>

      <button className="primary" onClick={confirm}>
        Simulate Customer Paid
      </button>
    </div>
  );
}

export default QRPayment;