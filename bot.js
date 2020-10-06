// CodeShare
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Bot Başarıyla Hostlandı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
// CodeShare 

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
//////////////////////////////////////////////////////////////////////////////////

//-----------------------KOMUTLAR-----------------------\\

//KULLANICI KAYIT MESAJI\\

client.on("guildMemberAdd", async member => {
  let hgmesajı = db.fetch(`kgirismesajı_${member.guild.id}`)
  client.channels.get(hgmesajı).send(`Hoşgeldin ${member} Kayıt Olmak İçin !kayıt İsim Yaş`);
});

//KULLANICI KAYIT MESAJI SON\\

//------------------OTOROL ---------------------------\\
//------------------OTOROL ---------------------------\\
//------------------OTOROL ---------------------------\\

client.on("guildMemberAdd", async member => {
  
 let kanal = db.fetch(`judgekanal_${member.guild.id}`)   
 let rol = db.fetch(`judgerol_${member.guild.id}`)
let mesaj = db.fetch(`judgemesaj_${member.guild.id}`)
  
if(!kanal) return
member.addRole(rol)
  if(!mesaj) {
  client.channels.get(kanal).send(':loudspeaker: :inbox_tray: Otomatik Rol Verildi Seninle Beraber **`'+member.guild.memberCount+'`** Kişiyiz! <:evetlaa:718198275043492014> Hoşgeldin! **`'+member.user.username+'`**')
} else {
  
      var mesajs = mesaj.replace("-uye-", `${member.author.tag}`).replace("-uyetag-", `${member.author.username}`) .replace("-server-", `${member.guild.name}`).replace("-rol-", member.guild.roles.get(db.fetch(`judgerol_${member.guild.id}`)).name).replace("-onlineuyesayısı-", member.guild.members.filter(s => s.presenceStatus === "online").size).replace("-botsayisi-", member.guild.members.filter(s => s.bot).size) .replace('-kanalsayisi-' ,member.guild.channels.size ).replace("-uyesayisi-", member.guild.memberCount).replace("-bolge-", member.guild.region)
  
  client.channels.get(kanal).send(mesajs)
}

});
//-------------OTOROL SON------------------\\
//-------------OTOROL SON------------------\\
//-------------OTOROL SON------------------\\

//YETKİLİ KAYIT MESAJI\\

client.on("guildMemberAdd", async member => {
  let yetkilihgmesajı = db.fetch(`yetkilikgirismesajı_${member.guild.id}`)
  client.channels.get(yetkilihgmesajı).send(`Hoşgeldin ${member} Kayıt Olmak İçin Kayıt Kanalına İsmini Yaz Ve Yetkilileri Bekle!`);
});

//YETKİLİ KAYIT MESAJI SON\\

//OTOTAG\\

client.on("guildMemberAdd", async member => {
let judgedev = await db.fetch(`judgeteam?Ototag_${member.guild.id}`) 
let judgekanal = await db.fetch(`judgeteam?OtotagKanal_${member.guild.id}`)
if(!judgedev || !judgekanal) return
 
 member.setNickname(`${judgedev} ${member.user.username}`)
client.channels.get(judgekanal).send(`**${member.user.username}** Adlı Kullanıcıya Otomatik Tag Verildi! <a:no:710518885320884366>`)
 
});

//OTOTAG\\

