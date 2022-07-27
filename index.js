const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/config");
const path = require("path");
const authRouter = require("./routes/auth");
const productsRouter = require("./routes/products");

require("dotenv").config();

// Crear el servidor/aplicación de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", authRouter);
app.use("/products", productsRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
