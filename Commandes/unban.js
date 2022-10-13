const Discord = require("discord.js");

module.exports = {

    name: "unban",
    description: "unBan un membre",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    category: "Modération",
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
            required: false,
            autocomplete: false

        }
    ],
    async run(bot, message, args) {

        try {
            let user = args.getUser("membre");
            if (!user) return message.reply("Pas de membre à unbanr")

            let reason = args.get("raison").value;
            if (!reason) reason = "pas de raison fournie";

            if (!(await message.guild.bans.fetch()).get(user.id)) return message.reply("ce membre est pas ban")

            try { await user.send(`Tu as été unban du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\``) } catch (err) { }

            await message.reply(`${message.user} a unban ${user.tag} pour la raison : \`${reason}\``)
            await message.guild.members.unban(user, reason)



        } catch (err) {

            return message.reply("Pas de membre à unban")

        }
    }
}