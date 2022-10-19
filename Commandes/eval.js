
const Discord = require("discord.js");

module.exports = {

    name: "eval",
    description: "🧮Calcule🧮",
    permission: "Aucune",
    dm: false,
    category: "🥳Fun",
    options: [
        {
            type: "number",
            name: "nombre1",
            description: "l'utlisateur a avoir l'avatar",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "symbole",
            description: "Symbole dispo : +,  -,  *,  /,  ",
            required: true,
            autocomplete: false
        },
        {
            type: "number",
            name: "nombre2",
            description: "l'utlisateur a avoir l'avatar",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {

        let number = args.getNumber("nombre1")
        let number1 = args.getNumber("nombre2")
        let Calcule = args.getString("symbole")

        if (Calcule === "+") {
            return message.reply(`${number + number1}`)
        }
        if (Calcule === "-") {
            return message.reply(`${number - number1}`)
        }
        if (Calcule === "*") {
            return message.reply(`${number * number1}`)
        }
        if (Calcule === "/") {
            return message.reply(`${number / number1}`)
        }

        if (Calcule === "+" || "-" || "*" || "/") {
            message.reply(`Symbole disponible :  \`+\`, \`-\`, \`*\`, \`/\``)
        }
    }
}