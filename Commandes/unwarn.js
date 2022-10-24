const Discord = require("discord.js");

module.exports = {

    name: "unwarn",
    description: "Unwarn un membre",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: `🧑🏻‍⚖️Modération`,
    options: [{
        type: "user",
        name: "membre",
        description: "Le membre à warn",
        required: true,
        autocomplete: false
    },
    {
        type: "string",
        name: "unwarn",
        description: "Mettre l'Id du warn que l'on obtient avec le /warnlist",
        required: true,
        autocomplete: false
    }],

    async run(bot, message, args, db) {
        let user = args.getUser("membre")
        if (!user) return message.channel.send("Pas de membre !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.channel.send("Pas de membre !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        db.query(`SELECT * FROM warns WHERE guildId = '${message.guildId}' AND userId = '${user.id}'`, async (err, req) => {
            let warns = args.getString("unwarn") || req[0].warn
            if (!warns) return message.channel.send("Pas de warn"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

            await req.sort((a, b) => parseInt(a.date) - parseInt(b.date))
            if (req.length < 1) return message.channel.send("Ce membre n'a pas de warn !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

            let Embed = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`Unwarn`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`\`🛑 UnWarn \n ${message.user.tag}\`a **Unwarn le**\`${req[0].warn}\` \n de\` ${user.tag}\` **avec succès ! ✅**!`)
                .setTimestamp()
                .setFooter({ text: "Unwarn" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })


            try {
                let Embed1 = new Discord.EmbedBuilder()
                    .setColor("Red")
                    .setTitle(`Unwarn`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`\`🛑 Unwarn \n Tu as été Unwarn du serveur \`${message.guild.name}\`\n par le modérateur \`${message.user.tag} \``)
                    .setTimestamp()
                    .setFooter({ text: "Unwarn" })
                await user.send({ embeds: [Embed1] })
            } catch (err) {

            }
            db.query(`DELETE FROM warns WHERE guildId = '${message.guildId}' AND warn = '${warns}'`)
        })
    }
}