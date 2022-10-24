const Discord = require("discord.js");

module.exports = {

    name: "unban",
    description: "unBan un membre",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "🧑🏻‍⚖️Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre unban",
            required: true,
            autocomplete: false

        }, {
            type: "string",
            name: "raison",
            description: "La raison du unbannissement",
            required: true,
            autocomplete: false

        }
    ],
    async run(bot, message, args) {

        try {
            let user = args.getUser("membre");
            if (!user) return message.reply("Pas de membre à unbanr")

            let reason = args.get("raison").value;
            if (!reason) reason = "pas de raison fournie";

            if (!(await message.guild.bans.fetch()).get(user.id)) return message.reply("ce membre est pas ban"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

            try {
                let Embed1 = new Discord.EmbedBuilder()
                    .setColor("Red")
                    .setTitle(`UnBan`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`\`🛑 UnBan \n Tu as été unban du serveur \`${message.guild.name}\`\n par le modérateur \`${message.user.tag} \`\n pour la raison : \`${reason}\``)
                    .setTimestamp()
                    .setFooter({ text: "Unban" })
                await user.send({ embeds: [Embed1] })

            } catch (err) { }
            let Embed = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`UnBan`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`\`🛑 UnBan \n ${message.user.tag}\`a **unban** \n\` ${user.tag}\` **avec succès ! ✅**\n pour la raison : \`${reason}\`!`)
                .setTimestamp()
                .setFooter({ text: "Unban" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
            await message.guild.members.unban(user, reason)



        } catch (err) {

            return message.reply("Pas de membre à unban")

        }
    }
}