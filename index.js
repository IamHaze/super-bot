const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = '$';

bot.on('ready' , () =>{
    console.log('Im Alive And Ready to Slay')
    bot.user.setActivity('WORP Player', {type : "WATCHING"}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.find(channel => channel.name === "general-chat");
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
            message.reply('SlayMika Dia ni paling hebat');
            break;
        case 'warning' :
            message.reply('JOJO Bosskita ni jgn kacau dia');
            break;
        case 'welcome':
            if(args[1] == 'newbie'){
            message.reply('Selamat Datang ke  WORP Server Bg new player silakan baca segala peraturan server kami. Terima Kasih ');
            }else{
                message.reply('Invalid Command')
            }
            break;
        case 'hi' :
             message.reply('Hello Fellow Human');
            break;
        case 'status' :
             message.reply('Hi Server Currently in Development. Thanks For your patient. We will update soon');
            break;
        case 'ip' :
             message.reply('Sabar Bossku IP blm ada lg ni tgh buat nt sy bgtau bila dh ada ye');
            break;
        case 'mhx01' :
             message.reply('You Summon me Human.?');
            break;
        case 'bye' :
             message.reply('Goodbye Human!');
        break;
        case 'whitelist' :
             message.reply('Please Refer Our #whitelist-guide');
        break;
        case 'clear':
        if(!args[1]) return message.reply('Nk clear berapa ni boss =.=!')   
        message.channel.bulkDelete(args[1]);
        break;
        
    }
})
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
