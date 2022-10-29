const Discord = require("discord.js")

module.exports = async (bot, guild,) => {

    let db = bot.db;

    try {
        db.query(`SELECT * FROM server WHERE guild = '${guild.id}'`, async (err, req) => {

            if (req.length < 1) {

                db.query(`INSERT INTO server (guild, captcha) VALUES (${guild.id},'false')`)
            }
        })
    } catch (err) {

        console.log("Une erreur dans l'event guildCreate pour la création du captcha.", err)

    }
}
