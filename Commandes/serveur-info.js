const Discord = require("discord.js");
const { EmbedBuilder, ButtonStyle } = require("discord.js")
const { ChannelType } = require("discord.js")
const { ActionRowBuilder } = require("discord.js")
const { ButtonBuilder } = require("discord.js")

module.exports = {

    name: "serveur-info",
    description: "Permet de voir les Information du serveur",
    dm: false,
    category: "👆🏻Information",

    async run(bot, interaction, args) {

        try {


            let serveurEmbed = new Discord.EmbedBuilder()
                .setTitle("Serveur 👆🏻Information")
                .setColor("Blue")
                .setDescription(`
                **__Serveur Informations__**
 
                > Name : ${interaction.guild.name}
                > ID : ${interaction.guild.id}
                > Description : Serveur pour chercher des potes sur fofo
                > Créateur : <@${interaction.guild.ownerId}>
                > Boost : ${interaction.guild.premiumSubscriptionCount}
                > Créer le : ${interaction.guild.createdAt}
                > Vérification : ${interaction.guild.verificationLevel}
                > Ping : ${bot.ws.ping}
 
                **__Information Compte__**
 
                > Membre Totaux : ${interaction.guild.memberCount}
                > Bot(s): ${interaction.guild.members.cache.filter(b => b.user.bot).size}
                > Utilisateur(s) : ${interaction.guild.members.cache.filter(member => !member.user.bot).size}
 
                    ** __Statistique Information__ **
 
                > Catégorie : ${interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildCategory).size}
                > Vocal : ${interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildVoice).size}
                > Textuel : ${interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildText).size}
                > Forum : ${interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildForum).size}
                > Roles : ${interaction.guild.roles.cache.size}
                > Emojis : ${interaction.guild.emojis.cache.size}
                    `)
                .setFooter({ text: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true })}` })
                .setTimestamp()
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))


            interaction.reply({ embeds: [serveurEmbed] })

        } catch (err) {
            console.log(err)
        }
    }
}