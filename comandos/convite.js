const Discord = require("discord.js")

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("🤖 Convite do bot")
    .setColor("#000080")
    .setDescription(`**Clique [aqui](https://discordapp.com/oauth2/authorize?client_id=683749160926707753&permissions=2146958847&scope=bot) para adicionar o bot em seu servidor.**`)
    .setFooter(`${bot.user.username}`, bot.user.avatarURL)
    .setTimestamp()

    message.channel.send(embed).then(msg => msg.delete(8000));;
  message.delete()
}

exports.help = {
    name: "convite"
}