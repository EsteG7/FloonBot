const Discord = require("discord.js")
const loadDatabase = require("../Loaders/loadDatabase")
const loadSlashCommands = require("../Loaders/loadSlashCommands")
const { ActivityType } = require("discord.js")

module.exports = async bot => {

    bot.user.setPresence({
        activities: [{ name: "de Floon", type: ActivityType.Streaming, url: "https://www.twitch.tv/skfloon" }],
        status: 'dnd',
    });

    bot.db = await loadDatabase()
    bot.db.connect(function () {
        console.log("Connected to database")
    })

    await loadSlashCommands(bot)

    console.log(`${bot.user.tag} est en ligne`)
}