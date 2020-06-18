    const Discord = require('discord.js')
    module.exports.run = (client, message, args) => {
    message.delete()

    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send(`${message.author}, Você Não Tem Permissão Para Ussar Isso!`).then(msg => msg.delete(8000));
        
      }
      var lock = message.guild.roles.find("name","@everyone")
      message.channel.overwritePermissions(lock, {
        SEND_MESSAGES: false
      });
       
      message.channel.send(`O canal ${message.channel} foi **bloqueado** com sucesso.`);
        }

module.exports.help = {
    name: "lock"
}