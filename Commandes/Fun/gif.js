const Discord = require("discord.js");
const { punch, kiss, badass, kill } = require("../../json/saveImage/gif.json")

module.exports = {

	name: "gif",
	description: "Permet de effectuer un gif.",
	permission: "Aucune",
	dm: false,
	category: "🥳Fun",
	options: [
		{
			type: "string",
			name: "gif-a-choisir",
			description: "Permet de choisir l'action du gif.",
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
			description: "Quel est la raison ?",
			required: false,
			autocomplete: false
		}
	],

	async run(bot, message, args) {

		let choix = args.getString("gif-a-choisir")
		const member = message.options.getMember("membre");
		let reason = args.getString("raison");

		try {

			await message.deferReply()

			if (!member && reason) {

				let Embed = new Discord.EmbedBuilder()
					.setColor("#FF5D00")
					.setTitle(`Chargement de la commande gif.`)
					.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
					.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
					.setTimestamp()
					.setFooter({ text: "Gif" })

				await message.followUp({ embeds: [Embed] })

				Embed = new Discord.EmbedBuilder()
					.setDescription("Le gif choisie ne peut être reçus car il peux pas avoir de raison fournie sans le membre définie !!")
					.setColor("#001540")
					.setImage(url = "https://cdn.discordapp.com/attachments/1011333005496815627/1031190809313280051/tenor.gif")

				return await message.editReply({ embeds: [Embed] })

			}
			if (choix === "punch") {

				let punchradom = Math.floor(Math.random() * punch.length);
				let motRandom = punch[punchradom];
				if (!member) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = motRandom)
						.setTimestamp()

					return await message.editReply({ embeds: [Embed] })
				}
				if (member && reason) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()

						.setColor("DC00FF")
						.setImage(url = motRandom)
						.setDescription(`${message.user.toString()} a punch ${member.user.toString()} pour la raison : \n\`${reason}\``)
						.setTimestamp()

					return await message.editReply({ embeds: [Embed] })
				}
				if (member && !reason) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = motRandom)
						.setDescription(`${message.user.toString()} a punch ${member.user.toString()}`)
						.setTimestamp()

					return await message.editReply({ embeds: [Embed] })
				}
			}
			if (choix === "kiss") {
				let kissradom = Math.floor(Math.random() * kiss.length);
				let kissmotRandom = kiss[kissradom];

				if (!member) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = kissmotRandom)
						.setTimestamp()

					return await message.editReply({ embeds: [Embed] })

				}
				if (member && reason) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = kissmotRandom)
						.setDescription(`${message.user.toString()} a kiss ${member.user.toString()} pour la raison : \n\`${reason}\``)
						.setTimestamp()

					return await message.editReply({ embeds: [Embed] })
				}
				if (member && !reason) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = kissmotRandom)
						.setDescription(`${message.user.toString()} a kiss ${member.user.toString()}`)
						.setTimestamp()
					return await message.editReply({ embeds: [Embed] })

				}
			}
			if (choix === "badass") {
				let badassradom = Math.floor(Math.random() * badass.length);
				let badassmotRandom = badass[badassradom];

				if (!member) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = badassmotRandom)
						.setTimestamp()

					return await message.editReply({ embeds: [Embed] })
				}
				if (member && !reason) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = badassmotRandom)
						.setDescription(`${message.user.toString()} met la pression à  ${member.user.toString()}`)
						.setTimestamp()

					return await message.editReply({ embeds: [Embed] })
				}
				if (member && reason) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = badassmotRandom)
						.setDescription(`${message.user.toString()} met la pression à ${member.user.toString()} pour la raison : \n\`${reason}\``)
						.setTimestamp()

					return await message.editReply({ embeds: [Embed] })
				}
			}
			if (choix === "kill") {

				let killradom = Math.floor(Math.random() * kill.length);
				let killmotRandom = kill[killradom];

				if (!member) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = killmotRandom)
						.setTimestamp()
					return await message.editReply({ embeds: [Embed] })
				}
				if (member && !reason) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = killmotRandom)
						.setDescription(`${message.user.toString()} a kill ${member.user.toString()}`)
						.setTimestamp()
					return await message.editReply({ embeds: [Embed] })
				}
				if (member && reason) {

					let Embed = new Discord.EmbedBuilder()
						.setColor("#FF5D00")
						.setTitle(`Chargement de la commande gif.`)
						.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
						.setDescription(`Je cherche l'image a afficher veuillez patienter.`)
						.setTimestamp()
						.setFooter({ text: "Gif" })

					await message.followUp({ embeds: [Embed] })

					Embed = new Discord.EmbedBuilder()
						.setColor("DC00FF")
						.setImage(url = killmotRandom)
						.setDescription(`${message.user.toString()} a kill ${member.user.toString()} pour la raison : \n\`${reason}\``)
						.setTimestamp()
					return await message.editReply({ embeds: [Embed] })
				}
			}

			if (choix !== "kill" || choix !== "badass" || choix !== "kiss" || choix !== "punch") {
				let mauvais = new Discord.EmbedBuilder()
					.setTitle("**__Les category des gif dispo__**")
					.setColor("#000000")
					.setDescription("Les choix de gif dispo sont : \n\n \`kiss\`\n \`kill\`\n \`badass\`\n \`punch\`")
					.setThumbnail(bot.user.displayAvatarURL({ dynamic: true, size: 64 }))
					.setTimestamp()
					.setFooter({ text: "gif" })

				return await message.followUp({ embeds: [mauvais] })
			}
		} catch (err) {

			console.log(`Une erreur dans la commande gif`, err)

		}
	}
}