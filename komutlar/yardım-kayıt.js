const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
.setColor("BLACK")
.setThumbnail(message.author.avatarURL)
 .setDescription(`

**Nordx Kayıt Menüsüne Hoşgeldin Dostum! :innocent:**

 
:lock: \`!kullanıcı-kayıt-sistemi\`

**Bu Özellik Kullanıcıların Kendi Kendini Kayıt Etmesini Sağlar**

 :wrench: \`!yetkili-kayıt-sistemi\`

**Bu Özellik Yetkililerin Kullanıcıyı Kayıt Etmesini Sağlar**

`)

 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtiçeriği","kayıtiçerik"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-içerik',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};