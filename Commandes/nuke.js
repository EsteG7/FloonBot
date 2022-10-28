const Discord = require("discord.js")

module.exports = {

    name: "nuke",
    description: "Recréer un salon.",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "🧑🏻‍⚖️Modération",
    options: [

        {
            type: "channel",
            name: "channel",
            description: "Quel est le salon",
            required: true,
            autocomplete: false
        }

    ],

    async run(bot, message, args) {

        try {

            const channel = message.options.getChannel("channel");

            channel.clone({ position: channel.position.rawPosition }).then(async ch => {
                ch.send({ content: `Le salon a bien été recréer.`, ephemeral: true })
                await message.reply({ content: `J'ai bien recréer le salon ${ch}.` })
            })

            await channel.delete()

        } catch (err) {

            console.log("Une erreur dans le commande nuke", err)

        }
    }
}