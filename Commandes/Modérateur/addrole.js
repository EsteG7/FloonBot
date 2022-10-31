const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const { Discord } = require("discord.js");

module.exports = {
    name: "addroles",
    description: "Ajouter un role a un membre",
    dm: false,
    category: "🧑🏻‍⚖️Modération",
    options: [
        {
            name: "membre",
            description: "À qui voulez-vous ajouter un rôle?",
            type: "user",
            required: true
        }, {
            name: "role",
            description: "Quel rôle voulez-vous ajouter?",
            type: "role",
            required: true
        }
    ],
    run: async (bot, message, args) => {

        const member = message.options.getMember("membre");
        const role = message.options.getRole("role");

        try {
            member.roles.add(role)
                .then(async () => {
                    await message.reply(`Le rôle ${role} a été correctement ajouter à ${member}`);
                })
                .catch(async (error) => {
                    console.log(error);
                    await message.reply({ ephemeral: true, content: `Je n'ai pas réussi à ajouter le rôle ${role}  a ${member} sûrement dû à un manque de permission.` });
                })
        } catch (err) {

            console.log("Une erreur dans la commande addrole", err)

        }

    }
}