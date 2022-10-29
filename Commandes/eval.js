const { EmbedBuilder, TextInputBuilder, ModalBuilder, ActionRowBuilder, TextInputStyle } = require("discord.js")
const Discord = require("discord.js");

module.exports = {

    name: "eval",
    description: "Calcule",
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
            await message.deferReply()

            let number = args.getNumber("nombre1")
            let number1 = args.getNumber("nombre2")
            let Calcule = args.getString("symbole")

            if (Calcule === "+") {

                let calculeEmbed = new Discord.EmbedBuilder()
                    .setColor("#FF5D00")
                    .setTitle(`Chargement de la commande Eval.`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`Je calcule le résulta veuillez patienter.`)
                    .setTimestamp()
                    .setFooter({ text: "Eval" })

                await message.followUp({ embeds: [calculeEmbed] })

                calculeEmbed = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole +`)
                    .setColor("#00A705")
                    .setDescription(`${number} + ${number1} = ${number + number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "Eval" })
                return await message.editReply({ embeds: [calculeEmbed] })

            }
            if (Calcule === "-") {

                let calculeEmbed = new Discord.EmbedBuilder()
                    .setColor("#FF5D00")
                    .setTitle(`Chargement de la commande Eval.`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`Je calcule le résulta veuillez patienter.`)
                    .setTimestamp()
                    .setFooter({ text: "Eval" })

                await message.followUp({ embeds: [calculeEmbed] })

                calculeEmbed = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole -`)
                    .setColor("#00A705")
                    .setDescription(`${number} - ${number1} = ${number - number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "Eval" })
                return await message.editReply({ embeds: [calculeEmbed] })
            }
            if (Calcule === "*") {

                let calculeEmbed = new Discord.EmbedBuilder()
                    .setColor("#FF5D00")
                    .setTitle(`Chargement de la commande Eval.`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`Je calcule le résulta veuillez patienter.`)
                    .setTimestamp()
                    .setFooter({ text: "Eval" })

                await message.followUp({ embeds: [calculeEmbed] })

                calculeEmbed = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole *`)
                    .setColor("#00A705")
                    .setDescription(`${number} * ${number1} = ${number * number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "Eval" })
                return await message.editReply({ embeds: [calculeEmbed] })
            }
            if (Calcule === "%") {

                let calculeEmbed = new Discord.EmbedBuilder()
                    .setColor("#FF5D00")
                    .setTitle(`Chargement de la commande Eval.`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`Je calcule le résulta veuillez patienter.`)
                    .setTimestamp()
                    .setFooter({ text: "Eval" })

                await message.followUp({ embeds: [calculeEmbed] })

                calculeEmbed = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole %`)
                    .setColor("#00A705")
                    .setDescription(`${number} % ${number1} = ${number % number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "Eval" })
                return await message.editReply({ embeds: [calculeEmbed] })
            }
            if (Calcule === "/") {

                let calculeEmbed = new Discord.EmbedBuilder()
                    .setColor("#FF5D00")
                    .setTitle(`Chargement de la commande Eval.`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`Je calcule le résulta veuillez patienter.`)
                    .setTimestamp()
                    .setFooter({ text: "Eval" })

                await message.followUp({ embeds: [calculeEmbed] })

                calculeEmbed = new EmbedBuilder()
                    .setTitle(`Calcule avec le symbole /`)
                    .setColor("#00A705")
                    .setDescription(`${number} / ${number1} = ${number / number1}`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "Eval" })
                return await message.editReply({ embeds: [calculeEmbed] })

            }

            if (Calcule === "+" || "-" || "*" || "/") {

                let mauvais = new Discord.EmbedBuilder()
                    .setTitle("**__Les category des Symbole dispo__**")
                    .setColor("#000000")
                    .setDescription("Les choix de Symbole dispo sont : \n\n \`+\` \`-\` \`/\` \`*\` \`%\`")
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                    .setFooter({ text: "Symbole" })

                return await message.followUp({ embeds: [mauvais] })

            }

        } catch (err) {

            console.log(`Une erreur dans la commande eval`, err)

        }
    }
}