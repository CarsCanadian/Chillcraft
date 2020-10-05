const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core')

const client = new Discord.Client();

const tokenbot = 'NzU5MTU2MjY1NjIwMDc4NjMy.X25ZXg.uYEmpqaCFIyuXtO5e-wNz8vrt7k';

const tokentbot = 'NzYyMDU1NDI2NzE1MDI1NDA4.X3jlbA.Ox7WT501XArpaFcKUCUTdZyIhZo';

var PREFIX = '-';

var status = 'Chillcraft';

var servers = {};

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity(status, { type: 'WATCHING' })
})


bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");
    var version = '1.0.2';


    if(msg.content.startsWith("")){
        
    }
    switch(args[0]){
        
        /*case 'join':
            if (msg.member.voice.channel) {
                const connection = msg.member.voice.channel.join();
            msg.channel.send ('tryng to join!')
            }
            else if (!msg.member.voice.channel) msg.channel.send ('you arent in a call!')
            else msg.channel.send ('i cant join the vc ')
        break;
        case 'play':{
            
            /*function play(connection, msg)
                var server = servers[msg.guild.id];

                server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

                server.queue.shift();

                server.dispatcher.on('end', function(){
                    if(server.queue[0]){
                        play(connection, msg);
                    }else {
                        connection.disconnect();
                    }
                });

            if(!args[1]){
                msg.channel.send('You must provide a link to the song');
                return;
            }
            if(!msg.member.voiceChannel) {
                msg.channel.send('Please join a voice channel to play a song')
            }
            if(!servers[msg.guild.id]) servers[msg.guild.is] = {
                queue: []
            }

            let server = servers[msg.guild.id];

            sevrer.queue.push(args[1]);

            if(!msg.guild.voiceConnection) msg.member.voiceChannel.join().then(function(connection){
                play(connection, msg);
            })
        }*/
        case 'ping':
            msg.channel.send('pong!')
            break;
        case 'info':
            if(args[1] === 'version' ){
                msg.channel.send('Version ' + version)
            }if(args[2] === 'DM' ){
                msg.author.send('The version of the bot is ' + version)
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
        case 'server':
            msg.channel.send('chillcraftsmp.ddns.net:25580')
        case 'help':
            if(args[1] === 'mc'){
                msg.channel.send('Here is a list of commands you can use in game:\n/tps | Tells you the server tps\n/afk | sets your status to afk in game\n/msg (playername) | preivetly have a conversation with other players\n/r | Reply to that conversation')
                break;
            }
            else if(args[1] === 'server-info'){
                msg.channel.send('Server IP: chillcraftsmp.ddns.net:25580\nDynmap IP: http://chillcraftsmp.ddns.net:8043/')
                break;
            }
            else if(args[1] === 'bot'){
                msg.channel.send('ATM this bot is pretty useless, but heres a list of commands:\n-thanks | null\n-stat (playername) (profile) | Searches there Hypixel skyblock status (profile argument is optional)\ndynmap | Gives you the IP for the dynmap')
                break;
            }
            msg.channel.send('Please enter what you need help with, Here is a list of valid aruments\n-help mc | Shows a list of in-game commadn that are available to every player\n-help bot | Shows a list of bot commands')
            break;
        case 'thanks':
            msg.channel.send('Only boomers say thanks. _Boomer_')
        break;
        case 'stat':
        if(args[1] === undefined)
            msg.channel.send('Please enter a username to search')
        else if(args[1] + args[2])
            msg.channel.send('Here is your skyblock stats\nhttps://sky.lea.moe/stats/' + args[1] + '/' + args[2])
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

bot.login(tokentbot);
