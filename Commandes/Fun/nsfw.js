const Discord = require("discord.js");
const { pussy, aHarem } = require("../../nsfw.json")

module.exports = {

    name: "nsfw",
    description: "envoye une image nsfw",
    permission: "Aucune",
    dm: false,
    category: "🔞Nsfw",
    options: [
        {
            type: "string",
            name: "category",
            description: "category : pussy, aHarem",
            required: true,
            autocomplete: true,
        }
    ],

    async run(bot, message, args) {
        let choix = args.getString("category")

        if (!message.channel.nsfw) return message.reply("Ce n'est pas un salon nsfw")

        try {
            await message.deferReply()

            if (choix === "pussy") {

                let pussyradom = Math.floor(Math.random() * pussy.length);
                let pussymotRandom = pussy[pussyradom];

                let pussyEmbed = new Discord.EmbedBuilder()
                    .setColor("#FF5D00")
                    .setTitle(`Chargement de la commande nsfw.`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`Je cherche l'image a afficher veuillez patienter.`)
                    .setTimestamp()
                    .setFooter({ text: "Nsfw" })

                await message.followUp({ embeds: [pussyEmbed] })

                pussyEmbed = new Discord.EmbedBuilder()
                    .setColor("DC00FF")
                    .setImage(url = pussymotRandom)

                return await message.editReply({ embeds: [pussyEmbed] })
            }

            if (choix === "aHarem") {

                let aHaremEmbed = new Discord.EmbedBuilder()
                    .setColor("#FF5D00")
                    .setTitle(`Chargement de la commande nsfw.`)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setDescription(`Je cherche l'image a afficher veuillez patienter.`)
                    .setTimestamp()
                    .setFooter({ text: "Nsfw" })

                await message.followUp({ embeds: [aHaremEmbed] })

                let aHaremradom = Math.floor(Math.random() * aHarem.length);
                let aHaremmotRandom = aHarem[aHaremradom];

                aHaremEmbed = new Discord.EmbedBuilder()
                    .setColor("DC00FF")
                    .setImage(url = aHaremmotRandom)

                return await message.editReply({ embeds: [aHaremEmbed] })
            }

            if (choix !== "aHarem" || choix !== "pussy") {

                let mauvais = new Discord.EmbedBuilder()
                    .setTitle("**__Les category nsfw dispo__**")
                    .setColor("#000000")
                    .setDescription("Les choix nsfw dispo sont : \n\n \`pussy\`\n \`aHarem\`")
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter({ text: "NSFW" })

                return await message.editReply({ embeds: [mauvais] })
            }

        } catch (err) {

            console.log("Une erreur dans la commande nsfw.", rr)

        }
    }
}