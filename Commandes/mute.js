const Discord = require("discord.js")
const ms = require("ms")

module.exports = {

    name: "mute",
    description: "Permet de mute un membre sur le serveur",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "🧑🏻‍⚖️Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Quel est le membre à mute ?",
            required: true,
            autocomplete: false

        }, {
            type: "string",
            name: "temps",
            description: "Quel est le temps du mute ?",
            required: true,
            autocomplete: false
        }, {
            type: "string",
            name: "raison",
            description: "Quel est la raison du mute ?",
            required: true,
            autocomplete: false
        }
    ],
    async run(bot, message, args, db) {


        let user = args.getUser("membre");
        if (!user) return message.channel.send("Pas de membre à mute !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.channel.send("Pas de membre !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        let time = args.getString("temps")
        if (!time) return message.channel.send("Pas de temps "), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (isNaN(ms(time))) return message.channel.send("Pas le bon format !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (ms(time) > 2419200000) return message.channel.send("Le mute ne peux pas dures plus de 28 jours!"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        let reason = args.getString("raison")
        if (!reason) reason = "Pas de raison fournie !";

        if (message.user.id === user.id) return message.channel.send("Essaie pas de te mute !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if ((await message.guild.fetchOwner()).id === user.id) return message.channel.send("Ne mute pas le propriétaire du serveur !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (!member.moderatable) return message.reply("Je ne peux pas mute ce membre !")
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.channel.send("Tu ne peux pas mute cette personne !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        if (member.isCommunicationDisabled()) return message.channel.send("Ce membre est déja mute !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        try {
            try {
                let muteEmbed = new Discord.EmbedBuilder()
                    .setColor("#FF0000")
                    .setTitle(`Mute par ${message.user.tag}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`🛑 **__Mute__** 
                
                > **Serveur :**\`${message.guild.name}\`
                > **Time :**\`${time}\`
                > **Modérateur :**\`${message.user.tag}\`
                > **Raison :** \`${reason}\`!`)
                    .setTimestamp()
                    .setFooter({ text: "Mute" })
                await user.send({ embeds: [muteEmbed] })

            } catch (err) { }

            let muteEmbed = new Discord.EmbedBuilder()
                .setColor("#FF0000")
                .setTitle(`Le membre ${user.tag} a étais mute.`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`🛑 **__Mute__** 
            > **Modérateur :**\`${message.user.tag}\`a **banni avec succès ! ✅**
            > **Membre :**\`${user.tag}\`
            > **Time :**\`${time}\`
            > **Raison :** \`${reason}\`!`)
                .setTimestamp()
                .setFooter({ text: "Mute" })

            await message.reply({ embeds: [muteEmbed] })
            await member.timeout(ms(time), reason)

            let ID = await bot.fonction.createId("MUTE")

            db.query(`INSERT INTO mutes (guild, guildId, user, userId, author, authorId, mute, time, reason, date) VALUES ('${message.guild.name}', '${message.guild.id}','${user.tag}', '${user.id}','${message.user.tag}','${message.user.id}', '${ID}', '${time}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)

        } catch (err) {

            console.log(`Une erreur dans la commande mute`, err)

        }
    }
}
