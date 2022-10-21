const Discord = require("discord.js")

module.exports = {

    name: "clear",
    description: "✏️Efface beaucoup de messages✏️",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "number",
            name: "nombre",
            description: "Le nombre de messages à supprimer",
            required: true,
            autocomplete: false
        }, {
            type: "channel",
            name: "salon",
            description: "Le salon où effacer les messages",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        let channel = args.getChannel("salon")
        if (!channel) channel = message.channel;
        if (channel.id !== message.channel.id && !message.guild.channels.cache.get(channel.id)) return message.channel.send("Pas de salon !"), message.reply({ content: '🔴 ** erreur envoyé avec succès ! **🔴', ephemeral: true })

        let number = args.getNumber("nombre")
        if (parseInt(number) <= 0 || parseInt(number) > 100) return message.reply({ content: "Il nous faut un nombre entre `0` et `100` inclus !", ephemeral: true })

        try {

            let messages = await channel.bulkDelete(parseInt(number))

            await message.reply({ content: `J'ai bien supprimé \`${messages.size}\` message(s) dans le salon ${channel} !`, ephemeral: true })

            console.log(`${message.user.tag} a supprimer  ${messages.size}`)

        } catch (err) {

            let messages = [...(await channel.messages.fetch()).values()].filter(async m => (Date.now() - m.createdAt) <= 1209600000)
            if (!messages.length <= 0) return message.reply({ content: "Aucun message à supprimer car ils datent tous de plus de 14 jours !", ephemeral: true })
            await channel.bulkDelete(messages)

            await message.reply({ content: `J'ai pu supprimé uniquement \`${messages.size}\` message(s) dans le salon ${channel} car les autres dataient de plus 14 jours  !`, ephemeral: true })



        }
    }
}