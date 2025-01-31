"use client";

import { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // 📌 Kullanıcının siparişleri
  const [kitchenOrders, setKitchenOrders] = useState([]); // 📌 Mutfakta bekleyen siparişler
  const [completedOrders, setCompletedOrders] = useState([]); // 📌 Tamamlanan siparişler (Geçmiş Siparişler)

  // ✅ Sipariş ekleme fonksiyonu
  const addOrder = (item) => {
    setOrders((prevOrders) => [...prevOrders, item]);
  };

  // ✅ Siparişi mutfağa gönderme fonksiyonu
  const confirmOrder = () => {
    setKitchenOrders((prevKitchen) => [...prevKitchen, ...orders]); // 📌 Siparişleri mutfağa aktar
    setOrders([]); // 📌 Kullanıcının sipariş listesini sıfırla
  };

  // ✅ Tek bir siparişi silme fonksiyonu
  const removeOrder = (index) => {
    setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
  };

  // ✅ Tüm siparişleri silme fonksiyonu (Sepeti Boşalt)
  const clearOrders = () => {
    setOrders([]); // 📌 Tüm siparişleri temizle
  };

  // ✅ Siparişi tamamlanmış olarak işaretleme fonksiyonu (Mutfaktan kaldırıp geçmişe ekler)
  const completeOrder = (index) => {
    setCompletedOrders((prevCompleted) => [...prevCompleted, kitchenOrders[index]]);
    setKitchenOrders((prevKitchen) => prevKitchen.filter((_, i) => i !== index));
  };

  return (
    <OrderContext.Provider value={{ 
      orders, 
      kitchenOrders, 
      completedOrders, 
      addOrder, 
      confirmOrder, 
      removeOrder, 
      clearOrders, 
      completeOrder 
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
