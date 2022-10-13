const Discord = require("discord.js")

module.exports = {

    name: "warn",
    description: "warn un membre",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre a warn",
            required: true,
            autocomplete: false

        }, {
            type: "string",
            name: "raison",
            description: "La raison du warn",
            required: true,
            autocomplete: false

        }
    ],

    async run(bot, message, args, db) {

        let user = args.getUser("membre")
        if (!user) return message.channel.send("Le membre n'a pas été trouvé !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.channel.send("Le membre n'a pas été trouvé !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        let reason = args.getString("raison")
        if (!reason) reason = "Veuillez noter la raison du warn.";

        if (message.user.id === user.id) return message.channel.send("Tu ne peux pas te warn toi-même !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if ((await message.guild.fetchOwner()).id === user.id) return message.channel.send("Tu ne peux pas warn le propriétaire du serveur !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.channel.send("Tu ne peux pas warn ce membre !")
        if ((await message.guild.members.fetchMe()).roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.channel.send("Tu ne peux pas warn ce membre !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        try {
            let Embed1 = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`warn`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`${message.user.tag} vous a warn sur le serveur ${message.guild.name} pour la raison suivante : \`${reason}\` !`)
                .setTimestamp()
                .setFooter({ text: "warn" })
            await user.send({ embeds: [Embed1] })
        } catch (err) { }

        let Embed = new Discord.EmbedBuilder()
            .setColor("Red")
            .setTitle(`warn`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`\`🛑 Avertissement \n\` ${message.user} **a averti** \n\`${user.tag}\` **avec succès ! ✅**\n \` pour la raison\`: \`${reason}\` !`)
            .setTimestamp()
            .setFooter({ text: "warn" })


        await message.reply({ embeds: [Embed] })


        let ID = await bot.fonction.createId("WARN")

        db.query(`INSERT INTO warns (guild, guildId, user, userId, author, authorId, warn, reason, date) VALUES ('${message.guild.name}', '${message.guild.id}','${user.tag}', '${user.id}','${message.user.tag}','${message.user.id}', '${ID}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)
    }
}