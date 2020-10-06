const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`mutesistemi_${message.guild.id}`)) return message.channel.send('Görünüşe Göre Mute Sistemi Zaten Kapalı Görünüyor :).')
   

   message.reply('Mute Sistem Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`mutesistemi_${message.guild.id}`)
db.delete(`mutelog_${message.guild.id}`)
db.delete(`muterol_${message.guild.id}`) 
db.delete(`mutealıncakrolü_${message.guild.id}`) 
db.delete(`muteyetkilirol_${message.guild.id}`) 


}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'mutesistem-kapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};