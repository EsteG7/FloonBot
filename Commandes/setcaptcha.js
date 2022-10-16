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
    async run(bot, message, args, db) {

        let etat = args.getString("état")
        if (etat !== "on" && etat !== "off") return message.replye("Indique on ou off")

        if (etat === "off") {
            db.query(`UPDATE server SET captcha = 'false' WHERE guild = '${message.guildId}'`)
            await message.reply("Le captcha est bien désactiver")
        } else {

            let channel = args.getChannel("salon")
            if (!channel) return message.reply("pas de salon Indiqué")
            channel = message.guild.channels.cache.get(channel.id)
            if (!channel) return message.reply("Pas de salon trouvée")

            db.query(`UPDATE server SET captcha = '${channel.id}' WHERE guild = '${message.guildId}'`)
            await message.reply(`Le captcha est bien active sur le salon ${channel}`)
        }
    }
}