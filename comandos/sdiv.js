const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  if (message.author.id !== "650132408716230668") message.delete();

  let servidores = client.guilds.size;
  let usuarios = client.users.size;

  const mensagem = new Discord.RichEmbed()
    .setTitle(client.user.username)
    .setDescription(
      " **Olá, eu sou o ๖ۣۜMelioda$' 有, um bot focado em anúncios e divulgação, estou aqui para te ajudar.**"
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "💸 Me adicione em seu servidor:",
      `\n**---->> [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=683749160926707753&permissions=2146958847&scope=bot)**\n`
    )
    .addField(
      "📌 Aqui vai algumas informações:",
      ` **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __**,aviso**__ **e seja feliz!**`
    )
    .addField(
      "🔧 Configure as minhas permissões:",
      ` **Ler mensagens, Escrever mensagens e Gerenciar mensagens**`
    )
    .addField("💸 Use m!ajuda para saber mais.", `** **`)
    .setColor("#000080")
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp();

  let on = client.users.filter(m => m.presence.status === "online");
  let npertube = client.users.filter(m => m.presence.status === "dnd");
  let ausente = client.users.filter(m => m.presence.status === "idle");
  let off = client.users.filter(m => m.presence.status === "offline");

  npertube.forEach(f1 => {
    f1.send(mensagem);
  });

  on.forEach(f2 => {
    f2.send(mensagem);
  });

  ausente.forEach(f3 => {
    f3.send(mensagem);
  });

  off.forEach(f4 => {
    f4.send(mensagem);
  });

  const embed = new Discord.RichEmbed()
    .setTitle(`**---=  Divugador  =---**`)
    .setDescription(
      `**Mensagem enviada para:**\n\n **Servidores:** ${client.guilds.size}\n **Total:** ${client.users.size}\n **Onlines:** ${on.size} \n **Ausentes:** ${ausente.size} \n **Ocupados:** ${npertube.size} \n **Offline:** ${off.size}`
    )
    .setFooter(client.user.username, client.user.avatarURL)
    .setColor("#000080");
  message.channel.send(embed);
  message.delete();
};
