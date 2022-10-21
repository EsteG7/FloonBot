
const Discord = require("discord.js");

module.exports = {

    name: "ping",
    description: "🤖Donne le ping du bot🤖",
    permission: "Aucune",
    dm: false,
    category: "Information",

    async run(bot, message) {

        try {
            let Embed = new Discord.EmbedBuilder()
                .setColor("Blue")
                .setTitle(`Commandes du bot`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
                .setDescription(`Le ping du bot est de : \`${bot.ws.ping}\``)
                .setTimestamp()
                .setFooter({ text: "Ping" })


            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        } catch (err) {
            return console.log(err)
        }
    }
}