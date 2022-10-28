const Discord = require("discord.js");

module.exports = {

    name: "ping",
    description: "Donne le ping du bot.",
    permission: "Aucune",
    dm: false,
    category: "👆🏻Information",

    async run(bot, message) {
        await message.deferReply()

        try {

            let pingEmbed = new Discord.EmbedBuilder()
                .setColor("#FF5D00")
                .setTitle(`Chargement de la commande ping.`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Je cherche le ping du bot veuillez patienter.`)
                .setTimestamp()
                .setFooter({ text: "Ping" })


            await message.followUp({ embeds: [pingEmbed] })


            pingEmbed = new Discord.EmbedBuilder()
                .setColor("#0070FF")
                .setTitle(`Commandes du bot`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Le ping du bot est de : \`${bot.ws.ping}\` ms.`)
                .setTimestamp()
                .setFooter({ text: "Ping" })


            await message.editReply({ embeds: [pingEmbed] })


        } catch (err) {
            return console.log('Une erreur sur la commande ping', err)
        }
    }
}