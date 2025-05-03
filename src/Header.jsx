import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header style={styles.header}>
      <motion.div
        style={styles.logoContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 style={styles.logo}>Campus Marketplace</h1>
      </motion.div>

      <nav style={styles.navLinks}>
        <motion.div
          style={styles.navItems}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/home" style={styles.navLink}>Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/sell" style={styles.navLink}>Sell</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/admin" style={styles.navLink}>Admin</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/aboutus" style={styles.navLink}>About Us</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" style={styles.navLink}>Log Out</Link>
          </motion.div>
        </motion.div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#2d87f0",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    margin: 0,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  navItems: {
    display: "flex",
    gap: "25px",
  },
  navLink: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: "color 0.3s ease, transform 0.3s ease",
  },
};

export default Header;
