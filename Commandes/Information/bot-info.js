const Discord = require("discord.js");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, SelectMenuBuilder } = require("discord.js")

module.exports = {

    name: "bot-info",
    description: "Permet de voir les informations du bot.",
    dm: false,
    category: "👆🏻Information",

    async run(bot, message, args, member) {

        await message.deferReply()

        try {

            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel("Invite moi")
                        .setStyle(ButtonStyle.Link)
                        //Mettre le lien de ton bot
                        .setURL("https://discord.com/api/oauth2/authorize?client_id=1010537525435183166&permissions=8&scope=bot%20applications.commands")
                )

            let botEmbed = new Discord.EmbedBuilder()
                .setColor("#FF5D00")
                .setTitle(`Chargement de la commande bot-info.`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Les inforamations du bot FLOONBOT veuillez patienter.`)
                .setTimestamp()
                .setFooter({ text: "bot-info" })

            await message.followUp({ embeds: [botEmbed] })

            botEmbed = new Discord.EmbedBuilder()
                .setTitle(`botInfo de FLOONBOT.`)//Mettre le nom de ton bot
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setColor("#0070FF")
                .setDescription(`
                __**Informations**__

                > **Devlopeur :** \`Floon\`,
                > **Name / Tag :** \`${bot.user.username}\`,
                > **ID :** \`${bot.user.discriminator}\`,
                > **Ping :** \`${bot.ws.ping}\`,
                > **Temps Uptime :** ${Math.round(bot.uptime / (1000 * 60 * 60)) + "h " + (Math.round(bot.uptime / (1000 * 60)) % 60) + "m " + (Math.round(bot.uptime / 1000) % 60) + "s "}

                
                __ ** 👆🏻Information Compte ** __

                > **Créer :** <t:${parseInt(bot.user.createdTimestamp / 1000)}:R>
               `)

            await message.editReply({ embeds: [botEmbed], components: [row] })

        } catch (err) {

            console.log(`Une erreur dans le commande bot-info`, err)

        }
    }
}