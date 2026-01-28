const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const PORT = 3000;

const RISK_SCORE = {
    "dor": 2,
    "febre": 3,
    "falta de ar": 5,
    "sangramento": 5,
    "enjoo": 1
};

function processClinicalData(text) {
    const lowerText = text.toLowerCase();
    const nameMatch = text.match(/nome é ([A-Z][a-z]+)/i) || text.match(/^([A-Z][a-z]+)/);
    const paciente = nameMatch ? nameMatch[1] : "Visitante";

    Object.keys(RISK_SCORE).forEach(sintoma => {
        if (lowerText.includes(sintoma)) {
            detectedSymptoms.push(sintoma);
            score += RISK_SCORE[sintoma];
        }
    });

    return {
        paciente: text.match(/nome é ([A-Z][a-z]+)/)?.[1] || "Visitante",
        sintomas: detectedSymptoms,
        scoreRisco: score,
        status: score >= 5 ? "URGENTE - Encaminhar ao Médico" : "Aguardar Triagem",
        timestamp: new Date().toISOString()
    };
}

app.get('/', (req, res) => {
    res.send('API Clinical-AI-Brief ativa!   Use o Postman ou Thunder Client para enviar mensagens.');
});

app.post('/analisar', (req, res) => {
    const { mensagem } = req.body;

    if (!mensagem) {
        return res.status(400).json({ erro: "A mensagem é obrigatória." });
    }

    const resumo = processClinicalData(mensagem);
    
    const db = JSON.parse(fs.readFileSync('atendimentos.json', 'utf8') || "[]");
    db.push(resumo);
    fs.writeFileSync('atendimentos.json', JSON.stringify(db, null, 2));

    res.json(resumo);
});

if (!fs.existsSync('atendimentos.json')) fs.writeFileSync('atendimentos.json', '[]');

app.listen(PORT, () => {
    console.log(`🚀 Clinical-AI API rodando em http://localhost:${PORT}`);
    console.log(`Envie um POST para /analisar com o corpo { "mensagem": "..." }`);
});