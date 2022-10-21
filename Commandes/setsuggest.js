const Discord = require("discord.js");

module.exports = {

    name: "setsuggest",
    description: "Paramètre le suggest",
    permission: Discord.PermissionFlagsBits.ManageGuild,
    dm: false,
    category: "Set des commande",
    options: [
        {
            type: "string",
            name: "état",
            description: "Etat du suggest",
            required: true,
            autocomplete: true
        },
        {
            type: "channel",
            name: "salon",
            description: "salon du suggest",
            required: true,
            autocomplete: false
        }
    ],
    async run(bot, message, args, db) {

        let etat = args.getString("état")
        if (etat !== "on" && etat !== "off") return message.replye("Indique on ou off")

        if (etat === "off") {
            db.query(`UPDATE suggests SET suggest = 'false' WHERE guildId = '${message.guildId}'`)
            let Embed = new Discord.EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`setsuggest`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`Le suggest est bien désactiver sur le channel`)
                .setTimestamp()
                .setFooter({ text: "suggest" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        } else {

            let channel = args.getChannel("salon")
            if (!channel) return message.reply("pas de salon Indiqué")
            channel = message.guild.channels.cache.get(channel.id)
            if (!channel) return message.reply("Pas de salon trouvée")

            db.query(`UPDATE suggests SET suggest = '${channel.id}' WHERE guildId = '${message.guildId}'`)
            let Embed = new Discord.EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`setsuggest`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`Le suggest est bien active sur le salon ${channel}`)
                .setTimestamp()
                .setFooter({ text: "suggest" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        }
    }
}