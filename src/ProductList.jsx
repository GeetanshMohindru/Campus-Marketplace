import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Header from "./Header";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]); // raw data from DB
  const [displayedProducts, setDisplayedProducts] = useState([]); // filtered/sorted view
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  const [maxPrice, setMaxPrice] = useState("");   // filter value like 100/200
  const [searchQuery, setSearchQuery] = useState(""); // for search input
  const [selectedProduct, setSelectedProduct] = useState(null); // State for expanded card
  const [error, setError] = useState(""); // For error messages

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setAllProducts(res.data);
        setDisplayedProducts(res.data); // initial view
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again.");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...allProducts];

    if (maxPrice) {
      filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setDisplayedProducts(filtered);
  }, [sortOrder, maxPrice, allProducts, searchQuery]);

  const styles = {
    container: {
      padding: "40px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "#f5f7fa",
    },
    heading: {
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "700",
      color: "#333",
      marginBottom: "30px",
    },
    error: {
      color: "#e63946",
      textAlign: "center",
      fontWeight: "600",
    },
    searchBox: {
      width: "100%",
      padding: "14px 18px",
      marginBottom: "30px",
      borderRadius: "12px",
      border: "1px solid #ccc",
      fontSize: "16px",
      outline: "none",
      backgroundColor: "#fafafa",
    },
    filterSortContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "25px",
      flexWrap: "wrap",
      gap: "15px",
    },
    filterButton: {
      padding: "12px 20px",
      backgroundColor: "#7b3fe4",
      background: "linear-gradient(135deg, #a18cd1, #7b3fe4)",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "14px",
      margin: "0 5px",
      transition: "0.3s ease",
      boxShadow: "0 4px 8px rgba(123, 63, 228, 0.2)",
    },
    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "25px",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 8px 16px rgba(123, 63, 228, 0.15)",
      cursor: "pointer",
      transition: "0.3s ease",
    },
    expandedCard: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      padding: "35px",
      boxShadow: "0 12px 24px rgba(123, 63, 228, 0.3)",
      display: "flex",
      gap: "30px",
      alignItems: "flex-start",
      position: "relative",
      maxWidth: "900px",
      margin: "30px auto",
    },
    leftContent: {
      flex: 1,
    },
    rightContent: {
      flex: 1,
      textAlign: "center",
    },
    cardHeading: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#7b3fe4",
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "15px",
      color: "#555",
      lineHeight: "1.5",
      marginBottom: "10px",
    },
    photo: {
      width: "100%",
      maxHeight: "250px",
      objectFit: "cover",
      borderRadius: "12px",
    },
    closeButton: {
      position: "absolute",
      top: "15px",
      right: "15px",
      backgroundColor: "#e63946",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "32px",
      height: "32px",
      fontSize: "18px",
      cursor: "pointer",
    },
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.heading}>Available Products</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchBox}
        />

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.filterSortContainer}>
          <div>
            <button
              style={styles.filterButton}
              onClick={() => setSortOrder("asc")}
            >
              Low to High
            </button>
            <button
              style={styles.filterButton}
              onClick={() => setSortOrder("desc")}
            >
              High to Low
            </button>
            <button
              style={styles.filterButton}
              onClick={() => setSortOrder("")}
            >
              Clear Sort
            </button>
          </div>
          <div>
            <button
              style={styles.filterButton}
              onClick={() => setMaxPrice(100)}
            >
              Under ₹100
            </button>
            <button
              style={styles.filterButton}
              onClick={() => setMaxPrice(200)}
            >
              Under ₹200
            </button>
            <button
              style={styles.filterButton}
              onClick={() => setMaxPrice(500)}
            >
              Under ₹500
            </button>
            <button
              style={styles.filterButton}
              onClick={() => setMaxPrice(1000)}
            >
              Under ₹1000
            </button>
            <button
              style={styles.filterButton}
              onClick={() => setMaxPrice("")}
            >
              Clear Filter
            </button>
          </div>
        </div>

        {selectedProduct ? (
          <motion.div
            style={styles.expandedCard}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              style={styles.closeButton}
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div style={styles.leftContent}>
              <h2 style={styles.cardHeading}>{selectedProduct.title}</h2>
              <p style={styles.cardText}>{selectedProduct.description}</p>
              <p style={styles.cardText}>
                <strong>Price:</strong> ₹{selectedProduct.price}
              </p>
              <p style={styles.cardText}>
                <strong>Seller:</strong> {selectedProduct.seller}
              </p>
              <p style={styles.cardText}>
                <strong>Contact:</strong> {selectedProduct.contact}
              </p>
            </div>
            <div style={styles.rightContent}>
              {selectedProduct.photo && (
                <img
                  src={`http://localhost:5000${selectedProduct.photo}`}
                  alt={selectedProduct.title}
                  style={styles.photo}
                />
              )}
            </div>
          </motion.div>
        ) : (
          <div style={styles.cards}>
            {displayedProducts.map((product) => (
              <motion.div
                key={product._id}
                style={styles.card}
                onClick={() => setSelectedProduct(product)}
                whileHover={{ scale: 1.05 }}
              >
                {product.photo && (
                  <img
                    src={`http://localhost:5000${product.photo}`}
                    alt={product.title}
                    style={styles.photo}
                  />
                )}
                <h2 style={styles.cardHeading}>{product.title}</h2>
                <p style={styles.cardText}>{product.description}</p>
                <p style={styles.cardText}>
                  <strong>Price:</strong> ₹{product.price}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;