const Discord = require("discord.js");
const db = require('quick.db')
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {
  
  const codeworkmute = await db.fetch(`mutesistemi_${message.guild.id}`)

if(!message.member.roles.has(db.fetch(`muteyetkilirol_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
  
const embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription('Birini Mutelemek için Mute Yetkisine Sahip Olmalısın!')
return message.channel.send(embed)
}
let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kişi) {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription('Muteleyeceğin Kullanıcıyı Etiketle Yada İD Belirt!')
return message.channel.send(embed)
}
 
let zaman = args[1]
if(!args[1]) {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription(`<@${kişi.id}> adlı kullanıcı ne kadar süre Mutelenicek?`)
return message.channel.send(embed)
}
let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Sebep belirtilmemiş.'
  
const hapis = new Discord.RichEmbed()
.setColor('RED')
.setDescription(`Bir Kullanıcı Mutelendi!`)
.setThumbnail(kişi.user.avatarURL)
.addField(`Kullanıcı`, kişi,)
.addField(`Yetkili`, `<@${message.author.id}>`,)
.addField(`Sebebi`, sebep,)
.addField(`Süresi`, zaman.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün'),)
.setTimestamp()

const dm = new Discord.RichEmbed()
.setColor('BLUE')
.setDescription(`**${message.guild.name}** Adlı Sunucuda Mutelendin!`)
.addField(`Muteleyen Yetkili`,`<@${message.author.id}>`)
.addField(`Sebebi`, sebep,)
.addField(`Süresi`, zaman.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün'),)

const tahliye = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`Bir Kullanıcının Mutesi Kaldırıldı!`)
.setThumbnail(kişi.user.avatarURL)
.addField(`**Kullanıcı:**`, kişi,)
.addField(`Yetkili`, `<@${message.author.id}>`,)
.addField(`Sebebi`, sebep,)
.addField(`Süresi`, zaman.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün'),)
.setTimestamp()

const embed2 = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`${kişi} adlı kullanıcı \`${zaman}\`lığına mutelendi!`)
  
kişi.addRole(db.fetch(`muterol_${message.guild.id}`)); //Mute Rolü
kişi.roles.forEach(r => {
kişi.removeRole(r.id)
db.set(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )
})  
client.channels.get(db.fetch(`mutelog_${message.guild.id}`)).send(hapis) //Mute Log
kişi.send(dm) 
message.channel.send(embed2)
setTimeout(async () =>{
kişi.removeRole(db.fetch(`mutealıncakrolü_${message.guild.id}`)) //Alınacak ROL İD
client.channels.get(db.fetch(`mutelog_${message.guild.id}`)).send(tahliye) //Jailden Çıkınca Log Mesajı Hangi Kanala Gidicekse O Kanalın İDSİ.
}, ms(zaman));
setTimeout(async () =>{
message.guild.roles.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.addRole(i)}
})
}, ms(zaman));
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['mutele'],
permLevel: 0
};  
exports.help = {
name: 'mute',
description: 'Bir kullanıcıyı hapise atmaya yarar.',
usage: 'jail'
};