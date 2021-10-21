let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • DANA [089603042257]
│ • TRI [089603042257]
╰────

╭─「 Donasi • Non Pulsa 」
│ • GOPAY [081809102569] 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
