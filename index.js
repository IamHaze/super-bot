const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready' , () =>{
    console.log('Im Alive')
    bot.user.setActivity('Admin', {type : "Tgh Perhati"}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`Welcome Human to MasteR HazE Server, ${member}, Do Whatever u want here!`)
})

bot.on('message' , message=>{
  
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
            break;
        case 'admin' :
             message.reply('@Haziq29#7494');
            break;
        case 'bot' :
             message.reply('You Summon me Human.?');
            break;
        case 'bye' :
             message.reply('Goodbye Human!');
        break;
        case 'clear':
        if(!args[1]) return message.reply('Error Command Not Found =.=!')   
        message.channel.bulkDelete(args[1]);
        break;
    }
})
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
