// src/app/history/page.js
"use client";

import { useOrder } from "../../context/OrderContext";

export default function History() {
  const { completedOrders } = useOrder();

  return (
    <div>
      <h2>📜 Geçmiş Siparişler</h2>
      {completedOrders.length === 0 ? (
        <p>Henüz tamamlanmış sipariş bulunmamaktadır.</p>
      ) : (
        <ul>
          {completedOrders.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - {item.price} TL
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
