const http = require('http');
const { connect, onMessageUpsert } = require('./utils/index');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });



// Cria um pequeno servidor HTTP para UptimeRobot
const PORT = process.env.PORT  || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot está rodando\n');
}).listen(PORT, () => {
});

async function startBot() {
  const sock = await connect();
  await onMessageUpsert(sock);
}


startBot();