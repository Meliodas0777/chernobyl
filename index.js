const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require("fs");
console.log("🔥Ligando o Meliodas..");
const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  disabledEvents: ["typingStart", "typingStop", "guildMemberSpeaking"],
  messageCacheLifetime: 1680,
  messageSweepInterval: 1680
});
const config = require("./config.json");
const { Client, Util } = require("discord.js");
var token = config.token;
var prefix = config.prefix;
var dono = config.dono;

client.login(token);

client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    if (err.code == "MODULE_NOT_FOUND") return;
    console.error(err);
  }
});

client.on("ready", () => {
  console.log(
    `O Meli Foi Iniciado.\nServidores Totais: ${client.guilds.size}.\nUsuários Totais: ${client.users.size}.`
  );
  client.user.setPresence({ game: { name: config.Status, type: "STREAMING" } });

  client.user.setUsername("๖ۣۜMeliodas'ᴬᴸ 有");

  let status = [
    { name: `Use m!ajuda`, type: "STREAMING" },
    { name: `Corona Virus`, type: "STREAMING" }
  ];

  function st() {
    let rs = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 10000); //10000 = 10Ms = 10 segundos

  client.on("guildCreate", async guild => {
    const nserver = new Discord.RichEmbed()
      .setTitle(client.user.username)
      .setDescription(
        `Entrei Em Um Novo Servidor:\n\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}\nTotal De Servidores: ${client.guilds.size}\nTotal De Membros: ${client.users.size}`
      )
      .setThumbnail(client.user.avatarURL)
      .setColor("#000080")
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();

    client.guilds
      .get("704915025935990794")
      .channels.get("720020082222301184")
      .send(nserver);
    console.log(
      `Entrei no servidor ${guild.name}\nMembros: ${guild.memberCount}\nAgora Eu Estou Em: ${client.guilds.size} servidores\nCom Total De Membros: ${client.users.size}`
    );
  });
  client.on("guildDelete", async guild => {
    const nserver = new Discord.RichEmbed()
      .setTitle(client.user.username)
      .setDescription(
        `Fui Removido De Um Servidor:\n\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}\nTotal De Servidores: ${client.guilds.size}\nTotal De Membros: ${client.users.size}`
      )
      .setThumbnail(client.user.avatarURL)
      .setColor("#000080")
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();

    client.guilds
      .get("704915025935990794")
      .channels.get("720020106910105600")
      .send(nserver);
    console.log(
      `Removido Do Servidor: ${guild.name}\nMembros: ${guild.memberCount}\nAgora Eu Estou Em: ${client.guilds.size} servidores\nCom Total De Membros: ${client.users.size}`
    );
  });

  const ligado = new Discord.RichEmbed()
    .setTitle(client.user.username)
    .setDescription(
      `O Meli Foi Iniciado.\n\nServidores Totais: ${client.guilds.size}\nMembros Totais: ${client.users.size}`
    )
    .setThumbnail(client.user.avatarURL)
    .setColor("000080")
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp();
  client.guilds
    .get("704915025935990794")
    .channels.get("720020134936182954")
    .send(ligado);
});
