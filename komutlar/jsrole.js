const Discord = require('discord.js');
module.exports.run = async (bot, message, args, guild, user) => {
    let sahip = message.member
   let jsrolu = message.guild.roles.find('id', '722069348109385838')
  if(message.guild.id !== '707632395397890058') return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu Rolü <#722069376932774018> Kanalından Alabilirsin !').setColor('RED'));
    if(!jsrolu) return message.channel.send('Bu sunucuda **JavaScript** isminde bir rol bulunmamakta.')
      if(message.member.roles.has(jsrolu.id)) return message.channel.send('❌ | **Bu Role Zaten Sahipsin!**')

  try {
      await (sahip.addRole(jsrolu.id));
    const embed = new Discord.RichEmbed()
      .setColor('GREEN')
      .setTitle('<a:okey:711999433486893058> | Başarılı! JavaScript Rolü Verildi.')
      .addField("**<:Duyur:763130472879357973> Diğer Roller Hakkında Bilgi Almak İçin;**","<#722750731664490538>")
      .setFooter(`${message.author.tag} Tarafından İstendi.`)
      message.channel.sendMessage(embed)
    } catch (error) {
      return message.channel.send('❌ | **Bu Role Zaten Sahipsin!****')
   
};
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "js",
  description: "js rolu",
  usage: "js"
};