const Discord = require("discord.js");

module.exports = {

    name: "setwelcome",
    description: "Paramètre le welcome",
    permission: Discord.PermissionFlagsBits.ManageGuild,
    dm: false,
    category: "Admin",
    options: [
        {
            type: "string",
            name: "état",
            description: "Etat du welcome",
            required: true,
            autocomplete: true
        },
        {
            type: "channel",
            name: "salon",
            description: "salon du welcome",
            required: false,
            autocomplete: false
        }
    ],
    async run(bot, message, args, db,) {

        let etat = args.getString("état")
        if (etat !== "on" && etat !== "off") return message.replye("Indique on ou off")

        if (etat === "off") {
            db.query(`UPDATE welcomes SET welcome = 'false' WHERE guildId = '${message.guildId}'`)
            let Embed = new Discord.EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`setwelcome`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`Le welcome est bien désactiver sur le channel`)
                .setTimestamp()
                .setFooter({ text: "welcome" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        } else {

            let channel = args.getChannel("salon")
            if (!channel) return message.reply("pas de salon Indiqué")
            channel = message.guild.channels.cache.get(channel.id)
            if (!channel) return message.reply("Pas de salon trouvée")

            db.query(`UPDATE welcomes SET welcome = '${channel.id}' WHERE guildId = '${message.guildId}'`)
            let Embed = new Discord.EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`setwelcome`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`Le welcome est bien active sur le salon ${channel}`)
                .setTimestamp()
                .setFooter({ text: "welcome" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        }
    }
}