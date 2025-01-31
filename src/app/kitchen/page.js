"use client";

import { useOrder } from "../../context/OrderContext";
import { useState, useEffect } from "react";

export default function Kitchen() {
  const { kitchenOrders, completeOrder } = useOrder();
  const [newOrder, setNewOrder] = useState(false);

  // ✅ Yeni Sipariş Geldiğinde Bildirim Göster
  useEffect(() => {
    if (kitchenOrders.length > 0) {
      setNewOrder(true);
      setTimeout(() => setNewOrder(false), 3000); // 3 saniye sonra bildirim kaybolur
    }
  }, [kitchenOrders]);

  return (
    <div>
      <h1 style={{margin:'30px', textAlign:'center'}} >👨‍🍳 Mutfak Ekranı</h1>
      
      {/* ✅ Yeni Sipariş Bildirimi */}
      {newOrder && <h3 style={{textAlign:'center',color:'red'}} className="new-order-alert">📢 Yeni Sipariş Geldi!</h3>}

      {kitchenOrders.length === 0 ? (
        <h3 style={{margin:'30px', textAlign:'center'}} >📭 Şu an mutfağa düşen sipariş yok.</h3>
      ) : (
        <ul style={{margin:'30px', textAlign:'center'}} className="kitchen-order-list">
          {kitchenOrders.map((item, index) => (
            <li key={index} className="kitchen-order-item">
              <strong>{item.name}</strong> - {item.price} TL x {item.quantity || 1}
              <p>{item.description}</p>
              
              {/* ✅ Hazırlanıyor Animasyonu */}
              <p className="loading-animation">⏳ Hazırlanıyor...</p>

              <button onClick={() => completeOrder(index)}>✅ Sipariş Hazır</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
