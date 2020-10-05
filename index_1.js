const Discord = require('discord.js');
const bot = new Discord.Client();

const client = new Discord.Client();

const token = 'NzU5MTU2MjY1NjIwMDc4NjMy.X25ZXg.uYEmpqaCFIyuXtO5e-wNz8vrt7k';

var PREFIX = '-';

    var status = 'Chillcraft'

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity(status, { type: 'WATCHING' })
})


bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");
    var version = '1.0.1';


    if(msg.content.startsWith("")){
        
    }
    switch(args[0]){
        
        case 'join':
            if (msg.member.voice.channel) {
                const connection = msg.member.voice.channel.join();
            msg.channel.send ('tryng to join!')
            }
            else if (!msg.member.voice.channel) msg.channel.send ('you arent in a call!')
            else msg.channel.send ('i cant join the vc ')
        break;
        case 'ping':
            msg.channel.send('pong!')
            break;
        case 'info':
            if(args[1] === 'version' ){
                msg.channel.send('This bot is running vesrion ' + version)
            }if(args[2] === 'DM' ){
                msg.author.send('The version of the bot is ' +version)
            }else if (args[1] === 'help' ){
                msg.channel.send('For deeper info type \n /info version to get what the verion of the bot is \nOr type /help')
            }if(args[1] === 'DM' ){
                    msg.author.send('For deeper info type \n /info version to get what the verion of the bot is \nOr type /help')
            }else msg.channel.send
        break;
        case 'clear':
            msg.channel.bulkDelete(+args[1]);
            msg.channel.send('Did it.')
            break;
        case 'dynmap':
            if (args[1] === "DM" )
            msg.author.send('http://chillcraftsmp.ddns.net:8043/#');
            else msg.channel.send("http://chillcraftsmp.ddns.net:8043/#")
            break;
        case 'help':
            if(args[1] === 'DM' ){
            msg.author.send('Imma help you if i can:\nType /clear to clear 10 messages. \nType /info for info about the info command and what it can do. \nType /ping And you know the respont, right? \nType /stat and your Ign to to gey your sky.lea.moe stats. Example: /website DNFneca.\nThanks for using this bot! ')
            }else if(args[1] === 'info' ){
            msg.channel.send('command Info has uses such as version of the bot. \nHere are some examples: /info version , /info uses also for anything you can type DM next to it to get that in your dms! ')
            break;
            //put all the info about the bot
            }if(args[2] === 'DM' ){
                msg.author.send('command Info has uses such as version of the bot. \nHere are some examples: /info version , /info uses also for anything you can type DM next to it to get that in your dms! ') 
            }else msg.channel.send('Imma help you if i can:\nType /clear to clear 10 messages. \nType /info for info about the info command and what it can do. \nType /ping And you know the respont, right? \nType /stat and your Ign to to gey your sky.lea.moe stats. Example: /website DNFneca.\nThanks for using this bot! ');
        break;
        case 'thanks':
            msg.channel.send('Only boomers say thanks. _Boomer_')
        break;
        case 'stat'
        :if (args[1] === 'help' ) msg.channel.send('ok so what this command does is search your username up on a site \n to see your skyblock stats type for example: \n -sb DNFneca Rasberry \n it will display your rasberry profile if you have one!')
        else msg.channel.send('https://sky.lea.moe/stats/'+args[1]+ +'/'+ +args[2])
            break;
        case 'stat'
        :if(args[1] === 'DNFneca' ){
            msg.channel.send('https://sky.lea.moe/stats/DNFneca/  \nhttps://plancke.io/hypixel/player/stats/DNFneca \nhttps://skyblock.matdoes.dev/profile/DNFneca')
            break;
        }
        case 'stat'
        :if(args[1] === 'DNFneca_R' ){
            msg.channel.send('https://sky.lea.moe/stats/DNFneca/Raspberry')
            break;
        }
        case 'stat'
        :if(args[1] === 'DNFneca_B' ){
            msg.channel.send('https://sky.lea.moe/stats/DNFneca/Banana')
            break;
        
        }
        case 'stat'
        :if(args[1] === 'Jerry_B' ){
            msg.channel.send('https://sky.lea.moe/stats/Jerrypet/Banana')
            break;
        }
        case 'stat'
        :if(args[1] === 'Jerry_R' ){
            msg.channel.send('https://sky.lea.moe/stats/Jerrypet/Raspberry')
            break;
        }
        case 'stat'
        :if(args[1] === 'Jerry' ){
            msg.channel.send('https://sky.lea.moe/stats/Jerrypet/ , \nhttps://plancke.io/hypixel/player/stats/Jerrypet \nhttps://skyblock.matdoes.dev/profile/Jerrypet')
            break;
        }
        case 'stat'
        :if(args[1] === 'Serious' ){
            msg.channel.send('https://sky.lea.moe/stats/WhySoSerious/ , \nhttps://plancke.io/hypixel/player/stats/WhySoSerious \nhttps://skyblock.matdoes.dev/profile/WhySoSerious')
            break;
        }
        case 'stat'
        :if(args[1] === 'Serious_R' ){
            msg.channel.send('https://sky.lea.moe/stats/WhySoSerious/Raspberry')
            break;
        }
        case 'stat'
        :if(args[1] === 'Serious_B' ){
            msg.channel.send('https://sky.lea.moe/stats/WhySoSerious/Banana')
            break;
        }
        case 'sb'
        :if(args[1] === 'useful' ){
            msg.channel.send('https://sky.lea.moe/ \nhttps://plancke.io/hypixel/player/stats/ \nhttps://skyblock.matdoes.dev/ \nhttps://auctions.craftlink.xyz/')
            break;
        }
        case 'stat'
            :msg.channel.send('https://sky.lea.moe/stats/' +args[1]);   
            if(args[1] === '' ){
            msg.channel.send('You probably havent put your name int \n \n _Have you_')
        }
        break;
        case 'stat'
            :if(args[1] === 'more' )
            msg.channel.send('This is still work in proggres')
        break;

        case 'bing'
            :msg.channel.send('_bong_')
        break;
        case 'user'
        :if(args[1] === 'DM' ){
            msg.author.send('Your username: ' +msg.author.username+ '\nYour ID:' +msg.author.id );  
        }else if (msg.channel.send('Your username: ' +msg.author.username+ '\nYour ID:' +msg.author.id ))  
        
        break;
        case 'DM'
        :const taggedUser = msg.mentions.users.first();
	    msg.taggedUser.username.send(`You wanted to kick: ${taggedUser.username}`);

    }       
    
      
              
})

bot.login('NzU5MTU2MjY1NjIwMDc4NjMy.X25ZXg.uYEmpqaCFIyuXtO5e-wNz8vrt7k');
