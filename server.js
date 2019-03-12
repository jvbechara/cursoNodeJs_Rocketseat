const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o App
const app = express();
app.use(express.json()); // Permite o envio de dados no formato JSON
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { useNewUrlParser: true});

requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);