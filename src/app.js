const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Endpoint para servir a página HTML
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
