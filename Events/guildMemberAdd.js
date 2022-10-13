const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = (client, member) => {

    const EmbedMessage = new EmbedBuilder()
        .setTitle(`Nom de ton Serveur`)
        .setColor('#0C15CF')
        .setDescription(`Le membre : <@${member.user.id}>.\n \u200B \nViens de rejoindre la Team.`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
    //Id du salon pour le welcome
    client.channels.cache.get('972786095446167572').send({ embeds: [EmbedMessage] })
}