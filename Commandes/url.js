const Discord = require("discord.js")
const { EmbedBuilder } = require("discord.js")
module.exports = {

    name: "url",
    description: "Permet de voir l'url personnaliser du serveur",
    permission: "Aucune",
    category: "Autres",
    dm: false,
    async run(bot, message, args) {

        let Embed = new EmbedBuilder()
            .setColor("#0A0A0A")
            .setTitle(`url`)
            .setDescription(message.guild.vanityURLCode ? `L'URL personnaliser du serveur est : **${message.guild.vanityURLCode}**` : `Il n'y as pas d'URL personnaliser`)
            .setFooter({ text: `url` })
            .setTimestamp()
        message.reply({ embeds: [Embed] })
    }

}