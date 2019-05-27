const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am Alive!');
});

client.on('ready' , () =>{
    console.log('Im Alive')
    bot.user.setActivity('You Human', {type : "WATCHING"}).catch(console.error);
})

client.on('guildMemberAdd', member =>{

    const channel = member.guild.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`Welcome Human to MasteR HazE Server, ${member}, Do Whatever u want here!`)
})

client.on('message' , message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('What?');
            break;
        case 'insta' :
            message.reply('MasteR_HazE');
            break;
        case 'info':
            if(args[1] == 'version'){
            message.reply('Version 0.1 Beta');
            }else{
                message.reply('Invalid Command')
            }
            break;
        case 'fb' :
             message.reply('@masterhaze93');
            break; 
        case 'hi' :
             message.reply('Hello Fellow Human');
        case 'bot' :
             message.reply('You Summon me Human.?');
        case 'bye' :
             message.reply('Goodbye Human!');
        break;
        case 'clear':
        if(!args[1]) return message.reply('Error Command Not Found =.=!')   
        message.channel.bulkDelete(args[1]);
        break;
    }
})
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
