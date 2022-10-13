const Discord = require("discord.js")
const ms = require("ms")

module.exports = {

    name: "mute",
    description: "Mute un membre",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à mute",
            required: true,
            autocomplete: false

        }, {
            type: "string",
            name: "temps",
            description: "Le temps du mute",
            required: true,
            autocomplete: false
        }, {
            type: "string",
            name: "raison",
            description: "La raison du mute",
            required: true,
            autocomplete: false
        }
    ],
    async run(bot, message, args, db) {


        let user = args.getUser("membre");
        if (!user) return message.channel.send("Pas de membre à mute"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.channel.send("Pas de membre"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        let time = args.getString("temps")
        if (!time) return message.channel.send("Pas de temps"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (isNaN(ms(time))) return message.channel.send("pas le bon format"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (ms(time) > 2419200000) return message.channel.send("Le mute ne peux pas dures plus de 28 jours"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        let reason = args.getString("raison")
        if (!reason) reason = "pas de raison fournie";

        if (message.user.id === user.id) return message.channel.send("Essaie pas de te mute"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if ((await message.guild.fetchOwner()).id === user.id) return message.channel.send("Ne mute pas le propriétaire du serveur"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (!member.moderatable) return message.reply("Je ne peux pas mute ce membre ")
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.channel.send("Tu ne peux pas mute cette personne"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (member.isCommunicationDisabled()) return message.channel.send("ce membre est déja mute"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        try {
            let Embed1 = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`Mute`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`\`🛑 Mute \n Tu as été Mute du serveur \`${message.guild.name}\`\n pendant \`${time}\`\n par le modérateur \`${message.user.tag} \`\n pour la raison : \`${reason}\``)
                .setTimestamp()
                .setFooter({ text: "Mute" })
            await user.send({ embeds: [Embed1] })


        } catch (err) { }

        let Embed = new Discord.EmbedBuilder()
            .setColor("Red")
            .setTitle(`Mute`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`\`🛑 Mute \n ${message.user.tag}\`a **banni** \n\` ${user.tag}\` **avec succès ! ✅**\n pendant\`${time}\`\n pour la raison : \`${reason}\`!`)
            .setTimestamp()
            .setFooter({ text: "Mute" })


        await message.channel.send({ embeds: [Embed] })
        message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        await member.timeout(ms(time), reason)

        let ID = await bot.fonction.createId("MUTE")

        db.query(`INSERT INTO mutes (guild, guildId, user, userId, author, authorId, mute, time, reason, date) VALUES ('${message.guild.name}', '${message.guild.id}','${user.tag}', '${user.id}','${message.user.tag}','${message.user.id}', '${ID}', '${time}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)

    }
}
