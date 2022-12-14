const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const { Discord } = require("discord.js");

module.exports = {
    name: "addroles",
    description: "Ajouter un role a un membre",
    dm: false,
    category: "馃馃徎鈥嶁殩锔廙od茅ration",
    options: [
        {
            name: "membre",
            description: "脌 qui voulez-vous ajouter un r么le?",
            type: "user",
            required: true
        }, {
            name: "role",
            description: "Quel r么le voulez-vous ajouter?",
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
                    await message.reply(`Le r么le ${role} a 茅t茅 correctement ajouter 脿 ${member}`);
                })
                .catch(async (error) => {
                    console.log(error);
                    await message.reply({ ephemeral: true, content: `Je n'ai pas r茅ussi 脿 ajouter le r么le ${role}  a ${member} s没rement d没 脿 un manque de permission.` });
                })
        } catch (err) {

            console.log("Une erreur dans la commande addrole", err)

        }

    }
}