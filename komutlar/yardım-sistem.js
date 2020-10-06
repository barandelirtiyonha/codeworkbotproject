const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
.setColor("BLACK")
  .setThumbnail(message.author.avatarURL)
 .setDescription(`

**Nordx Ayarlanabilir Komutlar Menüsüne Hoşgeldin Dostum! :innocent:**

 
:pencil: \`Ban Sistemi\`

**Ban Sistemini Düzgün Kullanabilmek İçin\nLütfen Tüm Ayarları Yapınız!**
 !ban [kişi] [sebep] | Kullanıcıyı Banlar
 !banlog-ayarla #kanal | Banlog Kanalı Ayarlarsınız.
 !banyetkilisi-ayarla @rol | Ban Yetkilisi Ayarlarsınız.
 !bansistem-kapat | Ban Sistemini Kapatır ve Tüm Ayarları Sıfırlar!

:pencil: \`Kick Sistemi\`

**Kick Sistemini Düzgün Kullanabilmek İçin\nLütfen Tüm Ayarları Yapınız!**
 !kick [kişi] [sebep] | Kullanıcıyı Kickler
 !kicklog-ayarla #kanal | Kicklog Kanalı Ayarlarsınız.
 !kickyetkilisi-ayarla @rol | Kick Yetkilisi Ayarlarsınız.
 !kicksistem-kapat | Kick Sistemini Kapatır ve Tüm Ayarları Sıfırlar!

:pencil: \`Mute Sistemi\`

**Mute Sistemini Düzgün Kullanabilmek İçin\nLütfen Tüm Ayarları Yapınız!**
 !mute [kişi] [süre] [sebep] | Kullanıcıyı Muteler
 !mutelog-ayarla #kanal | Mutelog Kanalı Ayarlarsınız.
 !muteyetkilisi-ayarla @rol | Mute Yetkilisi Ayarlarsınız.
 !mute-alınacakrol @rol | Mutelenenden Alınacak Rolü Ayarlarsınız
 !muterol-ayarla | Mute Rolünü Ayarlarsınız
 !mutesistem-kapat | Mute Sistemini Kapatır ve Tüm Ayarları Sıfırlar!

:pencil: \`Abone Sistemi\`

**Abone Sistemini Düzgün Kullanabilmek İçin\nLütfen Tüm Ayarları Yapınız!**
 !abone [kişi] | Kullanıcıya Abone Rolü Verir
 !abonerol-ayarla @rol | Abone Rolünü Ayarlarsınız
 !aboneistatistik & @etiket | Yetkilinin Toplam Verdiği Abone Rolüne Bakarsınız
 !abonesayısını-sıfırla @kişi | Belirtilen Kişinin Abone Sayısını Sıfırlarsınız
 !abonekanal-ayarla #kanal | Abone Rol Verme Kanalını Ayarlarsınız
 !abonesistem-kapat | Abone Sistemini Kapatır ve Tüm Ayarları Sıfırlar!

:pencil: \`Otorol Sistemi\`

**Otorol Sistemini Düzgün Kullanabilmek İçin\nLütfen Tüm Ayarları Yapınız!**
 !otorol-ayarla @rol #kanal | Otorol ve Otorol Log Kanalı Ayarlar
 !otorol-kapat | Otorol Sistemini Kapatır Ve Tüm Ayarları Sıfırlar

:pencil: \`Ototag Sistemi\`

**Ototag Sistemini Düzgün Kullanabilmek İçin\nLütfen Tüm Ayarları Yapınız!**
 !ototag #kanal [tag] | Ototag ve Ototag Log Kanalı Ayarlar
 !ototag-kapat | Ototag Sistemini Kapatır Ve Tüm Ayarları Sıfırlar

:pencil: \`Sunucu Sıfırlama Sistemi\`

 !sunucu-sıfırla | Sunucudaki Rolleri Ve Kanalları Siler


`)

 .setFooter(`${message.author.tag} Tarafından İstendi.`)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ayarlanabilirkomutlar","ayarlanabilir-sistemler","ayarlanabilirsistemler"],
  permLevel: 0
};

module.exports.help = {
  name: 'yetkili',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};