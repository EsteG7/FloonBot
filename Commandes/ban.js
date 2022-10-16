const Discord = require("discord.js");

module.exports = {

    name: "ban",
    description: "🔨Ban un membre🔨",
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

            if (message.user.id === user.id) return message.channel.send("Essaie pas de te bannir"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
            if ((await message.guild.fetchOwner()).id === user.id) return message.channel.send("Ne ban pas le propriétaire du serveur"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
            if (member && !member.bannable) return message.reply("Je ne peux pas bannir ce membre ")
            if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.channel.send("Tu ne peux pas bannir cette personne"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
            if ((await message.guild.bans.fetch()).get(user.id)) return message.channel.send("ce membre est déja ban"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

            try {
                let Embed1 = new Discord.EmbedBuilder()
                    .setColor("Red")
                    .setTitle(`Ban`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`\`🛑 Ban \n Tu as été banni du serveur \`${message.guild.name}\`\n par le modérateur \`${message.user.tag} \`\n pour la raison : \`${reason}\``)
                    .setTimestamp()
                    .setFooter({ text: "ban" })
                await user.send({ embeds: [Embed1] })

            } catch (err) { }


            let Embed = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`Ban`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`\`🛑 Ban \n ${message.user.tag}\`a **banni** \n\` ${user.tag}\` **avec succès ! ✅**\n pour la raison : \`${reason}\`!`)
                .setTimestamp()
                .setFooter({ text: "ban" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
            await message.guild.bans.create(user.id, { reason: reason })

            let ID = await bot.fonction.createId("BAN")

            db.query(`INSERT INTO bans (guild, guildId, user, userId, author, authorId, ban, reason, date) VALUES ('${message.guild.name}', '${message.guild.id}','${user.tag}', '${user.id}','${message.user.tag}','${message.user.id}', '${ID}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)

        } catch (err) {

            return message.channel.send("Pas de membre à bannir ou de raison fournie"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        }

    }
}