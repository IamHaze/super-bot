const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = '$';

bot.on('ready' , () =>{
    console.log('Im Alive And Ready to Slay')
    bot.user.setActivity('COKENG Player', {type : "WATCHING"}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.find(channel => channel.name === "chat-bod");
    if(!channel) return;

    channel.send(`Welcome Human, ${member}, Do read our Informasi Text Channnel!`)
})

bot.on('message' , message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'bot':
            message.reply('Nk apa Bossku?');
            break;
        case 'owner' :
            message.reply('@OptimusPrimeXxx#1374 Dia ni paling hebat');
            break;
        case 'warning' :
            message.reply('@Haziq29#7494 Bosskita ni jgn kacau dia');
            break;
        case 'welcome':
            if(args[1] == 'Welcome To MUGG Server'){
            message.reply('Please read our Informasi Channel ');
            }else{
                message.reply('Invalid Command')
            }
            break;
        case 'text' :
             message.reply('Welcome to MUGG firstly read our Informasi Text Channnel');
            break; 
        case 'developer' :
             message.reply('@🎃Labu Labi🐢#6854 @NAGA®#3025 Yang Berbahagia Tuan Developer');
            break; 
        case 'president' :
             message.reply('@SoulRiders#5752  Perdana Menteri Kita ni');
            break; 
        case 'hi' :
             message.reply('Hello Fellow Human');
            break;
        case 'mhx01' :
             message.reply('You Summon me Human.?');
            break;
        case 'bye' :
             message.reply('Goodbye Human!');
        break;
        case 'cikgu-rp' :
             message.reply('Bosskita ni tukang ajar RP @Mugi @AbeAmir Dgr Baik2!');
            break;
        case 'clear':
        if(!args[1]) return message.reply('Nk clear berapa ni boss =.=!')   
        message.channel.bulkDelete(args[1]);
        break;
        case 'info-jail' :
             message.reply('Boss blh baca dkt #jail-role sana ada semua info Boss');
        break;
    }
})
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
