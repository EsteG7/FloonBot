const Discord = require("discord.js")
const ms = require("ms")

module.exports = {

    name: "unmute",
    description: "unMute un membre",
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
            required: false,
            autocomplete: false
        }
    ],
    async run(bot, message, args) {


        let user = args.getUser("membre");
        if (!user) return message.reply("Pas de membre à unmute")
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.reply("Pas de membre")


        let reason = args.getString("raison")
        if (!reason) reason = "pas de raison fournie";


        if (!member.moderatable) return message.reply("Je ne peux pas unmute ce membre ")
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas umute cette personne")
        if (!member.isCommunicationDisabled()) return message.reply("ce membre est pas mute")

        try { await user.send(`Tu as été unmute du serveur ${message.guild.name} par ${message.user.tag}  pour la raison : \`${reason}\``) } catch (err) { }

        await message.reply(`${message.user} a unmute ${user.tag} pour la raison : \`${reason}\``)

        await member.timeout(null, reason)

    }
}
