const Discord = require("discord.js")

module.exports = async (bot, message) => {

    let db = bot.db;

    if (message.author.bot || message.channel.type === Discord.ChannelType.DM) return;

    db.query(`SELECT * FROM xp WHERE guild = '${message.guildId}' AND user = '${message.author.id}'`, async (err, req) => {

        if (req.length < 1) {

            db.query(`INSERT INTO xp (guild, user, xp, level) VALUES (${message.guildId}, '${message.author.id}', '0', '0')`)
        } else {

            let level = parseInt(req[0].level)
            let xp = parseInt(req[0].xp)

            if ((level + 1) * 1000 <= xp) {

                db.query(`UPDATE xp SET xp = '${xp - ((level + 1) * 1000)}' WHERE guild = '${message.guildId}' AND user = '${message.author.id}'`)
                db.query(`UPDATE xp SET level = '${level + 1}' WHERE guild = '${message.guildId}' AND user = '${message.author.id}'`)

                let Embed = new Discord.EmbedBuilder()
                    .setTitle(`Level`)
                    .setColor("#ffffff")
                    .setDescription(`${message.author} est passé niveau ${level + 1}, félicitations `)
                    .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter({ text: `Level`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })

                await message.channel.send({ embeds: [Embed] })


            } else {

                let xptogive = Math.floor(Math.random() * 30) + 1;

                db.query(`UPDATE xp SET xp = '${xp + xptogive}' WHERE guild = '${message.guildId}' AND user = '${message.author.id}'`)

            }
        }
    })
}
