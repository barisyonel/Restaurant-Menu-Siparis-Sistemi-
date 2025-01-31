import styles from "../styles/globals.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> 🍽  Restaurant  Menü</h1>
      
      <div className="links">
        <Link href="/" className="button">Menü</Link>
        <Link href="/orders" className="button">Siparişlerim</Link>  
        <Link href="/kitchen" className="button">Mutfak</Link>
        <Link href="/history" className="button">Geçmiş Siparişler</Link>
      </div>
      
    </nav>
    
  );
};

export default Navbar;
