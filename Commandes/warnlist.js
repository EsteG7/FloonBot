const Discord = require("discord.js")

module.exports = {

    name: "warnlist",
    description: "Affiche les warns d'un membre",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre a surveiller",
            required: true,
            autocomplete: false
        },
    ],

    async run(bot, message, args, db) {

        let user = args.getUser("membre")
        if (!user) return message.channel.send("Pas de membre"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.channel.send("pas de membre"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        db.query(`SELECT * FROM warns WHERE guildId = '${message.guildId}' AND userId = '${user.id}'`, async (err, req) => {

            if (req.length < 1) return message.channel.send("Ce membre n'a pas de warn"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })
            await req.sort((a, b) => parseInt(a.date) - parseInt(b.date))

            let Embed = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`Liste des warns de ${user.tag}`)
                .setThumbnail(user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter({ text: "Liste des warns" })

            for (let i = 0; i < req.length; i++) {
                Embed.addFields([{
                    name: `Warn n${i + 1}`, value: `> **Auteur** : ${(await bot.users.fetch(req[i].authorId)).tag}\n> **ID** : \`${req[i].warn}\`\n> **Raison** :  \`${req[i].reason}\`\n> **Date** : <t:${Math.floor(parseInt(req[i].date) / 1000)}:F> `
                }])
            }
            await message.reply({ embeds: [Embed] })
        })
    }
}