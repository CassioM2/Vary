const Discord = require('discord.js');
const database = require('../database.js');
const config = require('../config.json');

function slots(_números) {
    _números = _números.toString();
    var texto = ``, 
    números = { 
        1: ':one:', 
        2: ':two:', 
        3: ':three:', 
        4: ':four:', 
        5: ':five:', 
        6: ':six:', 
        7: ':seven:', 
        8: ':eight:', 
        9: ':nine:', 
        0: ':zero:'
    };
    for(let i =0; i < _números.length; i++)
        texto += números[parseInt(_números[i])];
    return texto;
}

exports.run = (vary, message, args) => {
    database.Guilds.findOne({
        _id: message.guild.id
    }, function (error, servidor) {
        if(servidor){
            if(args[0] === 'contador' || args[0] === 'counter'){
                let channel = message.mentions.channels.first() || message.channel;
                if(channel){
                    servidor.Contador = true;
                    servidor.ChatContador = channel.id;
                    servidor.save();
                    message.channel.send(`Contador definido: ${channel}`);
                    message.guild.channels.get(servidor.ChatContador).setTopic(`Temos um total de: ${slots(message.guild.memberCount)} Membros`)
                } else {
                    message.reply(`Mencione um canal`)
                }
            } else if(args[0] === 'welcome' || args[0] === "bem-vindo") {
                let channel = message.mentions.channels.first();
                if(channel){
                    servidor.Welcome = true;
                    servidor.WelcomeChannel = channel.id;
                    servidor.save();
                    message.channel.send(`Chat de Entrada setado em: ${channel}`);
                } else {
                    message.channel.send('Qual será o canal?')
                }
            } else if(args[0] === 'leave' || args[0] === "saída" || args[0] === "saida") {
                let channel = message.mentions.channels.first();
                if(channel){
                    servidor.Leave = true;
                    servidor.LeaveChannel = channel.id;
                    servidor.save();
                    message.channel.send(`Chat de saída setado em: ${channel}`);
                } else {
                    message.channel.send('Qual será o canal?')
                }
            } else {
                message.channel.send(new Discord.RichEmbed()
                    .addField(`Comandos`, '`v;config contador`, `v;config welcome`, `v;config leave`')
                    .addField(`Módulos`, `
                    Contador: ${servidor.Contador ? '<:FySwitchOn:552677398294822915>' : '<:FySwitchOff:552677397317681172>'}
                    Mensagens de boas-vindas: ${servidor.Welcome ? '<:FySwitchOn:552677398294822915>' : '<:FySwitchOff:552677397317681172>'}
                    Mensagens de saída: ${servidor.Leave ? '<:FySwitchOn:552677398294822915>' : '<:FySwitchOff:552677397317681172>'}
                    Cargop automático: ${servidor.AutoRole ? '<:FySwitchOn:552677398294822915>' : '<:FySwitchOff:552677397317681172>'}
                    `)
                );
            }
        } else {
            let servidor = new database.Guilds({
                _id: message.guild.id,
                Contador: false,
                ChatContador: 'Nenhum',
                Welcome: false,
                WelcomeChannel: 'Nenhum',
                Leave: false,
                AutoRole: false,
                AutoRoleID: false,
                LeaveChannel: 'Nenhum'
            });
            servidor.save();
            message.reply(`Use o comando novamente!`);
        }
    });
}

exports.config = {
    name: 'config',
    aliases: []
}
