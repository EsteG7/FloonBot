const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = {

    name: "user-info",
    description: "Permet de voir les information d'un utilisateur",
    dm: false,
    category: "Information",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Quel utilisateur ?",
            required: true
        },
    ],

    async run(bot, message, args) {

        try {

            const member = message.options.getMember("membre");


            let userEmbed = new Discord.EmbedBuilder()
                .setTitle(`UserInfo De ${member.user.tag}`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setColor("Blue")
                .setDescription(`
                __**User Informations**__

                > **Ping :** ${member.user.toString()}
                > **Name/Tag :** ${member.user.tag}
                > **ID :** ${member.user.id}
                > **Bot :** ${member.user.bot ? ':white_check_mark:' : '❌'}

                __ ** Information Compte ** __

                > **Créer :** <t:${parseInt(member.user.createdTimestamp / 1000)}:R>
                > **A rejoin :** <t:${parseInt(member.joinedAt / 1000)}:R>`)
            await message.reply({ embeds: [userEmbed] })

        } catch (err) {
            message.reply("Il a u une erreur")
        }
    }
}