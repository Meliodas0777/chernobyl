    const Discord = require('discord.js')
    module.exports.run = (client, message, args) => {
        message.delete(10000)
    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(`${message.author}, você não possui permissão para usar esse comando.`)
        
      }
      var unlock = message.guild.roles.find("name","@everyone")
      message.channel.overwritePermissions(unlock, {
        SEND_MESSAGES: true
       });
       message.channel.send(`O canal ${message.channel} foi **desbloqueado** com sucesso.`).then(msg => msg.delete(8000));
      message.delete()
        }

module.exports.help = {
    name: "unlock"
}