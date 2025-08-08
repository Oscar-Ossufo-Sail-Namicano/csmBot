const { delay } = require('./general')
const commands = require('./commands/members')
const { geminiResponse } = require('./iaResponse')

exports.commandHandler = async function (sock, text, sender) {
    const command = Object.values(commands).find(cmd => cmd.cmd.includes(text))

    if (!command) {
        sock.sendPresenceUpdate('composing', sender);
        const response = await geminiResponse(text)
        
        await sock.sendMessage(sender, {text: response});
        return

    }
    command.handler(sock, sender, text);


}