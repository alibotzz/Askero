const fs = require('fs')
const chalk = require('chalk')

//contact details
global.Owner = ['4915902605449', '4915908637402', '15342531289'];
global.ownernumber = ['4915902605449', '4915908637402', '15342531289'];
global.ownername = "Askero"//owner name
global.ytname = "YT: Soon"
global.socialm = "GitHub: ExiqonBot"
global.location = "Germany"

global.botname = 'Wanda' //name of the bot

//sticker details
global.stickername = 'askero'
global.packname = 'Sticker By'
global.author = 'askero'
//console view/theme
global.themeemoji = '👑'
global.wm = "ღĹíͥőͣńͫღ botz inc."

//theme link
global.link = ''

//custom prefix
global.prefa = ['/']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story
global.multiplier = 100


//reply messages
global.mess = {
    done: '*erstellt von Ali Asker✨!* \n\n*wanda*\n\n*🧩 Bot link:* \nhttps://telegra.ph/file/9fb77b8a49fdfd5d55661.jpg\n',
    prem: '*Dieser Befehl kann nur von Premium-Nutzern verwendet werden.*',
    admin: '*Dieser Befehl kann nur von einem Admin verwendet werden.*',
    botAdmin: '*Dieser Befehl kann nur verwendet werden wenn der Bot Gruppenadmin ist.* ',
    owner: '*Dieser Befehl kann nur vom Ali Asker des Bots verwendet werden.*',
    group: '*Dieser Befehl ist nur für Gruppen verfügbar.*',
    private: '*Dieser Befehl ist nur für private Chats verfügbar.*',
    wait: '*Bir dur mrk ich arbeite daran...* ',    
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
