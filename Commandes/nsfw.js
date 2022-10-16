const Discord = require("discord.js");

module.exports = {

    name: "nsfw",
    description: "envoye une image nsfw",
    permission: "Aucune",
    dm: false,
    category: "nsfw",
    options: [
        {
            type: "string",
            name: "category",
            description: "category : pussy, aHarem",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        let choix = args.getString("category")

        if (!message.channel.nsfw) return message.reply("Ce n'est pas un salon nsfw")

        if (choix === "pussy") {

            let pussy = [
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028367851070947438/pussy_1.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028367851448447098/pussy_2.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028367851863683215/pussy_3.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028367852358606868/pussy_4.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028367853105184908/pussy_5.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028367853658845234/pussy_6.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028367854099247215/pussy_7.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646140524113990/pussy_9.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646140956135434/pussy_10.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646141425897602/pussy_11.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646141857902642/pussy_12.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646142264758323/pussy_13.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646142688374814/pussy_14.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646165266317383/pussy_15.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646165685747752/pussy_16.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646166272946197/pussy_17.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646166725935114/pussy_18.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646167195693066/pussy_19.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1028646167694815253/pussy_20.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410546069553232/pussy_21.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410546438643722/pussy_22.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410546849677414/pussy_23.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410547323641896/pussy_24.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410548128948324/pussy_25.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410548523221064/pussy_26.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410548888125570/pussy_27.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410600461291611/pussy_28.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410601065254962/pussy_29.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410601539211324/pussy_30.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410601979613305/pussy_31.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410602394865704/pussy_32.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410602839445534/pussy_33.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410603359547463/pussy_34.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410603741220884/pussy_35.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410604257128458/pussy_36.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410604924014592/pussy_37.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410733798195271/pussy_38.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410734158909520/pussy_39.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410734511231026/pussy_40.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410735140388894/pussy_41.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410735484309524/pussy_42.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410736054747196/pussy_43.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410736495149166/pussy_44.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410737011032074/pussy_45.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410737464021143/pussy_46.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410737950560286/pussy_47.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410791193067630/pussy_48.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410791595716628/pussy_49.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410791960621056/pussy_50.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410792396824616/pussy_51.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410792828842136/pussy_52.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410793441206302/pussy_53.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410794045186193/pussy_54.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410794426875904/pussy_55.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410794909212763/pussy_56.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410795303477308/pussy_57.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410809899651152/pussy_58.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410810327486515/pussy_59.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1029410810688180374/pussy_60.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293170941702285/pussy_61.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293171306594365/pussy_62.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293171717648384/pussy_63.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293172116095098/pussy_64.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293172539732108/pussy_65.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293234506379284/pussy_66.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293234921615360/pussy_67.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293318983860294/pussy_69.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293567475388416/pussy_70.gif",
                "https://cdn.discordapp.com/attachments/1028365406093721610/1031293683070410802/pussy_68.gif",

            ]
            let pussyradom = Math.floor(Math.random() * pussy.length);
            let pussymotRandom = pussy[pussyradom];

            let pussy1 = new Discord.EmbedBuilder()
                .setColor("Purple")
                .setImage(url = pussymotRandom)

            await message.channel.send({ embeds: [pussy1] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

        }

        if (choix === "aHarem") {

            let aHarem = [
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483408993914931/aHarem_1.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483409522413578/aHarem_2.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483410071851160/aHarem_3.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483410558386247/aHarem_4.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483410914906182/aHarem_5.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483411313364992/aHarem_6.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483411883806810/aHarem_7.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483412319997982/aHarem_8.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483412743618611/aHarem_9.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483413121106011/aHarem_10.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483428036059257/aHarem_11.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483428535185478/aHarem_12.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483429143347280/aHarem_13.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483429642469456/aHarem_14.gif",
                "https://cdn.discordapp.com/attachments/1030483290571943946/1030483430091259945/aHarem_15.gif",
            ]
            let aHaremradom = Math.floor(Math.random() * aHarem.length);
            let aHaremmotRandom = aHarem[aHaremradom];

            let pussy1 = new Discord.EmbedBuilder()
                .setColor("Purple")
                .setImage(url = aHaremmotRandom)

            await message.channel.send({ embeds: [pussy1] })
            message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })

            console.log(`${message.user.tag} a regarde des animes de hentai dans la category aHarem : ${aHaremmotRandom}`)
        }
    }
}