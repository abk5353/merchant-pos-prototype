import { BrowserRouter, Routes, Route } from "react-router-dom";
import POS from "./pages/POS";
import PaymentMethod from "./pages/PaymentMethod";
import CardPayment from "./pages/CardPayment";
import QRPayment from "./pages/QRPayment";
import Transactions from "./pages/Transactions";
import Result from "./pages/Result";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<POS />} />
        <Route path="/method" element={<PaymentMethod />} />
        <Route path="/card" element={<CardPayment />} />
        <Route path="/qr" element={<QRPayment />} />
        <Route path="/result" element={<Result />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;