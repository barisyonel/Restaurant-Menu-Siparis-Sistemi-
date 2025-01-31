// src/app/layout.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css"; // Global CSS dosyası burada kullanılacak
import "../styles/Footer.module.css";
import { OrderProvider } from "../context/OrderContext";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <OrderProvider>
          <Navbar />
          <div className="content">{children}</div> {/* Sayfa içeriğinin esnek olması için class eklendi */}
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}
