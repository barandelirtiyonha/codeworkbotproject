const Discord = require('discord.js')
exports.run = function(client, message, args) {
let kişi = message.mentions.users.first()
let user = message.author
if(!args[0]) {
const embed = new Discord.RichEmbed()
.setDescription(`**${user.tag}** Avatarın;`)
.setImage(user.avatarURL)
  message.channel.send(embed)}
  if(kişi) {
    const embed2 = new Discord.RichEmbed()
.setDescription(`**${kişi.tag}** Adlı Kişinin Avatarı;`)
.setImage(kişi.avatarURL)
  message.channel.send(embed2)}
    
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar'
  };