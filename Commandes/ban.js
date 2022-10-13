const Discord = require("discord.js");

module.exports = {

    name: "ban",
    description: "Ban un membre",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à bannir",
            required: true,
            autocomplete: false
        }, {
            type: "string",
            name: "raison",
            description: "La raison du bannissement",
            required: true,
            autocomplete: false
        }
    ],
    async run(bot, message, args, db) {

        try {
            let user = await bot.users.fetch(args._hoistedOptions[0].value)
            if (!user) return message.reply("Pas de membre à bannir")
            let member = message.guild.members.cache.get(user.id)

            let reason = args.get("raison").value;
            if (!reason) reason = "pas de raison fournie";

            if (message.user.id === user.id) return message.reply("Essaie pas de te bannir")
            if ((await message.guild.fetchOwner()).id === user.id) return message.reply("Ne ban pas le propriétaire du serveur")
            if (member && !member.bannable) return message.reply("Je ne peux pas bannir ce membre ")
            if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas bannir cette personne")
            if ((await message.guild.bans.fetch()).get(user.id)) return message.reply("ce membre est déja ban")

            try { await user.send(`Tu as été banni du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\``) } catch (err) { }
            let ID = await bot.fonction.createId("BAN")

            db.query(`INSERT INTO bans (guild, user, author, ban, reason, date) VALUES ('${message.guild.name}', '${user.tag}', '${message.user.tag}', '${ID}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)


            await message.reply(`${message.user} a banni ${user.tag} pour la raison : \`${reason}\``)
            await message.guild.bans.create(user.id, { reason: reason })



        } catch (err) {

            return message.reply("Pas de membre à bannir")

        }

    }
}