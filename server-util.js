const {Client, RichEmbed } = require('discord.js')
 
const bot = new Client()
 
const util = require('minecraft-server-util')
 
const token = 'NzU5MTU2MjY1NjIwMDc4NjMy.X25ZXg.uYEmpqaCFIyuXtO5e-wNz8vrt7k'
 
const PREFIX = '!'
 
bot.on('ready', () =>{
    console.log('Bot has come online.')
})
 
bot.on('message', message =>{
 
    let args = message.content.substring(PREFIX.length).split(' ')
 
    switch(args[0]){
        case 'mc':
            util.status('chillcraftsmp.ddns.net', { port: 25580 }) // port is optional, defaults to 25565
                .then((response) => {
                    message.channel.send(response);
                })

                
        break
 
    }
 
})
 
bot.login(token)