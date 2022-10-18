const Discord = require("discord.js");

module.exports = {

    name: "setcaptcha",
    description: "Paramètre le captcha",
    permission: Discord.PermissionFlagsBits.ManageGuild,
    dm: false,
    category: "Admin",
    options: [
        {
            type: "string",
            name: "état",
            description: "Etat du captcha",
            required: true,
            autocomplete: true
        },
        {
            type: "channel",
            name: "salon",
            description: "salon du captcha",
            required: false,
            autocomplete: false
        }
    ],
    async run(bot, message, args, db,) {

        let etat = args.getString("état")
        if (etat !== "on" && etat !== "off") return message.replye("Indique on ou off")

        if (etat === "off") {
            db.query(`UPDATE server SET captcha = 'false' WHERE guild = '${message.guildId}'`)
            let Embed = new Discord.EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`setcaptcha`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`Le captcha est bien désactiver `)
                .setTimestamp()
                .setFooter({ text: "captcha" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        } else {

            let channel = args.getChannel("salon")
            if (!channel) return message.reply("pas de salon Indiqué")
            channel = message.guild.channels.cache.get(channel.id)
            if (!channel) return message.reply("Pas de salon trouvée")

            db.query(`UPDATE server SET captcha = '${channel.id}' WHERE guild = '${message.guildId}'`)
            let Embed = new Discord.EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`setcaptcha`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`Le captcha est bien active sur le salon ${channel} \n\n 🔺IMPORTANT🔺\n\n \` D'avoir un rôle \` \n\n \`Non verif\` sur le serveur sans aucune permissions !! \n Dans le salon ou se trouve le captcha rajouter comme permission \`voir salon et envoyer un message\``)
                .setTimestamp()
                .setFooter({ text: "captcha" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })


        }
    }
}