const Discord = require("discord.js");

module.exports = {

  name: "kick",
  description: "kick un membre",
  permission: Discord.PermissionFlagsBits.ModerateMembers,
  category: "🧑🏻‍⚖️Modération",
  dm: false,
  options: [
    {
      type: "user",
      name: "membre",
      description: "Le membre à bannir",
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
    if (!user) return message.reply({ content: "Pas de membre à kick", ephemeral: true })
    let member = message.guild.members.cache.get(user.id)
    if (!member) return message.reply({ content: "Pas de membre à kick", ephemeral: true })

    let reason = args.get("raison").value;
    if (!reason) reason = "pas de raison fournie";

    if (message.user.id === user.id) return message.reply({ content: "Essaie pas de te kick", ephemeral: true })
    if ((await message.guild.fetchOwner()).id === user.id) return message.reply({ content: "Ne kick pas le propriétaire du serveur", ephemeral: true })
    if (member && !member.bannable) return message.reply("Je ne peux pas kick ce membre ")
    if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas kick cette personne")


    try {
      await user.send(`Tu as été kick du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\``)
    } catch (err) { }

    let Embed = new Discord.EmbedBuilder()
      .setColor("Red")
      .setTitle(`Ban`)
      .setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
      .setDescription(`\`🛑 kick \n ${message.user.tag}\`a **kick** \n\` ${user.tag}\` **avec succès ! ✅**\n pour la raison : \`${reason}\`!`)
      .setTimestamp()
      .setFooter({ text: "ban" })


    await message.channel.send({ embeds: [Embed] })
    message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

    await member.kick(reason)

    let ID = await bot.fonction.createId("KICK")

    db.query(`INSERT INTO kicks (guild, guildId, user, userId, author, authorId, kick, reason, date) VALUES ('${message.guild.name}', '${message.guild.id}','${user.tag}', '${user.id}','${message.user.tag}','${message.user.id}', '${ID}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)






  }
}