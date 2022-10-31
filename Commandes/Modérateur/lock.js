const Discord = require("discord.js");

module.exports = {

    name: "unlock",
    description: "Permet de verouiller un salon.",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "🧑🏻‍⚖️Modération",

    async run(bot, message, args, db) {

        try {

            message.channel.permissionOverwrites.edit(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                "SendMessages": false,
                "AddReactions": false,
                "SendTTSMessages": false,
                "AttachFiles": false,
                "CreatePublicThreads": false,
                "CreatePrivateThreads": false,
                "SendMessagesInThreads": false,
            });

            return message.reply({ content: `Je viens de verouiller le salon.`, ephemeral: false })

        } catch (err) {

            console.log(`Une erreur dans la commande lock.`, err);
        }

    }
}