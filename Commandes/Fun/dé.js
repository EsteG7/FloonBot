const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {

    name: "dé",
    description: "Permet de faire choisir le bot entre 1 et 6.",
    permission: "Aucune",
    category: "🥳Fun",
    dm: false,

    async run(bot, message, args) {

        try {
            let min = 1;
            let max = 6;
            let random = Math.floor(Math.random() * (max - min)) + min;

            await message.deferReply()

            let déEmbed = new Discord.EmbedBuilder()
                .setColor("#FF5D00")
                .setTitle(`Le bot réflechie au nombre qui vas te donner.`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Je cherche le nombre veuillez patienter.`)
                .setTimestamp()
                .setFooter({ text: "Dé" })

            await message.followUp({ embeds: [déEmbed] })

            déEmbed = new EmbedBuilder()
                .setTitle(`Dé aléatoir`)
                .setColor("#00A705")
                .setDescription(`Tu as obtenue le chiffre \`${random}\``)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setTimestamp()
                .setFooter({ text: "Dé" })
            await message.editReply({ embeds: [déEmbed] })

        } catch (err) {

            console.log(`Une erreur dans la commande dé`, err)
        }
    }
}