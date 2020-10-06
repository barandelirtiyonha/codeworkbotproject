const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

exports.run = async (bot, msg, args) => {
  
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Şuan Herhangi Bir Oyunda Değil!"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
  
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
  
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  

        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `**Cumartesi`)
        .replace("Sunday", `Pazar`)

        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('YYYY [Yılı,] MMMM [Ayı,] dddd [Günü] (**DD/MM/YYYY**)')

        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)

        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)
     
        const uembed = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('Kullanıcı;')
        .addField(`Şu Anda Oynadığı Oyun`, userinfo.od1, false)
        .addField(`Durum`, userinfo.status, false)
        .setColor('03f2df')
        .addField(`Sunucu Katılım Tarihi`, userinfo.dctarihkatilma, false)
        .addField(`Discord Katılım Tarihi`, userinfo.dctarih, false)
        .addField(`Kullanıcı İD:`, userinfo.id, true)
        .addField(`Botmu:`, userinfo.bot, true)
        .addField(`Sahip Olduğu Roller:`, `${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu kullanıcıda hiçbir rol bulunmuyor**"}`, false)
        .addField(`Son Gönderdiği Mesaj:`, userinfo.sonmesaj, false)
        .setTimestamp()
        .setFooter(`${msg.author.tag} Tarafından İstendi.`)
        msg.channel.send(uembed)
    }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kullanıcıbilgi"],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};