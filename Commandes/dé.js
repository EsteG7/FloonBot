const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "dé",
    description: "🎲choisi un nombre entre 1 et 6  aléatoir🎲",
    permission: "Aucune",
    category: "Fun",
    dm: false,

    async run(bot, message, args) {


        let min = 1;
        let max = 6;
        let random = Math.floor(Math.random() * (max - min)) + min;

        const dé = new EmbedBuilder()
            .setTitle(`dé aléatoir`)
            .setColor("Green")
            .setDescription(`tu as obtenue le chiffre  \`${random}\``)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter({ text: "dé" })
        await message.channel.send({ embeds: [dé] })
        message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
    }

}