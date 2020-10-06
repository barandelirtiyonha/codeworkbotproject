const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let mutealıncakrol = message.mentions.roles.first()
  if (!mutealıncakrol) return message.channel.send('Lütfen Alınacak rolü etiketlermisin?')
   
  db.set(`mutealıncakrolü_${message.guild.id}`, mutealıncakrol.id)
  message.channel.send(`Alınacak Rol Başarıyla Ayarlandı; **${mutealıncakrol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'mute-alınacakrol',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};