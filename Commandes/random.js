const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "random",
    description: "Le bot tire au hasard un chiffre entre 1 et 100.",
    permission: "Aucune",
    dm: false,
    category: "🥳Fun",


    async run(bot, message, args) {

        await message.deferReply()

        try {
            let min = 1;
            let max = 100;
            let random = Math.floor(Math.random() * (max - min)) + min;

            let randomEmbed = new Discord.EmbedBuilder()
                .setColor("#FF5D00")
                .setTitle(`Chargement de la commande random.`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Je cherche un nombre entre 1 et 100 veuillez patienter.`)
                .setTimestamp()
                .setFooter({ text: "Random" })


            await message.followUp({ embeds: [randomEmbed] })

            randomEmbed = new EmbedBuilder()
                .setTitle(`nombre aléatoir`)
                .setColor("Green")
                .setDescription(`tu as obtenue le nombre ou le chiffre  \`${random}\`.`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setTimestamp()
                .setFooter({ text: "random" })


            await message.editReply({ embeds: [randomEmbed] })

        } catch (err) {

            console.log("Une erreur dans la commmand random.", err)

        }

    }
}