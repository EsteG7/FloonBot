const Discord = require("discord.js");

module.exports = {

    name: "help",
    description: "Donne les commands du bot",
    permission: "Aucune",
    dm: false,
    category: "Information",

    async run(bot, message, args) {

        let command;
        if (args.getString("commande")) {
            command = bot.commands.get(args.getString("commande"));
            if (!command) return message.reply("pas de commande")
        }

        if (!command) {

            let categories = [];
            bot.commands.forEach(command => {
                if (!categories.includes(command.category)) categories.push(command.category)
            })

            let Embed = new Discord.EmbedBuilder()
                .setColor("Blue")
                .setTitle(`Commandes du bot`)
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`Commands disponibles : \`${bot.commands.size}\`\nCatégories disponibles : \`${categories.length}\``)
                .setTimestamp()
                .setFooter({ text: "Commandes du bot" })

            await categories.sort().forEach(async cat => {

                let commands = bot.commands.filter(cmd => cmd.category === cat)
                Embed.addFields({ name: `${cat}`, value: `${commands.map(cmd => `\`${cmd.name}\` : ${cmd.description}`).join("\n")}` })
            })

            await message.channel.send({ embeds: [Embed] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        }

    }

}

