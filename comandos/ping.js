const Discord = require("discord.js")

exports.run = (bot,message,args) => {
    message.delete();
    let embed = new Discord.RichEmbed()

    .setTitle("🤖 Ping do bot")
    .setColor("#000080")
    .setDescription(`**O ping do bot é de ${Math.round(bot.ping)}ms!**`)
    .setThumbnail("https://cdn.discordapp.com/attachments/559509927354433551/585683011823992832/ezgif.com-resize.gif")

    message.channel.send(embed).then(msg => msg.delete(8000));;
  message.delete()
}

exports.help = {
    name: "ping"
}