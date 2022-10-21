const { EmbedBuilder, TextInputBuilder, ModalBuilder, ActionRowBuilder, TextInputStyle } = require("discord.js")
const Discord = require("discord.js");

module.exports = {

    name: "eval",
    description: "🧮Calcule🧮",
    permission: "Aucune",
    dm: false,
    category: "🥳Fun",
    options: [
        {
            type: "number",
            name: "nombre1",
            description: "mettre un nombre ou un chiffre nombre ou chiffre",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "symbole",
            description: "Symbole dispo : +,  -,  *,  /,  ",
            required: true,
            autocomplete: true
        },
        {
            type: "number",
            name: "nombre2",
            description: "mettre un nombre ou un chiffre nombre ou chiffre",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        try {
            let number = args.getNumber("nombre1")
            let number1 = args.getNumber("nombre2")
            let Calcule = args.getString("symbole")

            if (Calcule === "+") {
                const Calcule = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole +`)
                    .setColor("Green")
                    .setDescription(`${number} + ${number1} = ${number + number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "calcule" })
                return await message.channel.send({ embeds: [Calcule] }), message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

            }
            if (Calcule === "-") {
                const Calcule = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole -`)
                    .setColor("Green")
                    .setDescription(`${number} - ${number1} = ${number - number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "calcule" })
                return await message.channel.send({ embeds: [Calcule] }), message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
            }
            if (Calcule === "*") {
                const Calcule = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole *`)
                    .setColor("Green")
                    .setDescription(`${number} * ${number1} = ${number * number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "calcule" })
                return await message.channel.send({ embeds: [Calcule] }), message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
            }
            if (Calcule === "%") {
                const Calcule = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole %`)
                    .setColor("Green")
                    .setDescription(`${number} % ${number1} = ${number % number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "calcule" })
                return await message.channel.send({ embeds: [Calcule] }), message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
            }
            if (Calcule === "/") {
                const Calcule = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole /`)
                    .setColor("Green")
                    .setDescription(`${number} / ${number1} = ${number / number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "calcule" })
                return await message.channel.send({ embeds: [Calcule] }), message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

            }

            if (Calcule === "+" || "-" || "*" || "/") {
                await message.deferReply()
                let mauvais = new Discord.EmbedBuilder()
                    .setTitle("**__Les category des Symbole dispo__**")
                    .setColor("Green")
                    .setDescription("Les choix de Symbole dispo sont : \n\n \`+\` \`-\` \`/\` \`*\` \`%\`")
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "Symbole" })

                return await message.followUp({ embeds: [mauvais] })

            }
        } catch (err) {
            return console.log(err)

        }
    }
}