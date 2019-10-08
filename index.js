const Discord = require('discord.js')
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready' , () =>{
    console.log('Im Alive')
    bot.user.setActivity('MUGG Players', {type : "WATCHING"}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.find(channel => channel.name === "chat-bod");
    if(!channel) return;

    channel.send(`Welcome Human Malaysia Underground Gaming RP MUGG, ${member}, Do read our Informasi Text Channnel!`)
})

bot.on('message' , message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'bot':
            message.reply('What?');
            break;
        case 'owner' :
            message.reply('@Haziq29#7494  The Great One');
            break;
        case 'warning' :
            message.reply('@Haziq29#7494  Kuat ugut org ini org');
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
             message.reply('@🎃Labu Labi🐢#6854 @NAGA®#3025 The Geniuses');
            break; 
        case 'president' :
             message.reply('@SoulRiders#5752  The Master Mind');
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
        case 'clear':
        if(!args[1]) return message.reply('Nk clear berapa ni boss =.=!')   
        message.channel.bulkDelete(args[1]);
        break;
        case 'info-jail' :
             message.reply('SENARAI SENJATA DAN TEMPAT YANG BOLEH DIGUNAKAN SEMASA ROMPAKAN:-

1. Seluruh Kedai 7E - Hand Gun (Pistol SAHAJA!)
2. Bank - Hand Gun, Rifle & Sniper
3. Vehicle Robbery - Tidak Menggunakan Sebarang Senjata Api

JENIS KESALAHAN, JUMLAH SAMAN & TEMPOH PENJARA:-

1. Merompak Kedai 7E --- RM30,000 --- 5 Tahun (5 Minit)
2. Merompak Bank/Kedai Emas--- RM60,000 --- 10 Tahun (10 Minit)
3. Menculik --- RM40,000 --- 5 Tahun (5 Minit)
4. Salah Guna Permit Senjata/Tiada Permit --- RM20,000/Senjata --- 5 Tahun (5 Minit)
5. Membunuh Dengan Niat/Tiada Niat --- RM25,000 --- 2 Tahun (2 Minit)
6. Mencuri Kereta Rakyat/Orang Awam --- RM10,000 --- 2 Tahun (2 Minit)

pdrm 
@cop PDRM
NOTA PEKELILING 07/2019 

Sesiapa yang didapati bersalah akan didenda dan dijatuhkan hukuman penjara seperti berikut:

Kesalahan membunuh dengan niat atau tanpa niat di tempat yang tidak patut- Denda RM25,000 atau 2 tahun penjara atau kedua-duanya sekali. 

Kesalahan merompak kedai kecil dan kereta- Denda RM30,000 berserta 5 tahun penjara.

Kesalahan merompak Bank, Facebook dan kedai emas- Denda RM60,000 berserta 10 tahun penjara.

Kesalahan menculik- Denda RM40,000 berserta 5 tahun penjara

Kesalahan memiliki senjata api tanpa permit dan salah guna permit senjata api- Denda RM20,000 setiap pucuk senjata api yang dirampas atau penjara tidak kurang dari 5 tahun. 

Kesalahan cuai (kehilangan kenderaan Kerajaan oleh pegawai polis dalam waktu bertugas atau operasi)- Denda RM20,000

Kesalahan mencuri atau mengambil  kenderaan bukan haknya- Denda RM10,000 atau penjara 2 tahun

Menguna/menunjuk/membuka senjata api di kawasan ZONE SELAMAT boleh dikenakan hukuman penjara minimum 15 tahun dan tidak melebihi 30 tahun penjara serta Denda RM50,000

Jaminan- mulai RM125,000, maksimal RM500,000

Sekian, 

::pdrm: 

INSTITUSI POLIS MUG RP MALAYSIA

"POLIS DAN MASYARAKAT MUG RP, BERPISAH TIADAl');
            break; 
    }
})
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
