const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready' , () =>{
    console.log('Im Alive And Ready to Slay')
    bot.user.setActivity('You Darling', {type : "WATCHING"}).catch(console.error);
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
        case 'spam' :
            message.reply('Siapa yg Main Spam tu Bossku.?');
            break;
       case 'record' :
            message.reply('Ok Boss. Recording Check data at MH Server http://192.168.1.1/usb-data ');
            break;
        case 'rank' :
            message.reply('Eh kejar lvl ke tu .?');
            break;
        case 'welcome':
            if(args[1] == 'newbie'){
            message.reply('Selamat Datang ke Server Bg new player silakan baca segala peraturan server kami. Terima Kasih ');
            }else{
                message.reply('Invalid Command')
            }
            break;
        case 'hi' :
             message.reply('Hello Fellow Human');
            break;
        case 'status' :
             message.reply('Hi Im Ok running with 100% Health');
            break;
        case 'link' :
             message.reply('https://discord.gg/DuVpXAS');
            break;
        case 'mhx01' :
             message.reply('You Summon me Human.?');
            break;
        case 'love' :
             message.reply('You Love Me? awwwwww');
            break;
        case 'yes' :
             message.reply('Yes.? Really.?');
            break;
        case 'valorant' :
             message.reply('Nk join gak, Xpe la x nk ajak sekali');
            break;
         case 'phasmophobia' :
             message.reply('phasmophobia ke .? nk join plz');
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
