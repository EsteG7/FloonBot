const Discord = require("discord.js")
const Canvas = require("discord-canvas-easy")

module.exports = {

    name: 'rank',
    description: "Donne l'ep d'un membre",
    permission: "Aucune",
    dm: false,
    category: "Experience",
    options: [
        {
            type: "user",
            name: "utilisateur",
            description: "L'xp du membre",
            required: false,
            autocomplete: false
        }
    ],


    async run(bot, message, args, db) {

        let user;
        if (args.getUser("utilisateur")) {
            user = args.getUser("utilisateur")
            if (!user || !message.guild.members.cache.get(user?.id)) return message.reply("pas de membre")
        } else user = message.user;

        db.query(`SELECT * FROM xp WHERE guildId = '${message.guildId}' AND userId = '${user.id}'`, async (err, req) => {

            db.query(`SELECT * FROM xp WHERE guildId = '${message.guildId}'`, async (err, all) => {



                if (req.length < 1) return message.channel.send(`\`${message.user.tag}\` la personne que tu as regarder l'xp ,n'a pas encore envoyer de message sur le serveur`), message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

                await message.deferReply()

                const calculXp = (xp, level) => {
                    let xptotal = 0;
                    for (let i = 0; i < level + 1; i++) xptotal += i * 1000
                    xptotal += xp;
                    return xptotal
                }

                let leaderboard = await all.sort((a, b) => calculXp(parseInt(b.xp), parseInt(b.level)) - calculXp(parseInt(a.xp), parseInt(a.level)))
                let xp = parseInt(req[0].xp)
                let level = parseInt(req[0].level)
                let rank = leaderboard.findIndex(r => r.userId === user.id) + 1
                let need = (level + 1) * 1000;

                let Card = await new Canvas.Card()
                    .setBackground("./y006i80.png")
                    .setBot(bot)
                    .setColorFont("#ffffff")
                    .setRank(rank)
                    .setUser(user)
                    .setColorProgressBar("#8A2BE2")
                    .setGuild(message.guild)
                    .setXp(xp)
                    .setLevel(level)
                    .setXpNeed(need)
                    .toCard()

                await message.followUp({ files: [new Discord.AttachmentBuilder(Card.toBuffer(), { name: "rank.png" })] })
            })
        })

    }
}
