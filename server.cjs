const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configuração do middleware CORS
app.use(cors({
    origin: "http://localhost:3000", // Substitua pelo domínio do React em produção
    methods: ["GET", "POST"], // Métodos permitidos
    allowedHeaders: ["Content-Type"], // Cabeçalhos permitidos
}));

app.use(bodyParser.json());

const API_URL = "http://127.0.0.1:8000/predict";

app.post("/classify", async (req, res) => {
    try {
        const userInput = req.body.text;

        console.log("Texto recebido do React:", userInput);

        // Requisição para a API Python
        const response = await axios.post(API_URL, { text: userInput });

        console.log("Resposta da API Python:", response.data);

        // Extraindo a previsão da resposta
        const prediction = response.data.prediction[0];

        // Encaminhando a resposta para o front-end
        res.json({ result: prediction });
    } catch (error) {
        console.error("Erro ao chamar a API:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Erro ao classificar o texto" });
    }
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});
