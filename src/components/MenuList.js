"use client";

import { useState, useEffect } from "react";
import { useOrder } from "../context/OrderContext";
import styles from "../styles/MenuList.module.css";

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const { addOrder } = useOrder();
  const [orderStatus, setOrderStatus] = useState({}); // ✅ Sipariş durumu için state

  useEffect(() => {
    fetch("/data/menu.json")
      .then((response) => response.json())
      .then((data) => setMenu(data.menu))
      .catch((error) => console.error("Menü yüklenirken hata oluştu:", error));
  }, []);

  // ✅ Sipariş verildiğinde mesajı göster ve 3 saniye sonra kaybolmasını sağla
  const handleOrder = (item) => {
    addOrder(item);
    setOrderStatus((prevStatus) => ({ ...prevStatus, [item.id]: true }));

    setTimeout(() => {
      setOrderStatus((prevStatus) => ({ ...prevStatus, [item.id]: false }));
    }, 3000); // 3 saniye sonra mesaj kaybolur
  };

  return (
    <div className={styles.menuContainer}>
      <h2 className={styles.menuTitle}>📜 Restoran Menüsü</h2>
      {menu.map((category, index) => (
        <div key={index} className={styles.category}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <ul className={styles.menuList}>
            {category.items.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h4 className={styles.itemName}>{item.name}</h4>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <span className={styles.itemPrice}>{item.price} TL</span>
                  
                  {/* ✅ Sipariş Butonu ve "Siparişiniz Alındı" Mesajı */}
                  <div className={styles.orderSection}>
                    <button onClick={() => handleOrder(item)} className={styles.orderButton}>🛒 Sipariş Ver</button>
                    {orderStatus[item.id] && <span className={styles.orderConfirmed}>✅ Siparişiniz alındı!</span>}
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
