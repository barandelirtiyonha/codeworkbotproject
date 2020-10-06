const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let mutelirol = message.mentions.roles.first()
  if (!mutelirol) return message.channel.send('Lütfen Muteli rolünü etiketlermisin?')
   
  db.set(`muterol_${message.guild.id}`, mutelirol.id)
  message.channel.send(`Abone Rolü Başarıyla Ayarlandı; **${mutelirol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'muterol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};