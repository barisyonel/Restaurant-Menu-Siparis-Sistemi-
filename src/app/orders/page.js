"use client";

import { useOrder } from "../../context/OrderContext";
import { useState } from "react";

export default function Orders() {
  const { orders, confirmOrder, removeOrder, clearOrders } = useOrder();
  const [notification, setNotification] = useState("");

  const handleConfirmOrder = () => {
    confirmOrder();
    setNotification("✅ Siparişiniz mutfağa gönderildi!");
    setTimeout(() => setNotification(""), 3000);
  };

  const totalPrice = orders.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div className="order-container" style={{ textAlign: "center", margin: "30px auto", maxWidth: "600px" }}>
      <h1 style={{marginBottom:'15px'}} >🛒 Siparişlerim</h1>
      
      {notification && <p style={{ color: "green", fontWeight: "bold" }}>{notification}</p>}

      {orders.length === 0 ? (
        <h3>🚫 Sipariş bulunmamaktadır.🚫</h3>
      ) : (
        <div>
          <ul className="order-list">
            {orders.map((item, index) => (
              <li key={index} className="order-item">
                <strong>{item.name}</strong> - {item.price} TL x {item.quantity || 1}
                <p>{item.description}</p>
                <button style={{marginTop:'15px'}} onClick={() => removeOrder(index)}>❌ İptal Et</button>
              </li>
            ))}
          </ul>

          <h3 style={{ margin: "20px 0" }}>Toplam Tutar: {totalPrice} TL</h3>

          {/* 📌 Butonları ortalamak için div kapsayıcı ekledik */}
          <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <button onClick={handleConfirmOrder} style={{ backgroundColor: "green", padding: "10px 20px", fontSize: "16px" }}>
              ✔ Siparişi Onayla
            </button>
            <button onClick={clearOrders} style={{ backgroundColor: "red", padding: "10px 20px", fontSize: "16px" }}>
              🗑 Sepeti Boşalt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
