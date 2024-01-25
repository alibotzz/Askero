const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['49491741711168']
global.ownername = "ღƐ×ͥΐզͣօͫήღ"//owner name
global.ytname = "YT: Soon"
global.socialm = "GitHub: ExiqonBot"
global.location = "Germany"

global.botname = 'ღƐ×ͥΐզͣօͫή BØ₸ღ' //name of the bot

//sticker details
global.stickername = 'ღƐ×ͥΐզͣօͫήღ'
global.packname = 'Sticker By'
global.author = 'ღƐ×ͥΐզͣօͫή BØ₸ღ'
//console view/theme
global.themeemoji = '👑'
global.wm = "Exiqon botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/EGqCW9HeVoq3W2KmgX3Ri0'

//custom prefix
global.prefa = ['!']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 ღƐ×ͥΐզͣօͫή BØ₸ღ 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: '*Dieser Befehl kann nur von Premium-Nutzern verwendet werden.*',
    admin: '*Dieser Befehl kann nur von einem Admin verwendet werden.*',
    botAdmin: '*Dieser Befehl kann nur verwendet werden wenn der Bot Gruppenadmin ist.* ',
    owner: '*Dieser Befehl kann nur vom Besitzer des Bots verwendet werden.*',
    group: '*Dieser Befehl ist nur für Gruppen verfügbar.*',
    private: '*Dieser Befehl ist nur für private Chats verfügbar.*',
    wait: '*In Bearbeitung...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
