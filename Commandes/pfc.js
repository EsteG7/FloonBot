const Discord = require("discord.js")

module.exports = {

    name: 'pfc',
    description: 'Jeux pierre, feuille, ciseaux',
    permission: "Aucune",
    dm: false,
    category: "🥳Fun",
    options: [
        {
            type: "string",
            name: "choix",
            description: "Jeux pierre, feuille, ciseaux",
            required: true,
            autocomplete: true,
        },

    ],
    async run(bot, message, args) {

        try {
            let joueursH = args.getString("choix")

            let joueursB1 = ["pierre", "feuille", "ciseaux"]

            let punchradom = Math.floor(Math.random() * joueursB1.length);
            let joueursB = joueursB1[punchradom];

            await message.deferReply()

            if (joueursH === "pierre" && joueursB === "feuille") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc a \`perdu\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc a \`gagner\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })
            } else if (joueursH === "pierre" && joueursB === "pierre") {

                let Embed = new Discord.EmbedBuilder()

                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc \`égalité\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc  \`égalité\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })
            } else if (joueursH === "pierre" && joueursB === "ciseaux") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc a \`gagner\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc  \`perdu\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })
            }


            if (joueursH === "feuille" && joueursB === "pierre") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc a \`gagner\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc a \`perdu\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })

            } else if (joueursH === "feuille" && joueursB === "feuille") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc \`égalité\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc  \`égalité\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })
            } else if (joueursH === "feuille" && joueursB === "ciseaux") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc a \`perdu\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc a \`gagner\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })
            }

            if (joueursH === "ciseaux" && joueursB === "pierre") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc a \`perdu\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc a \`gagner\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })
            } else if (joueursH === "ciseaux" && joueursB === "ciseaux") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc \`égalité\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc  \`égalité\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })
            } else if (joueursH === "ciseaux" && joueursB === "feuille") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .addFields(
                        { name: `\`${message.user.tag}\`\n`, value: `a  choisi ${joueursH}\ donc a \`gagner\``, inline: false },
                        { name: `\`FLOONBOT#0089\`\n`, value: `a obtenue ${joueursB} donc a \`perdu\``, inline: false },
                        { name: '\u200B', value: '\u200B' }
                    )
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })
                return await message.followUp({ embeds: [Embed] })
            }

            if (joueursH !== "feuille" || joueursH !== "ciseaux" || joueursH !== "pierre") {
                let Embed = new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setTitle("**La commande  pierre,  feuille,  ciseaux !!**")
                    .setDescription("Les choix de pfc dispo sont : \n\n \`pierre\`\n   \`feuille\`\n  \`ciseaux\`\n")
                    .setTimestamp()
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64, }))
                    .setFooter({ text: "Résulta", iconURL: (message.user.displayAvatarURL({ dynamic: true })) })

                return await message.followUp({ embeds: [Embed] })
            }
        } catch (err) {
            return console.log(err)
        }
    }
}