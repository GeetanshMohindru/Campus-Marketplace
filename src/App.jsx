import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setMessage("");
    setForm({ name: "", email: "", phone: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isRegistering
        ? "http://localhost:3000/api/register"
        : "http://localhost:3000/api/login";

      const payload = isRegistering
        ? { name: form.name, email: form.email, phone: form.phone, password: form.password }
        : { email: form.email, password: form.password };

      const { data } = await axios.post(endpoint, payload);
      setMessage(data.message);
      if (!isRegistering) {
        navigate("/home");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f5f7fa",
    },
    leftPane: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px",
    },
    rightPane: {
      flex: 1,
      background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
    },
    illustration: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "12px",
    },
    card: {
      width: "100%",
      maxWidth: "420px",
      background: "#fff",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#333",
      textAlign: "center",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "600",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      marginBottom: "18px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      fontSize: "16px",
      outline: "none",
      backgroundColor: "#fafafa",
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      backgroundColor: "#7b3fe4",
      color: "white",
      fontWeight: "600",
      fontSize: "16px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#5d28c9",
    },
    message: {
      marginTop: "15px",
      textAlign: "center",
      fontWeight: "600",
    },
    toggleText: {
      marginTop: "20px",
      textAlign: "center",
      color: "#7b3fe4",
      cursor: "pointer",
      fontWeight: "600",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      {/* Left: Form Section */}
      <div style={styles.leftPane}>
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.heading}>
            {isRegistering ? "Join the Marketplace" : "Welcome Back"}
          </h2>
          <form onSubmit={handleSubmit}>
            {isRegistering && (
              <>
                <label style={styles.label} htmlFor="name">Name</label>
                <input
                  style={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                />
                <label style={styles.label} htmlFor="phone">Phone</label>
                <input
                  style={styles.input}
                  type="text"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                />
              </>
            )}
            <label style={styles.label} htmlFor="email">Email</label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
            />
            <label style={styles.label} htmlFor="password">Password</label>
            <input
              style={styles.input}
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              required
            />
            <motion.button
              type="submit"
              style={styles.button}
              whileHover={{ backgroundColor: styles.buttonHover.backgroundColor }}
            >
              {isRegistering ? "Register" : "Login"}
            </motion.button>
          </form>
          {message && (
            <p
              style={{
                ...styles.message,
                color: message.includes("success") ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
          <p style={styles.toggleText} onClick={toggleMode}>
            {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
          </p>
        </motion.div>
      </div>

      {/* Right: Illustration Section */}
      <div style={styles.rightPane}>
        <img
          src="/login-illustration.webp"
          alt="Login Illustration"
          style={styles.illustration}
        />
      </div>
    </div>
  );
};

export default App;
