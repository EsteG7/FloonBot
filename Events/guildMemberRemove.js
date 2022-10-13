const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = (client, member) => {

    const EmbedMessage = new EmbedBuilder()
        .setTitle(`Floon`)
        .setColor('#0C15CF')
        .setDescription(`Le membre : <@${member.user.id}>.\n \u200B \nViens de partire de la Team.`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()

    client.channels.cache.get('972786161552601148').send({ embeds: [EmbedMessage] })
}