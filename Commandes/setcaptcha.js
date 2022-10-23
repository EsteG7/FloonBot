const Discord = require("discord.js");

module.exports = {

    name: "setcaptcha",
    description: "🗃️Paramètre le captcha🗃️",
    permission: Discord.PermissionFlagsBits.ManageGuild,
    dm: false,
    category: "Set des commande",
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
            required: true,
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
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Le captcha est bien désactiver \n le rôle \`Non verif\` ne sera pus donner au personne qui rejoint le serveur`)
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
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Le captcha est bien active sur le salon ${channel} \n\n 🔺IMPORTANT🔺\n\n \` D'avoir un rôle \` \n\n \`Non verif\` sur le serveur sans aucune permissions ( si pas le rôle sera automatiquemen crée )  !! \n Dans le salon ou se trouve le captcha rajouter comme permission sur le rôle \`Non verif\`\`voir salon et envoyer un message\``)
                .setTimestamp()
                .setFooter({ text: "captcha" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        }
    }
}