const Discord = require("discord.js");

module.exports = {

  name: "kick",
  description: "Pour kick un membre qui à fait une infractions",
  permission: Discord.PermissionFlagsBits.ModerateMembers,
  category: "🧑🏻‍⚖️Modération",
  dm: false,
  options: [
    {
      type: "user",
      name: "membre",
      description: "Le membre à kick",
      required: true,
      autocomplete: false
    }, {
      type: "string",
      name: "raison",
      description: "La raison du kick",
      required: true,
      autocomplete: false
    }
  ],
  async run(bot, message, args, db) {

    let user = args.getUser("membre")
    if (!user) return message.reply({ content: "Pas de membre à kick.", ephemeral: true })
    let member = message.guild.members.cache.get(user.id)
    if (!member) return message.reply({ content: "Pas de membre à kick.", ephemeral: true })

    let reason = args.get("raison").value;
    if (!reason) reason = "Pas de raison fournie pour kick le membre.";

    if (message.user.id === user.id) return message.reply({ content: "Essaie pas de te kick.", ephemeral: true })
    if ((await message.guild.fetchOwner()).id === user.id) return message.reply({ content: "Ne kick pas le propriétaire du serveur.", ephemeral: true })
    if (member && !member.kicknable) return message.reply("Je ne peux pas kick ce membre.")
    if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas kick cette personne.")

    try {

      let kickEmbed = new Discord.EmbedBuilder()
        .setColor("#FF0000")
        .setTitle(`Kick par ${message.user.tag}.`)
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
        .setDescription(`\`🛑**__Kick__**
        
         > **Serveur :** ${message.guild.name},
         > **Modérateur :** \`${message.user.tag} ,\`
         > **Raison :** \`${reason}\`
         
         !`)

        .setTimestamp()
        .setFooter({ text: "Kick" })
      await user.send({ embeds: [kickEmbed] })

    } catch (err) { }

    try {

      let kickEmbed = new Discord.EmbedBuilder()
        .setColor("#FF0000")
        .setTitle(`kick`)
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
        .setDescription(`\`🛑**__kick__**
        
        > **Modérateur :** \`${message.user.tag} a **kick avec succès ! ✅**\`,
        > **Raison :** \`${reason}\`

        !`)
        .setTimestamp()
        .setFooter({ text: "kick" })

      await message.reply({ embeds: [kickEmbed] })
      await member.kick(reason)

    } catch (err) {
      console.log(`Une erreur dans la commande kick.`, err)
    }

    let ID = await bot.fonction.createId("KICK")

    db.query(`INSERT INTO kicks (guild, guildId, user, userId, author, authorId, kick, reason, date) VALUES ('${message.guild.name}', '${message.guild.id}','${user.tag}', '${user.id}','${message.user.tag}','${message.user.id}', '${ID}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)

  }
}