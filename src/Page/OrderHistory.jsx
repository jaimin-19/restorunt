import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./OrderHistory.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const printRef = useRef();

  // ✅ Load all saved orders on page load
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  // ✅ Print setup
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  // ✅ Delete all orders
  const handleClearOrders = () => {
    if (window.confirm("Are you sure you want to clear all orders?")) {
      localStorage.removeItem("orders");
      setOrders([]);
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">🧾 Order History</h3>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleClearOrders}
          disabled={orders.length === 0}
        >
          🗑️ Clear All Orders
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="text-muted text-center">No previous orders found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total Items</th>
                <th>Total Amount</th>
                <th>Delivery Type</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.totalItems}</td>
                  <td>${order.totalAmount.toFixed(2)}</td>
                  <td>{order.deliveryType}</td>
                  <td>{order.paymentType}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => {
                        printRef.current = document.getElementById(`bill-${idx}`);
                        handlePrint();
                      }}
                    >
                      🖨️ Print Bill
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ✅ Hidden printable bills */}
      <div style={{ display: "none" }}>
        {orders.map((order, idx) => (
          <div
            key={idx}
            id={`bill-${idx}`}
            className="p-4"
            style={{ width: "80mm", fontFamily: "monospace" }}
          >
            <h4 className="text-center mb-3">🍽️ JK Restaurant</h4>
            <hr />
            <p><strong>Order ID:</strong> #{order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Delivery:</strong> {order.deliveryType}</p>
            <p><strong>Payment:</strong> {order.paymentType}</p>
            <hr />
            <table style={{ width: "100%", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${(item.qty * parseFloat(item.price)).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <p><strong>Total Items:</strong> {order.totalItems}</p>
            <p><strong>Grand Total:</strong> ${order.totalAmount.toFixed(2)}</p>
            <p className="text-center mt-3">✨ Thank you for dining with us! ✨</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
