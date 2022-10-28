const Discord = require('discord.js');

module.exports = async (bot, channels) => {

    let db = bot.db;

    db.query(`SELECT logs FROM server WHERE guild = '${channels.guild.id}'`, async (err, req) => {
        const fetchAuditLogs = await channels.guild.fetchAuditLogs({
            type: Discord.AuditLogEvent.ChannelCreate,
            limit: 1
        })
        if (req[0].logs === "false") return;
        let channel = channels.guild.channels.cache.get(req[0].logs);

        const LatestChannel = fetchAuditLogs.entries.first()

        let Embed = new Discord.EmbedBuilder()
            .setColor("Blue")
            .setTitle("Création d'un salon")
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`Salon : ${channels.name}\nAuteur : ${LatestChannel.executor} (${LatestChannel.executor.tag})`)
            .setFooter({ text: "HostYourProject | Bot", iconURL: bot.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

        channel.send({ embeds: [Embed] });
    })
}




