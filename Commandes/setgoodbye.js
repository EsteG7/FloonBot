const Discord = require("discord.js");

module.exports = {

    name: "setgoodbye",
    description: "🗃️Paramètre le goodbye🗃️",
    permission: Discord.PermissionFlagsBits.ManageGuild,
    dm: false,
    category: "Set des commande",
    options: [
        {
            type: "string",
            name: "état",
            description: "Etat du goodbye",
            required: true,
            autocomplete: true
        },
        {
            type: "channel",
            name: "salon",
            description: "salon du goodbye",
            required: true,
            autocomplete: false
        }
    ],
    async run(bot, message, args, db,) {

        let etat = args.getString("état")
        if (etat !== "on" && etat !== "off") return message.replye("Indique on ou off")

        if (etat === "off") {
            db.query(`UPDATE goodbyes SET goodbye = 'false' WHERE guildId = '${message.guildId}'`)
            let Embed = new Discord.EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`setgoodbye`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Le goodbye est bien désactiver sur le channel`)
                .setTimestamp()
                .setFooter({ text: "goodbye" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        } else {

            let channel = args.getChannel("salon")
            if (!channel) return message.reply("pas de salon Indiqué")
            channel = message.guild.channels.cache.get(channel.id)
            if (!channel) return message.reply("Pas de salon trouvée")

            db.query(`UPDATE goodbyes SET goodbye = '${channel.id}' WHERE guildId = '${message.guildId}'`)
            let Embed = new Discord.EmbedBuilder()
                .setColor("Yellow")
                .setTitle(`setgoodbye`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Le goodbye est bien active sur le salon ${channel}`)
                .setTimestamp()
                .setFooter({ text: "goodbye" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        }
    }
}