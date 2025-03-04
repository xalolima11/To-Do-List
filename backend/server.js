const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

connectDB(); // Conectar à bd

// Importar e usar as rotas
const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

// Iniciar o servidor
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
