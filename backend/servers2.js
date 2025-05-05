// Existing Imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// 🔧 Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// 🌐 MongoDB connection setup
const MONGO_URI = "mongodb://127.0.0.1:27017/campus_marketplace";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// 🧾 Product schema (aligns with: Document-Oriented DB, Schema definition)
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  seller: { type: String, required: true },
  contact: { type: String, required: true },
  photo: { type: String },
});
const Product = mongoose.model("Product", productSchema);

// 🔐 Simple admin auth middleware
const authenticateAdmin = (req, res, next) => {
  const { password } = req.query;
  if (password === "sam123") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Incorrect password" });
  }
};

// 🌐 Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Campus Marketplace API!");
});

// 📥 Upload product (MongoDB: insertOne equivalent)
app.post("/api/products", upload.single("photo"), async (req, res) => {
  try {
    const { title, description, price, seller, contact } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !description || !price || !seller || !contact) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product({ title, description, price, seller, contact, photo });
    await newProduct.save(); // ➤ Equivalent to db.products.insertOne({...})
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🔍 Fetch all products (MongoDB: find, sort, filter)
app.get("/api/products", async (req, res) => {
  try {
    const { sort, maxPrice, search } = req.query;

    const query = {};
    
    // 📌 Filtering by max value using $lte (Syllabus: Query operators)
    if (maxPrice) {
      query.price = { $lte: parseFloat(maxPrice) };
    }

    // 📌 Search by name using regex (Syllabus: find with regex, JavaScript in MongoDB)
    if (search) {
      query.title = { $regex: search, $options: "i" }; // case-insensitive
    }

    // 📌 Sorting (Syllabus: sort(), compound queries)
    let sortOption = {};
    if (sort === "asc") sortOption.price = 1;
    if (sort === "desc") sortOption.price = -1;

    // 🧮 Final MongoDB query with .find(), .sort()
    const products = await Product.find(query).sort(sortOption);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ❌ Delete product by ID (Syllabus: deleteOne, document manipulation)
app.delete("/api/products/:id", authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id); // ➤ Equivalent to db.products.deleteOne({_id: ObjectId(id)})
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🟢 Optional: Create price index (Syllabus: Indexing for performance)
Product.collection.createIndex({ price: 1 });

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
