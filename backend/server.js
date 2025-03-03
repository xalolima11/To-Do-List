const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

connectDB(); // Conectar à bd

// Importar e usar as rotas
const todoRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", todoRoutes);

// Iniciar o servidor
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
