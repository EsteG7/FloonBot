const Discord = require("discord.js");
const { PermissionsBitField, EmbedBuilder } = require("discord.js")

module.exports = {

    name: "role-member-list",
    description: "Permet de voir la liste des members poss茅dant le r么le.",
    permission: "Aucune",
    dm: false,
    category: "馃憜馃徎Information",
    options: [
        {
            type: 'role',
            name: "role",
            description: "Quel est le r么le ?",
            required: true,
            autocomplete: false,
        }
    ],

    async run(bot, message, args, db) {

        try {

            await message.deferReply()

            const roled = message.options.getRole("role");

            let roleEmbed = new EmbedBuilder()
                .setTitle("Liste des membres poss茅dant le r么le")
                .setColor("#0070FF")
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`**__Les pseudo des membre qui poss茅de le r么le__ ${roled} :**
                
                ${roled.members.map(m => `> \`${m.user.username}\``).join("\n") || "Aucun utilisateur"}`)
                .setFooter({ text: "r么le list" })
                .setTimestamp()

            await message.followUp({ embeds: [roleEmbed] })

        } catch (err) {

            console.log(`Une erreur dans la commande role-member-list.`, err);
        }

    }
}