const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core')

const client = new Discord.Client();

const tokenbot = 'NzU5MTU2MjY1NjIwMDc4NjMy.X25ZXg.uYEmpqaCFIyuXtO5e-wNz8vrt7k';

const tokentbot = 'NzYyMDU1NDI2NzE1MDI1NDA4.X3jlbA.Ox7WT501XArpaFcKUCUTdZyIhZo';

var PREFIX = '!';

var status = 'Chillcraft';

var servers = {};

bot.on('ready', () =>{
    console.log('This bot is online!');
})


bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");
    var version = '1.0.2';


    if(msg.content.startsWith("")){
        
    }
    switch(args[0]){
        case 'play':{
            function play(connection, msg) {
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
            }
            if(!args[1]){
                msg.channel.send('You must provide a link to the song');
                return;
            }
            if(!msg.member.voiceChannel) {
                msg.channel.send('Please join a voice channel to play a song')
            }
            if(!servers[msg.guild.id]) servers[msg.guild.id] = {
                queue: []
            }

            var server = servers[msg.guild.id];

            server.queue.push(args[1]);

            if (msg.member.voice.channel) {
                const connection = msg.member.voice.channel.join() ;
                play(connection, msg);
                msg.channel.send ('Joining')
            }
        
        }

    }       
    
      
              
})

bot.login(tokentbot);
