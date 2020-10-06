const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
.setColor("BLACK")
  .setThumbnail(message.author.avatarURL)
 .setDescription(`

**Nordx Yardım Menüsüne Hoşgeldin Dostum! :innocent:**
Nordx **Kullanırken **\`@Nordx\`** Rolünü En Üste Taşı!**

 
:lock: \`w!kayıt-içerik\`

**Kullanıcı Kayıt Sistemi | Yetkili Kayıt Sistemi**

 :wrench: \`w!yetkili\`

**Ban | Kick | Otorol | Ototag | Abone | Mute | Sunucu-Sıfırla**

:pencil: \`w!genel-komutlar\`

**Avatar | Kullanıcı Bilgi | Sunucu Bilgi | Token**
`)

 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};