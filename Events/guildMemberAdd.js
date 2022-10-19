const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");


module.exports = async (bot, member, interaction,) => {

    let db = bot.db;


    const addRole = member.guild.roles.cache.find(r => r.name === "Non verif")
    if (!addRole) {
        const addRole = await member.guild.roles.create({
            name: 'Non verif', color: "DarkGold"
        });
        await member.roles.add(addRole);
    } else {
        member.roles.add(addRole)
    }



    db.query(`SELECT * FROM server WHERE guild = '${member.guild.id}'`, async (err, req) => {

        if (req.length < 1 || Boolean(req[0].captcha) === false) return;

        let channel = member.guild.channels.cache.get(req[0].captcha)
        if (!channel) return;

        await channel.permissionOverwrites.create(member.user, {
            SendMessages: true,
            ViewChannel: true,
            ReadMessageHistory: true
        })

        let captcha = await bot.fonction.generateCaptcha()

        let msg = await channel.send({ content: `${member}, Vous avez 2 minutes pour faire le captcha ! Si vous le réussissez pas vous serez exclue du serveur`, files: [new Discord.AttachmentBuilder((await captcha.canvas).toBuffer(), { name: "captcha.png" })] })

        try {
            let filter = m => m.author.id === member.user.id;
            let response = (await channel.awaitMessages({ filter, max: 1, time: 120000, errors: ["time"] })).first()

            if (response.content === captcha.text) {

                await msg.delete()
                await response.delete()
                try { await member.user.send("Vous avez réussi le captcha") } catch (err) { }
                await channel.permissionOverwrites.delete(member.user.id)
                const removeRole = member.guild.roles.cache.find(r => r.name === "Non verif")
                member.roles.remove(removeRole)

            } else {
                await msg.delete()
                await response.delete()
                try { await member.user.send("Vous avez échoué le captcha!") } catch (err) { }
                await channel.permissionOverwrites.delete(member.user.id)
                await member.kick("A raté  le captcha")
            }

        } catch (err) {

            await msg.delete()
            try { await member.user.send("Vous avez mis trop de temps a fair le captcha") } catch (err) { }
            await channel.permissionOverwrites.delete(member.user.id)
            await member.kick("pas fait le captcha")

        }
    })





    const EmbedMessage = new EmbedBuilder()
        .setTitle(`Nom de ton Serveur`)
        .setColor('#0C15CF')
        .setDescription(`Le membre : <@${member.user.id}>.\n \u200B \nViens de rejoindre la Team.`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()

    bot.channels.cache.get('972786095446167572').send({ embeds: [EmbedMessage] })
}