const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  const codework = await db.fetch(`kayıtk_${message.guild.id}`)
  
  if(codework == null) return message.channel.send('');
  if (message.channel.id !== codework) return message.channel.send(`Sadece Kayıt Kanalından Kayıt Olabilirsiniz.`);
  if (codework == true) return; 
  if (codework == false) return message.channel.send(`Bu Sunucuda Kayıt Sistemi Aktif Edilmemiş.`);
 
  let user = message.member
  let guild = message.guild
  let isim = args[0];
  let yas = args[1];
  if (!isim) return message.channel.send(`İsmini girmelisin.`)
  if (!yas) return message.channel.send(`Yaşını girmelisin.`)

  user.setNickname(`[${isim}] [${yas}]`)
  setTimeout(function(){user.addRole(db.fetch(`kayıt_${message.guild.id}`))},3000)
  setTimeout(function(){user.removeRole(db.fetch(`kayıtalınacak_${message.guild.id}`))},4000)
  message.channel.send(`${message.author} Sunucuya Başarıyla Kayıt oldun !`)
  message.guild.channels.get(db.fetch(`kayıtlog_${message.guild.id}`)).send(`<a:kayit:707928076926976061> ${message.author} Adlı kullanıcı Başarılı Şekilde Kayıt Oldu ! <a:oldu:707928398902853713> `);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "yetkili"
}

exports.help = {
  name: 'kayıt',
  description: "Sunucuya kayıtolmaya yarar",
  usage: 'kayıt <isim> <yaş>'
}
