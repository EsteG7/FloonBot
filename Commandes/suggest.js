const Discord = require('discord.js')
const { EmbedBuilder } = require("discord.js")
const config = require('../config')

module.exports = {

    name: "suggest",
    description: "Permet d'envoyer une suggestion",
    permission: "Aucune",
    dm: false,
    category: "Autres",
    options: [
        {
            type: "string",
            name: "texte",
            description: "Le message a envoyer.",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        message.reply({ content: ':white_check_mark: **Suggestion envoyé avec succès ! **:white_check_mark:', ephemeral: true });
        let msg = args.getString("texte");
        const EmbedMessage = new EmbedBuilder()
            .setTitle(`Nouvelle suggestion!`)
            .setColor("Blue")
            .setDescription(`Suggestion de ${message.user} : ${msg}`)
            .setTimestamp()
            .setFooter({ text: "suggest" })

        //Id du salon pour avoir les suggest
        bot.channels.cache.get("1010208026294239434").send({ embeds: [EmbedMessage] }).then(function (message) {
            message.react("✅")
            message.react("❌")

        });
    }

}