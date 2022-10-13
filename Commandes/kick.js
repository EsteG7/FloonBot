const Discord = require("discord.js");

module.exports = {

  name: "kick",
  description: "kick un membre",
  permission: Discord.PermissionFlagsBits.BanMembers,
  category: "Modération",
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
    if (!user) return message.reply("Pas de membre à kick")
    let member = message.guild.members.cache.get(user.id)
    if (!member) return message.reply("Pas de membre à kick")

    let reason = args.get("raison").value;
    if (!reason) reason = "pas de raison fournie";

    if (message.user.id === user.id) return message.reply("Essaie pas de te kick")
    if ((await message.guild.fetchOwner()).id === user.id) return message.reply("Ne kick pas le propriétaire du serveur")
    if (member && !member.bannable) return message.reply("Je ne peux pas kick ce membre ")
    if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas kick cette personne")


    try {
      await user.send(`Tu as été kick du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\``)
    } catch (err) { }

    await message.reply(`${message.user} a kick ${user.tag} pour la raison : \`${reason}\``)

    await member.kick(reason)

    let ID = await bot.fonction.createId("KICK")

    db.query(`INSERT INTO kicks (guild, user, author, kick, reason, date) VALUES ('${message.guild.name}', '${user.tag}', '${message.user.tag}', '${ID}', '${reason.replace(/'/g, "\\'")}', '${Date.now()}')`)






  }
}