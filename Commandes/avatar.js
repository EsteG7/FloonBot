const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Avoir l'avatar de quelqun",
    permission: "Aucune",
    dm: false,
    category: "🥳Fun",
    options: [
        {
            type: "user",
            name: "utlisateur",
            description: "l'utlisateur a avoir l'avatar",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        try {
            let user = args.getUser(`utlisateur`)
            if (!user) return message.reply("Utlisateur non valide")
            const exampleEmbed = new EmbedBuilder()
                .setAuthor({ name: `avatar ${user.tag}`, iconURL: (user.displayAvatarURL({ dynamic: true })) })
                .setColor("Green")
                .setTimestamp()
                .setFooter({ text: "avatar" })
                .setImage(user.displayAvatarURL({ dynamic: true, size: 128 }))
            message.channel.send({ embeds: [exampleEmbed] });

            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
        } catch (err) {
            return console.log(err)
        }

    }

}