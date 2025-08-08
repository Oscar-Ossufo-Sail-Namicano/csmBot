const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore } = require('@whiskeysockets/baileys')
const { Boom } = require('@hapi/boom')
const qrcode = require('qrcode-terminal')

const { delay } = require('./general') 
const { commandHandler } = require('./commandHandler')

exports.connect = async function () {
      const { state, saveCreds } = await useMultiFileAuthState('auth_info')
      const { version } = await fetchLatestBaileysVersion()
    
      const sock = makeWASocket({
        version,
        auth: state
      })
    
      sock.ev.on('creds.update', saveCreds)
    
      // Show qr
    sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect, qr } = update
      if (qr) qrcode.generate(qr, { small: true })
    
      if (connection === 'close') {
        const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== 401
        console.log('Conexão encerrada. Reconectando...', shouldReconnect)
        if (shouldReconnect) {
          exports.connect()

        }
      }
    })
    return sock;
}


exports.onMessageUpsert = async (sock) => {
    sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return

    const sender = msg.key.remoteJid
    const texto =
        msg.message?.conversation ||
        msg.message?.extendedTextMessage?.text ||
        msg.message?.imageMessage?.caption ||
        msg.message?.videoMessage?.caption ||
        msg.message?.documentMessage?.caption ||
        msg.message?.buttonsResponseMessage?.selectedButtonId ||
        msg.message?.listResponseMessage?.title

    if (!texto) {
        console.log(`Mensagem não textual recebida de ${sender}. Ignorando.`)
        return
    }

    await commandHandler(sock, texto.toLowerCase(), sender);

    })

}