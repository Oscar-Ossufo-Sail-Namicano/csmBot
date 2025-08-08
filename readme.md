# WhatsApp Bot com Baileys

Este projeto é um **bot para WhatsApp** utilizando a biblioteca [Baileys]. Ele responde a mensagens, funciona com UptimeRobot e usa variáveis de ambiente com suporte a `.env`.

---

## 📁 Estrutura de Pastas
.
├── .env
├── package.json
├── src/
│ ├── index.js # Arquivo principal que inicia o bot e o servidor
│ └── utils/
│ ├── index.js # Contém as funções connect e onMessageUpsert
│ ├── commandHandler.js
│ ├── iaResponse.js
│ ├── config.js
│ ├── general.js
│ ├── commands
│    └── members.js
 

---

## ⚙️ Pré-requisitos

- Node.js >= 18
- Conta no WhatsApp

---

## 🧪 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Oscar-Ossufo-Sail-Namicano/csmBot.git
cd csmBot

2. Instale as dependências:

3. inicie o bot
```bash
npm install

node src/index.js

Funcionamento
O bot usa Baileys para se conectar ao WhatsApp.

A função connect() realiza a autenticação.

A função onMessageUpsert() escuta e trata novas mensagens recebidas.

Um servidor HTTP é criado para manter o bot online (ideal para UptimeRobot ou render.com).

## Possibilidades de Expansão
Integração com bancos de dados

Comandos por prefixo

Mensagens com botões, imagens ou listas

Sistema de plugins

Integração com APIs externas