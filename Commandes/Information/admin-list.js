const Discord = require("discord.js");
const { PermissionsBitField, EmbedBuilder } = require("discord.js")

module.exports = {

    name: "admin-list",
    description: "Permet de regarder le nombre d'admin.",
    permission: "Aucune",
    dm: false,
    category: "👆🏻Information",

    async run(bot, message, args, db) {

        try {

            await message.deferReply()

            const list = message.guild.members.cache.filter(m => !m.user.bot).filter(member => member.permissions.has([PermissionsBitField.Flags.Administrator]))

            let AdminEmbed = new EmbedBuilder()
                .setTitle("Liste des administrateurs sur le serveur")
                .setColor("#0070FF")
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`**__Les pseudo des admins :__**
                
                ${list.map(m => `> \`${m.user.username}\``).join("\n")}`)
                .setFooter({ text: "Admin list" })
                .setTimestamp()

            await message.followUp({ embeds: [AdminEmbed] })

        } catch (err) {

            console.log(`Une erreur dans la commande admin-list.`, err);
        }

    }
}