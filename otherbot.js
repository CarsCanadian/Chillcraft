const Discord = require('discord.js');

const client = new Discord.Client();

//const { prefix, token } = require("./config.json");

const queue = new Map();

const PREFIX = '-';

const token = 'NzU5MTU2MjY1NjIwMDc4NjMy.X25ZXg.uYEmpqaCFIyuXtO5e-wNz8vrt7k'


var status = 'Chillcraft'

client.once ('ready', () => {
    console.log('Chillcraft Bot is online!')
    client.user.setActivity(status, { type: 'WATCHING' })
})

client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    if (message.content.startsWith(`${PREFIX}play`)) {
        execute(message, serverQueue);
        return;
      } else if (message.content.startsWith(`${PREFIX}skip`)) {
        skip(message, serverQueue);
        return;
      } else if (message.content.startsWith(`${PREFIX}stop`)) {
        stop(message, serverQueue);
        return;
      } else {
        message.channel.send("You need to enter a valid command!");
      }
    });
    
    async function execute(message, serverQueue) {
      const args = message.content.split(" ");
    
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel)
        return message.channel.send(
          "You need to be in a voice channel to play music!"
        );
      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
          "I need the permissions to join and speak in your voice channel!"
        );
      }
    
      const songInfo = await ytdl.getInfo(args[1]);
      const song = {
        title: songInfo.title,
        url: songInfo.video_url
      };
    
      if (!serverQueue) {
        const queueContruct = {
          textChannel: message.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [],
          volume: 5,
          playing: true
        };
    
        queue.set(message.guild.id, queueContruct);
    
        queueContruct.songs.push(song);
    
        try {
          var connection = await voiceChannel.join();
          queueContruct.connection = connection;
          play(message.guild, queueContruct.songs[0]);
        } catch (err) {
          console.log(err);
          queue.delete(message.guild.id);
          return message.channel.send(err);
        }
      } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} has been added to the queue!`);
      }
    }
    
    function skip(message, serverQueue) {
      if (!message.member.voice.channel)
        return message.channel.send(
          "You have to be in a voice channel to stop the music!"
        );
      if (!serverQueue)
        return message.channel.send("There is no song that I could skip!");
      serverQueue.connection.dispatcher.end();
    }
    
    function stop(message, serverQueue) {
      if (!message.member.voice.channel)
        return message.channel.send(
          "You have to be in a voice channel to stop the music!"
        );
      serverQueue.songs = [];
      serverQueue.connection.dispatcher.end();
    }
    
    function play(guild, song) {
      const serverQueue = queue.get(guild.id);
      if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
      }
    
      const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
      serverQueue.textChannel.send(`Start playing: **${song.title}**`);
    
    switch (args[0]) {
        case 'dynmap':
            if (args[1] === "DM" )
            message.author.send('http://chillcraftsmp.ddns.net:8043/#');
            else message.channel.send("http://chillcraftsmp.ddns.net:8043/#")
            break;
        case 'help':
            if (args[1] === "DM" )
            message.author.send("Hello guys this is a brand new bot! \n all avalable commands are: \n /dynmap \n all of the current commands have a DM option \n Example: dynamp DM ,it will send you a DM!");
            else
            message.channel.send("Hello guys this is a brand new bot! \n all avalable commands are: \n /dynmap \n all of the current commands have a DM option \n Example: dynamp DM ,it will send you a DM!");
            break;
        case "join":
            voiceChannel.join()
            .then(connection => {

            });
            
    }
    
};

client.login(token);
