const Discord = require("discord.js");
const gif = require("./gif")

module.exports = {

	name: "gif",
	description: "Permet de effectuer un gif",
	permission: "Aucune",
	dm: false,
	category: "🥳Fun",
	options: [
		{
			type: "string",
			name: "gif-a-choisir",
			description: "choix : kill, punch, kiss, badass",
			required: true,
			autocomplete: true,
		},
		{
			type: "user",
			name: "membre",
			description: "Quel utilisateur ?",
			required: false,
			autocomplete: false
		},
		{
			type: "string",
			name: "raison",
			description: "La raison",
			required: false,
			autocomplete: false
		}
	],

	async run(bot, message, args) {

		let choix = args.getString("gif-a-choisir")
		const member = message.options.getMember("membre");
		let reason = args.getString("raison");

		let punch = [
			"https://cdn.discordapp.com/attachments/1023740653324206170/1023740817459920926/punch_2.gif",
			"https://cdn.discordapp.com/attachments/1023740653324206170/1023740816994357338/punch_3.gif",
			"https://cdn.discordapp.com/attachments/1023740653324206170/1023740817858383902/punch_1.gif",
			"https://cdn.discordapp.com/attachments/1023740653324206170/1023740867254689834/punch_5.gif",
			"https://cdn.discordapp.com/attachments/1023740653324206170/1023740867732852756/punch_4.gif",
			"https://cdn.discordapp.com/attachments/1023740653324206170/1023740903715782656/punch_6.gif",
		];
		let kiss = [
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363785644552294/kiss_1.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363786131099779/kiss_2.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363786537930813/kiss_3.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363786936393728/kiss_4.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363787339059320/kiss_5.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363787842371615/kiss_6.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363788228239420/kiss_7.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363788626690158/kiss_8.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022971345937649714/kiss_9.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363896231571526/kiss_10.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363896688746556/kiss_11.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022972412725313586/kiss_12.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363897116557413/kiss_13.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363897712169010/kiss_14.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363898244833321/kiss_15.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363898697822208/kiss_16.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363899142414397/kiss_17.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363899738017852/kiss_18.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363942473781268/kiss_19.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363942901596283/kiss_20.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363943316820009/kiss_21.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363943685935165/kiss_22.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363944151494757/kiss_23.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363944508002444/kiss_24.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022973057603735562/kiss_25.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363945388814398/kiss_26.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363990305615873/kiss_27.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363990691500072/kiss_28.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363991161258004/kiss_29.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363991635218472/kiss_30.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363992113348708/kiss_31.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363992885108766/kiss_32.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363993338101840/kiss_33.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020363993887543396/kiss_34.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020364013944705126/kiss_35.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020364014682906684/kiss_36.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020364015211393074/kiss_37.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020364015697924216/kiss_38.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020368972920651827/kiss_39.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1020368973524639795/kiss_40.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975126309970021/kiss_41.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975126851026954/kiss_42.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975127555690537/kiss_43.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975128121901086/kiss_44.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975128545542254/kiss_45.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975152050425906/kiss_46.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975152570515518/kiss_47.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975152998330418/kiss_48.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975153476476978/kiss_49.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1022975154172739664/kiss_50.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739414020620298/kiss_51.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739414473617418/kiss_52.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739414867873902/kiss_53.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739415270539355/kiss_54.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739415652208646/kiss_55.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739416008736819/kiss_56.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739416348463114/kiss_57.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739416679821342/kiss_58.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739417103441950/kiss_59.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1023739417535467671/kiss_60.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736153066291250/kiss_61.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736153468936323/kiss_62.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736153871581214/kiss_63.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736154278445127/kiss_64.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736154693672990/kiss_65.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736155041812491/kiss_66.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736155406708756/kiss_67.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736155859689522/kiss_68.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736156237168763/kiss_69.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736156610473984/kiss_70.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024737214678179961/kiss_71.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024738758840565820/kiss_72.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736791594541188/kiss_73.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736792013963346/kiss_74.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736792357908591/kiss_75.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736792752164894/kiss_76.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736793159008406/kiss_77.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736793557487636/kiss_78.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736793930764288/kiss_79.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736794337607750/kiss_80.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736744622542889/kiss_81.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736680927830106/kiss_82.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736681640853524/kiss_83.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736682181926953/kiss_84.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736682748162139/kiss_85.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736683129835650/kiss_86.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736683519918150/kiss_87.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736684102909992/kiss_88.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736684585263214/kiss_89.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736685281521716/kiss_90.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736853053689876/kiss_91.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736853410189312/kiss_92.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736853804462080/kiss_93.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736854177763338/kiss_94.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736854794309745/kiss_95.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736855175987231/kiss_96.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736855721267210/kiss_97.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736856123916288/kiss_98.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736856610451556/kiss_99.gif",
			"https://cdn.discordapp.com/attachments/1020363698595954708/1024736857021489152/kiss_100.gif",
		];
		let badass = [
			"https://cdn.discordapp.com/attachments/1023740062422274069/1023740207331278878/badass_1.gif",
			"https://cdn.discordapp.com/attachments/1023740062422274069/1023740207700381716/badass_2.gif",
			"https://cdn.discordapp.com/attachments/1023740062422274069/1023740208124010516/badass_3.gif",
			"https://cdn.discordapp.com/attachments/1023740062422274069/1023740208539258930/badass_4.gif",
			"https://cdn.discordapp.com/attachments/1023740062422274069/1023740208908341348/badass_5.gif",
			"https://cdn.discordapp.com/attachments/1023740062422274069/1023740209357135902/badass_6.gif",//6
		];
		let kill = [
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740519832109077/kill_1.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740520364769421/kill_2.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740521195253790/kill_3.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740521673412709/kill_4.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740522130587699/kill_5.gif", //5
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740522570981446/kill_6.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740523019763772/kill_7.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740523472764968/kill_8.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740523984461876/kill_9.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740526278754445/kill_10.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740547267039384/kill_12.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740547661299833/kill_13.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740548026216458/kill_14.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740548416278568/kill_15.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740548772790272/kill_16.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740549108355072/kill_17.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740549443887124/kill_18.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740549817171968/kill_19.gif",
			"https://cdn.discordapp.com/attachments/1023740128243482624/1023740550328889374/kill_20.gif",

		];

		try {
			await message.deferReply()

			if (!member && reason) {
				let Embed = new Discord.EmbedBuilder()
					.setDescription("Le gif choisie ne peut être reçus car il peux pas avoir de raison fournie sans le membre définie ")
					.setColor("DarkBlue")
					.setImage(url = "https://cdn.discordapp.com/attachments/1011333005496815627/1031190809313280051/tenor.gif")
				await message.channel.send({ embeds: [Embed] })
				message.reply({ content: ':white_check_mark: **Embed envoyé avec succès ! **:white_check_mark:', ephemeral: true })
				return
			}
			if (choix === "punch") {

				let punchradom = Math.floor(Math.random() * punch.length);
				let motRandom = punch[punchradom];
				if (!member) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = motRandom)
						.setTimestamp()

					return await message.followUp({ embeds: [Embed] })
				}
				if (member && reason) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = motRandom)
						.setDescription(`${message.user.toString()} a punch ${member.user.toString()} pour la raison : \n\`${reason}\``)
						.setTimestamp()

					return await message.followUp({ embeds: [Embed] })
				}
				if (member && !reason) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = motRandom)
						.setDescription(`${message.user.toString()} a punch ${member.user.toString()}`)
						.setTimestamp()

					return await message.followUp({ embeds: [Embed] })
				}
			}
			if (choix === "kiss") {
				let kissradom = Math.floor(Math.random() * kiss.length);
				let kissmotRandom = kiss[kissradom];

				if (!member) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = kissmotRandom)
						.setTimestamp()

					return await message.followUp({ embeds: [Embed] })

				}
				if (member && reason) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = kissmotRandom)
						.setDescription(`${message.user.toString()} a kiss ${member.user.toString()} pour la raison : \n\`${reason}\``)
						.setTimestamp()

					return await message.followUp({ embeds: [Embed] })
				}
				if (member && !reason) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = kissmotRandom)
						.setDescription(`${message.user.toString()} a kiss ${member.user.toString()}`)
						.setTimestamp()
					return await message.followUp({ embeds: [Embed] })

				}
			}
			if (choix === "badass") {
				let badassradom = Math.floor(Math.random() * badass.length);
				let badassmotRandom = badass[badassradom];

				if (!member) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = badassmotRandom)
						.setTimestamp()

					return await message.followUp({ embeds: [Embed] })
				}
				if (member && !reason) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = badassmotRandom)
						.setDescription(`${message.user.toString()} met la pression à  ${member.user.toString()}`)
						.setTimestamp()

					return await message.followUp({ embeds: [Embed] })
				}
				if (member && reason) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = badassmotRandom)
						.setDescription(`${message.user.toString()} met la pression à ${member.user.toString()} pour la raison : \n\`${reason}\``)
						.setTimestamp()

					return await message.followUp({ embeds: [Embed] })
				}
			}
			if (choix === "kill") {

				let killradom = Math.floor(Math.random() * kill.length);
				let killmotRandom = kill[killradom];

				if (!member) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = killmotRandom)
						.setTimestamp()
					return await message.followUp({ embeds: [Embed] })
				}
				if (member && !reason) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = killmotRandom)
						.setDescription(`${message.user.toString()} a kill ${member.user.toString()}`)
						.setTimestamp()
					return await message.followUp({ embeds: [Embed] })
				}
				if (member && reason) {
					let Embed = new Discord.EmbedBuilder()
						.setColor("Purple")
						.setImage(url = killmotRandom)
						.setDescription(`${message.user.toString()} a kill ${member.user.toString()} pour la raison : \n\`${reason}\``)
						.setTimestamp()
					return await message.followUp({ embeds: [Embed] })
				}
			}


			if (choix !== "kill" || choix !== "badass" || choix !== "kiss" || choix !== "punch") {
				let mauvais = new Discord.EmbedBuilder()
					.setTitle("**__Les category des gif dispo__**")
					.setColor("Purple")
					.setDescription("Les choix de gif dispo sont : \n\n \`kiss\`\n \`kill\`\n \`badass\`\n \`punch\`")
					.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
					.setTimestamp()
					.setFooter({ text: "gif" })

				return await message.followUp({ embeds: [mauvais] })
			}
		} catch (err) {
			return console.log(err)

		}
	}
}