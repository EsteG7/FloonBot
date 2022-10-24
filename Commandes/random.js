const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "random",
    description: "choisi un nombre entre 1 et 100  aléatoir",
    permission: "Aucune",
    dm: false,
    category: "🥳Fun",


    async run(bot, message, args) {


        try {
            let min = 1;
            let max = 100;
            let random = Math.floor(Math.random() * (max - min)) + min;

            const dé = new EmbedBuilder()
                .setTitle(`nombre aléatoir`)
                .setColor("Green")
                .setDescription(`tu as obtenue le nombre ou le chiffre  \`${random}\``)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setTimestamp()
                .setFooter({ text: "random" })


            await message.channel.send({ embeds: [dé] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
        } catch (err) {
            return console.log(err)
        }

    }
}