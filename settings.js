const fs = require('fs')
const chalk = require('chalk')

global.sessionID = process.env.SESSIONID || "KAVI-X-SESSION-ID~n5BAibbR#ViM6_qWCzqI_zyLle7H9x0lkG7mjdnT9IuDFvc3mypw"
global.botname = process.env.BOTNAME || "Malindu Nethmima"
global.ownernumber = process.env.OWNERNUMBER || "94767489570"
global.ownername = process.env.OWNERNAME || "Malindu Nethmina"
global.websitex = process.env.WEBSITEX || "https://whatsapp.com/channel/0029VbB5aDTEawdjfjw69d1b"
global.wagc = process.env.WAGC || "https://whatsapp.com/channel/0029VbB5aDTEawdjfjw69d1b"
global.botscript = process.env.BOTSCRIPT || "https://github.com/KaviDeveloperSe/KAVI-X-BOT"
global.packname = process.env.PACKNAME || "Malindu Nethmima"
global.author = process.env.AUTHOR || "Malindu Nethmima"
global.creator = process.env.CREATOR || "94767489570@s.whatsapp.net"
global.botprefix = process.env.BOTPREFIX || "."
global.restart = process.env.RESTART || true
global.mongoDB = process.env.MONGODB_URI || "mongodb+srv://ketkshqAqjXygEF5:ketkshqAqjXygEF5@freeuri.dmkyoml.mongodb.net/nethmina-0767489570?retryWrites=true&w=majority&appName=freeuri"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
