const Discord = require('discord.js')
const { EmbedBuilder } = require("discord.js")
const config = require('../config')

module.exports = {

    name: "suggest",
    description: "Permet d'envoyer une suggestion",
    permission: "Aucune",
    dm: false,
    category: "👆🏻Information",
    options: [
        {
            type: "string",
            name: "texte",
            description: "Le message a envoyer.",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM suggests WHERE guildId = '${message.guild.id}'`, async (err, req) => {

            if (req.length < 1 || Boolean(req[0].suggest) === false) return;

            let channel = bot.channels.cache.get(req[0].suggest)
            if (!channel) return;

            message.reply({ content: ':white_check_mark: **Suggestion envoyé avec succès ! **:white_check_mark:', ephemeral: true });
            let msg = args.getString("texte");
            const EmbedMessage = new EmbedBuilder()
                .setTitle(`Nouvelle suggestion!`)
                .setColor("Blue")
                .setThumbnail(message.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Suggestion de ${message.user} : ${msg}`)
                .setTimestamp()
                .setFooter({ text: "suggest" })

            channel.send({ embeds: [EmbedMessage] }).then(function (message) {
                message.react("✅")
                message.react("❌")
            });
        })
    }
}