const discord = require("discord.js");


module.exports = {
    name: "dm",
    description: "💻・DM un membre ",
    category: "Modération",
    dm: false,
    options: [
        {
            name: "membre",
            type: "user",
            description: "Quel membre voulez-vous que je dm ?",
            required: true,
            autocomplete: false
        },
        {
            name: "texte",
            type: "string",
            description: "Que veux-tu que je lui dise ?",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, interaction, args,) {

        let user = await interaction.options.getUser("membre");
        if (!user) return interaction.reply("Pas de membre !")

        let reason = interaction.options.getString("texte")
        if (!reason) return interaction.reply("Pas de raison fournise.")


        try { await user.send(`${reason}`) } catch (err) { }
        interaction.reply({ content: `J'ai bien envoyer \`${reason}\` à \_\_${user}\_\_ !`, ephemeral: true });

    }
}