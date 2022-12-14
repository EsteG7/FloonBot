const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")

module.exports = {

    name: "8ball",
    description: "Pose une question et il te dira la vérité.",
    permission: "Aucune",
    dm: false,
    category: "🥳Fun",

    options: [
        {
            type: "string",
            name: "question",
            description: "La question que tu souhaites poser au bot.",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        try {
            let quest = args.getString("question")
            let result = ["Oui", "Non", "Peut-être"][Math.floor(Math.random() * ["Oui", "Non", "Peut-être"].length)];

            const ballEmbed = new EmbedBuilder()
                .setTitle(`8ball`)
                .setColor("#00A705")
                .addFields(
                    { name: 'Question', value: `${quest}`, inline: false },
                    { name: 'Reponse', value: `${result}`, inline: false },
                )
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setTimestamp()
                .setFooter({ text: "8ball" })

            message.reply({ embeds: [ballEmbed] })

        } catch (err) {

            console.log(`Une erreur dans la commande 8ball.`, err)
        }

    }
}