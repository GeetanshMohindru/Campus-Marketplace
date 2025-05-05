import React from "react";
import { motion } from "framer-motion";
import Header from './Header.jsx'

const HomePage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInDelayed = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
  };

  const styles = {
    // Main containers
    page: {
      backgroundColor: "#f8f5ff",
      minHeight: "100vh",
      fontFamily: "'Poppins', system-ui, -apple-system, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 10px rgba(123, 63, 228, 0.1)",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "800",
      color: "#6429cd",
    },
    nav: {
      display: "flex",
      gap: "30px",
      alignItems: "center",
    },
    navLink: {
      fontSize: "16px",
      color: "#333",
      fontWeight: "500",
      textDecoration: "none",
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    signInButton: {
      padding: "8px 16px",
      backgroundColor: "transparent",
      color: "#6429cd",
      border: "1px solid #6429cd",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    registerButton: {
      padding: "8px 20px",
      backgroundColor: "#6429cd",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(123, 63, 228, 0.2)",
      transition: "all 0.3s ease",
    },
    
    // Hero section
    hero: {
      display: "flex",
      padding: "60px 40px",
      maxWidth: "1200px",
      margin: "0 auto",
      alignItems: "center",
      justifyContent: "space-between",
    },
    heroContent: {
      flex: "1",
      paddingRight: "40px",
    },
    heroImage: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
    heroTitle: {
      fontSize: "48px",
      fontWeight: "800",
      lineHeight: "1.2",
      marginBottom: "20px",
      color: "#333",
    },
    heroTitleHighlight: {
      color: "#6429cd",
      display: "block",
    },
    heroDescription: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#555",
      marginBottom: "30px",
      maxWidth: "500px",
    },
    primaryButton: {
      padding: "14px 28px",
      backgroundColor: "#6429cd",
      color: "#fff",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 6px 16px rgba(123, 63, 228, 0.3)",
      transition: "all 0.3s ease",
      marginRight: "15px",
    },
    secondaryButton: {
      padding: "14px 28px",
      backgroundColor: "transparent",
      color: "#6429cd",
      border: "2px solid #6429cd",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    },
    userCount: {
      display: "flex",
      alignItems: "center",
      marginTop: "30px",
    },
    userAvatars: {
      display: "flex",
    },
    userAvatar: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "2px solid #fff",
      marginLeft: "-10px",
      backgroundColor: "#6429cd",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "12px",
      fontWeight: "bold",
    },
    userCountText: {
      marginLeft: "15px",
      fontSize: "15px",
      color: "#555",
      fontWeight: "500",
    },
    creditCard: {
      width: "300px",
      height: "190px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 20px 40px rgba(123, 63, 228, 0.15)",
      position: "relative",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transform: "rotate(-5deg)",
      border: "1px solid rgba(123, 63, 228, 0.2)",
      overflow: "hidden",
    },
    creditCard2: {
      width: "300px",
      height: "190px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 20px 40px rgba(123, 63, 228, 0.15)",
      position: "absolute",
      top: "80px",
      right: "-30px",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transform: "rotate(5deg)",
      border: "1px solid rgba(123, 63, 228, 0.2)",
      overflow: "hidden",
    },
    cardChip: {
      width: "40px",
      height: "30px",
      backgroundColor: "#e0e0e0",
      borderRadius: "6px",
      marginBottom: "30px",
    },
    cardDetails: {
      fontSize: "16px", 
      letterSpacing: "2px",
      fontWeight: "600",
    },
    cardTitle: {
      position: "absolute",
      top: "70px",
      right: "20px",
      fontSize: "16px",
      transform: "rotate(90deg)",
      transformOrigin: "right",
      color: "#6429cd",
      fontWeight: "700",
      letterSpacing: "1px",
    },
    cardBlueCircle: {
      position: "absolute",
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      backgroundColor: "rgba(100, 41, 205, 0.6)",
      top: "10px",
      right: "10px",
    },
    cardBlueCircleSmall: {
      position: "absolute",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "rgba(100, 41, 205, 0.3)",
      top: "60px",
      right: "60px",
    },
    
    // Partners section
    partnersSection: {
      padding: "40px 0",
      backgroundColor: "#fff",
      borderTop: "1px solid rgba(123, 63, 228, 0.1)",
      borderBottom: "1px solid rgba(123, 63, 228, 0.1)",
    },
    partnersContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "30px",
    },
    partnerLogo: {
      height: "30px",
      opacity: "0.7",
      filter: "grayscale(100%)",
      transition: "all 0.3s ease",
    },
    
    // Features section
    featuresSection: {
      padding: "80px 40px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    sectionTitle: {
      textAlign: "center",
      color: "#6429cd",
      fontSize: "18px",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "10px",
    },
    sectionHeading: {
      textAlign: "center",
      fontSize: "36px",
      fontWeight: "800",
      marginBottom: "60px",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
    },
    featureCard: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "30px",
      boxShadow: "0 8px 20px rgba(123, 63, 228, 0.08)",
      transition: "all 0.3s ease",
    },
    featureIcon: {
      backgroundColor: "rgba(123, 63, 228, 0.1)",
      width: "60px",
      height: "60px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      color: "#6429cd",
      marginBottom: "20px",
    },
    featureTitle: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#333",
    },
    featureDescription: {
      fontSize: "15px",
      lineHeight: "1.6",
      color: "#555",
      marginBottom: "20px",
    },
    learnMore: {
      fontSize: "15px",
      color: "#6429cd",
      fontWeight: "600",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
    },
    arrowIcon: {
      marginLeft: "5px",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
     <Header/>

      {/* Hero Section */}
      <motion.section 
        style={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Your marketplace for
            <span style={styles.heroTitleHighlight}>campus essentials</span>
          </h1>
          <p style={styles.heroDescription}>
            Whether you're selling textbooks, finding dorm decor, or swapping class notes, 
            we help students connect and trade what they need on campus.
          </p>
          <div>
            <button style={styles.primaryButton}>Start Selling</button>
            <button style={styles.secondaryButton}>
              <span>Browse Items</span>
              <span>→</span>
            </button>
          </div>
          <div style={styles.userCount}>
            <div style={styles.userAvatars}>
              <div style={{...styles.userAvatar, zIndex: 5, marginLeft: 0, backgroundColor: "#9b72db"}}>JK</div>
              <div style={{...styles.userAvatar, zIndex: 4, backgroundColor: "#7b3fe4"}}>SM</div>
              <div style={{...styles.userAvatar, zIndex: 3, backgroundColor: "#6429cd"}}>AP</div>
              <div style={{...styles.userAvatar, zIndex: 2, backgroundColor: "#9b72db"}}>TS</div>
              <div style={{...styles.userAvatar, zIndex: 1, backgroundColor: "#7b3fe4"}}>+</div>
            </div>
            <div style={styles.userCountText}>3,500+ students already using CampusMarket</div>
          </div>
        </div>
        <motion.div 
          style={styles.heroImage}
          variants={fadeInDelayed}
        >
          <div style={styles.creditCard}>
            <div style={styles.cardChip}></div>
            <div style={styles.cardBlueCircle}></div>
            <div style={styles.cardBlueCircleSmall}></div>
            <div style={styles.cardTitle}>STUDENT ID</div>
            <div style={styles.cardDetails}>CAMPUS PASS</div>
          </div>
          <div style={styles.creditCard2}>
            <div style={styles.cardChip}></div>
            <div style={styles.cardBlueCircle}></div>
            <div style={styles.cardBlueCircleSmall}></div>
            <div style={styles.cardTitle}>STUDENT ID</div>
            <div style={styles.cardDetails}>CAMPUS MEAL PLAN</div>
          </div>
        </motion.div>
      </motion.section>

      {/* Partners Section */}
      <section style={styles.partnersSection}>
        <div style={styles.partnersContainer}>
          <div>University Bookstore</div>
          <div>Campus Dining</div>
          <div>Student Union</div>
          <div>Campus Tech</div>
          <div>Sports Department</div>
          <div>Alumni Association</div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <p style={styles.sectionTitle}>THE STUDENT'S GO-TO PLATFORM</p>
        <h2 style={styles.sectionHeading}>A marketplace designed for campus life.</h2>
        
        <div style={styles.featuresGrid}>
          {/* Feature 1 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>👥</div>
            <h3 style={styles.featureTitle}>Join the campus network</h3>
            <p style={styles.featureDescription}>
              Connect with thousands of students from your university who are buying and selling items you need.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More <span style={styles.arrowIcon}>→</span>
            </a>
          </div>

          {/* Feature 2 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔍</div>
            <h3 style={styles.featureTitle}>Find what you need</h3>
            <p style={styles.featureDescription}>
              Easily search for textbooks, electronics, furniture, and more from students on your campus.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More <span style={styles.arrowIcon}>→</span>
            </a>
          </div>

          {/* Feature 3 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>💸</div>
            <h3 style={styles.featureTitle}>Safe campus transactions</h3>
            <p style={styles.featureDescription}>
              Meet on campus for exchanges or use our secure payment system for convenience and safety.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More <span style={styles.arrowIcon}>→</span>
            </a>
          </div>

          {/* Feature 4 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📚</div>
            <h3 style={styles.featureTitle}>Textbook exchange</h3>
            <p style={styles.featureDescription}>
              Save money by buying used textbooks or make cash by selling ones you no longer need.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More <span style={styles.arrowIcon}>→</span>
            </a>
          </div>

          {/* Feature 5 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🏠</div>
            <h3 style={styles.featureTitle}>Dorm essentials</h3>
            <p style={styles.featureDescription}>
              Find furniture, decor, appliances and everything you need to make your dorm feel like home.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More <span style={styles.arrowIcon}>→</span>
            </a>
          </div>

          {/* Feature 6 */}
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎓</div>
            <h3 style={styles.featureTitle}>Student discounts</h3>
            <p style={styles.featureDescription}>
              Access exclusive deals and discounts from local businesses around campus when you sign up.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More <span style={styles.arrowIcon}>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;