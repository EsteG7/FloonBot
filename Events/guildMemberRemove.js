const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = (bot, member) => {

    let db = bot.db;

    db.query(`SELECT * FROM goodbyes WHERE guildId = '${member.guild.id}'`, async (err, req) => {

        if (req.length < 1 || Boolean(req[0].goodbye) === false) return;

        let channel = bot.channels.cache.get(req[0].goodbye)
        if (!channel) return;

        const EmbedMessage = new EmbedBuilder()
            .setTitle(`Goodbye`)
            .setColor('#0C15CF')
            .setDescription(
                `± Nom d'utilisateur: ${member}
    ± Créé le: <t:${parseInt(
                    member.user.createdTimestamp / 1000
                )}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
    ± Partie le: <t:${parseInt(
                    member.joinedTimestamp / 1000
                )}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
    `
            )
            .setImage(url = "https://cdn.discordapp.com/attachments/1031327790047436850/1032756765944713316/tenor.gif")
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()


        channel.send({ embeds: [EmbedMessage] })

    })
}