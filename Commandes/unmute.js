const Discord = require("discord.js")
const ms = require("ms")

module.exports = {

    name: "unmute",
    description: "❌🔇unMute un membre🔇❌",
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
            name: "raison",
            description: "La raison du unmute",
            required: true,
            autocomplete: false
        }
    ],
    async run(bot, message, args) {


        let user = args.getUser("membre");
        if (!user) return message.channel.send("Pas de membre à unmute"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.channel.send("Pas de membre"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })


        let reason = args.getString("raison")
        if (!reason) reason = "pas de raison fournie";


        if (!member.moderatable) return message.reply("Je ne peux pas unmute ce membre ")
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas umute cette personne")
        if (!member.isCommunicationDisabled()) return message.reply("ce membre est pas mute")

        try {
            let Embed1 = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`Unmute`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`\`🛑 Unmute \n Tu as été unmute du serveur \`${message.guild.name}\`\n par le modérateur \`${message.user.tag} \`\n pour la raison : \`${reason}\``)
                .setTimestamp()
                .setFooter({ text: "Unmute" })
            await user.send({ embeds: [Embed1] })

        } catch (err) { }

        let Embed = new Discord.EmbedBuilder()
            .setColor("Red")
            .setTitle(`Unmute`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
            .setDescription(`\`🛑 Unmute \n ${message.user.tag}\`a **Unmute** \n\` ${user.tag}\` **avec succès ! ✅**\n pour la raison : \`${reason}\`!`)
            .setTimestamp()
            .setFooter({ text: "Unmute" })


        await message.channel.send({ embeds: [Embed] })
        message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
        await member.timeout(null, reason)

    }
}
