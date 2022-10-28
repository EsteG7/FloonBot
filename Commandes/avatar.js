const Discord = require('discord.js');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, SelectMenuBuilder } = require("discord.js")

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
            description: "L'utlisateur à avoir l'avatar.",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        try {
            let user = args.getUser(`utlisateur`)
            if (!user) return message.reply("Utlisateur non valide ou mal définie !")

            await message.deferReply()

            let row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel(`Avatar`)
                        .setURL(`${user.displayAvatarURL({ dynamic: true })}`)
                        .setStyle(ButtonStyle.Link)
                )

            let avatarEmbed = new Discord.EmbedBuilder()
                .setColor("#FF5D00")
                .setTitle(`Chargement de la commande avatar.`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Je cherche l'avatar du membre ${user.tag} veuillez patienter.`)
                .setTimestamp()
                .setFooter({ text: "Avatar" })

            await message.followUp({ embeds: [avatarEmbed] })

            avatarEmbed = new EmbedBuilder()
                .setAuthor({ name: `Avatar du membre ${user.tag}.`, iconURL: (user.displayAvatarURL({ dynamic: true })) })
                .setColor("#00A705")
                .setTimestamp()
                .setFooter({ text: `Avatar du membre ${user.tag}.` })
                .setImage(user.displayAvatarURL({ dynamic: true, size: 128 }))

            await message.editReply({ embeds: [avatarEmbed], components: [row] });

        } catch (err) {
            return console.log('Une erreur dans la commande avatar', err)
        }

    }

}