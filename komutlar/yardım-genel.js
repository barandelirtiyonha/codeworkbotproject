const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
.setColor("BLACK")
  .setThumbnail(message.author.avatarURL)
 .setDescription(`

**Nordx Genel Komutlar Menüsüne Hoşgeldin Dostum! :innocent:**

 
:pencil: \`Avatar\`

 !avatar & !avatar @kullanıcı | Kullanıcının Avatarını Gösterir

:pencil: \`Sunucu Bilgi\`

 !sunucubilgi | Sunucunun Bilgilerini Gösterir

:pencil: \`Kullanıcı Bilgi\`

 !kullanıcıbilgi & !kullanıcıbilgi @kullanıcı | Kullanıcının Bilgilerini Gösterir

:pencil: \`Token\`

 !token | Botun Tokenini Atar

:pencil: \`Davet\`

 !davet | Botun Davet Linkini Atar


`)

 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["genelkomutlar","genel"],
  permLevel: 0
};

module.exports.help = {
  name: 'genel-komutlar',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};