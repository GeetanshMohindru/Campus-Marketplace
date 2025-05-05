import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header style={styles.header}>
      <motion.div
        style={styles.logoContainer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.logo}>Campus Marketplace</h1>
      </motion.div>

      <nav style={styles.navLinks}>
        <motion.div
          style={styles.navItems}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {["home","dashboard", "sell", "admin", "aboutus", ""].map((path, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={`/${path}`}
                style={styles.navLink}
              >
                {path === "" ? "Log Out" : path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#7B3FE4",
    // backgroundColor: "rgba(45, 135, 240, 0.9)",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    fontFamily: "Poppins, sans-serif",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: "26px",
    fontWeight: "700",
    margin: 0,
    letterSpacing: "1px",
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
    fontSize: "16px",
    fontWeight: "500",
    textDecoration: "none",
    position: "relative",
    textTransform: "uppercase",
    paddingBottom: "4px",
    transition: "all 0.3s ease",
  },
};

// Add hover effect via CSS-in-JS
styles.navLink[':hover'] = {
  borderBottom: "2px solid white",
};

export default Header;
