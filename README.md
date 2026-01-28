# Clinical-AI-Brief 🏥🤖

Este projeto é um protótipo de **API de Triagem Clínica** desenvolvido em **Node.js**. O objetivo é simular o core business de uma healthtech: transformar conversas desestruturadas de pacientes em dados organizados e priorizados.

## 🚀 Funcionalidades
- **Extração Inteligente:** Identifica automaticamente nome, sintomas e horários em textos informais.
- **Score de Risco:** Algoritmo que pontua a gravidade do caso (ex: Falta de ar = +5 pontos).
- **Classificação Automática:** Define se o caso é "URGENTE" ou "TRIAGEM" com base na pontuação.
- **Persistência Simples:** Salva os atendimentos em um arquivo JSON para simular um banco de dados.

## 🛠️ Tecnologias e Conceitos
- **Runtime:** Node.js
- **Framework:** Express.js (API REST)
- **Lógica:** Expressões Regulares (Regex) e manipulação de arrays (ES6+).
- **Boas Práticas:** Clean Code e Modularização.

## 📖 Por que este projeto?
Desenvolvido para demonstrar como a tecnologia pode otimizar canais **Omnichannel** em clínicas, reduzindo o tempo de resposta e organizando o fluxo de trabalho médico por prioridade clínica, e não apenas por ordem de chegada.
