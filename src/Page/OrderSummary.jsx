import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = ({ items, setItems }) => {
  const navigate = useNavigate();

  const [deliveryType, setDeliveryType] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const totalAmount = items.reduce(
    (sum, item) => sum + item.qty * parseFloat(item.price || 0),
    0
  );

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (!deliveryType || !paymentType) {
      alert("Please select Delivery Type and Payment Method.");
      return;
    }

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items,
      totalItems: items.reduce((sum, i) => sum + i.qty, 0),
      totalAmount,
      deliveryType,
      paymentType,
    };

    // ✅ Save to localStorage
    const existing = JSON.parse(localStorage.getItem("orders") || "[]");
    existing.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existing));

    // ✅ Clear cart and selections
    setItems([]);
    setDeliveryType("");
    setPaymentType("");

    // ✅ Redirect to OrderHistory
    navigate("/order-history");
  };

  return (
    <div className="container py-5">
      <h3 className="fw-bold mb-4 text-center">🧾 Order Summary</h3>

      {items.length === 0 ? (
        <p className="text-muted text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {/* LEFT: Order Items */}
          <div className="col-md-8">
            <div className="table-responsive">
              <table className="table table-bordered align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.qty}</td>
                      <td>${(item.qty * parseFloat(item.price)).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-end fw-bold fs-5 mt-3">
              Total: ${totalAmount.toFixed(2)}
            </div>
          </div>

          {/* RIGHT: Delivery + Payment */}
          <div className="col-md-4 ps-md-4 mt-4 mt-md-0">
            <div className="border rounded p-3 shadow-sm bg-light">
              <h5 className="fw-bold mb-3">🚚 Delivery Type</h5>
              {["Delivery", "Pick Up", "Dine In"].map((type) => (
                <div key={type} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="deliveryType"
                    value={type}
                    checked={deliveryType === type}
                    onChange={(e) => setDeliveryType(e.target.value)}
                    id={`delivery-${type}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`delivery-${type}`}
                  >
                    {type}
                  </label>
                </div>
              ))}

              <h5 className="fw-bold mt-4 mb-3">💳 Payment Method</h5>
              {["Cash", "Card", "UPI"].map((method) => (
                <div key={method} className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentType"
                    value={method}
                    checked={paymentType === method}
                    onChange={(e) => setPaymentType(e.target.value)}
                    id={`payment-${method}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`payment-${method}`}
                  >
                    {method}
                  </label>
                </div>
              ))}
            </div>

            <button
              className="btn btn-success w-100 mt-4 py-2"
              onClick={handlePlaceOrder}
            >
              ✅ Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
