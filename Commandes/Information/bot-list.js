const Discord = require("discord.js");
const { PermissionsBitField, EmbedBuilder } = require("discord.js")

module.exports = {

    name: "bot-list",
    description: "Permet de regarder le nombre de bot.",
    permission: "Aucune",
    dm: false,
    category: "👆🏻Information",

    async run(bot, message, args, db) {

        try {

            await message.deferReply()

            const list = message.guild.members.cache.filter(m => m.user.bot).map(m => `> \`${m.user.tag}\``).join(`\n`)

            let botEmbed = new EmbedBuilder()
                .setTitle("Liste des bot sur le serveur")
                .setColor("#0070FF")
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`**__Les pseudo des bots :__**
                
                 ${list}`)
                .setFooter({ text: "Bot list" })
                .setTimestamp()

            await message.followUp({ embeds: [botEmbed] })

        } catch (err) {

            console.log(`Une erreur dans la commande bot-list.`, err);
        }

    }
}