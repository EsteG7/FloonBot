const Discord = require("discord.js")
const transcript = require("discord-html-transcripts")
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, SelectMenuBuilder } = require("discord.js")


module.exports = async (bot, interaction) => {

    if (interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete) {

        let entry = interaction.options.getFocused()

        if (interaction.commandName === "help") {

            let choices = bot.commands.filter(cmd => cmd.name.includes(entry))
            await interaction.respond(entry === "" ? bot.commands.map(cmd => ({ name: cmd.name, value: cmd.name })) : choices.map(choice => ({ name: choice.name, value: choice.name })))
        }
    }

    if (interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = require(`../Commandes/${interaction.commandName}`)
        command.run(bot, interaction, interaction.options, bot.db)
    }
    if (interaction.isButton()) {

        if (interaction.customId.startsWith("reglement")) {
            const role = interaction.guild.roles.cache.get(interaction.customId.split("reglement")[1])
            interaction.member.roles.add(role.id).then(() => {
                interaction.reply({ content: `<@&${role.id}> a étais ajouter `, ephemeral: true })

            })

        }


        if (interaction.customId === "close") {
            let EmbedPermissionClose = new EmbedBuilder()
                .setColor("#3dffcc")
                .setDescription(`❌ Vous n'avez pas la permission requise !`)

            if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) return interaction.reply({ embeds: [EmbedPermissionClose], ephemeral: true })

            let EmbedCloseTicket = new EmbedBuilder()
                .setColor("#3dffcc")
                .setDescription(`Êtes-vous sûr de vouloir fermer le ticket ?`)
            let Button = new ActionRowBuilder()
                .addComponents(new ButtonBuilder()
                    .setCustomId('oui')
                    .setLabel("Oui")
                    .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId('non')
                        .setLabel("Non")
                        .setStyle(ButtonStyle.Danger),
                );
            await interaction.reply({ embeds: [EmbedCloseTicket], components: [Button] });
        }
        else if (interaction.customId === "oui") {
            let EmbedPermissionClose = new EmbedBuilder()
                .setColor("#3dffcc")
                .setDescription(`❌ Vous n'avez pas la permission requise !`)

            if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) return interaction.reply({ embeds: [EmbedPermissionClose], ephemeral: true })

            interaction.channel.delete();
        }
        else if (interaction.customId === "non") {
            let EmbedPermissionClose = new EmbedBuilder()
                .setColor("#3dffcc")
                .setDescription(`❌ Vous n'avez pas la permission requise !`)

            if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) return interaction.reply({ embeds: [EmbedPermissionClose], ephemeral: true })

            interaction.message.delete()
        }
        else if (interaction.customId === "transcript") {

            let EmbedSendTranscript = new EmbedBuilder()
                .setColor("#3dffcc")
                .setDescription(`✅ Transcript envoyé avec succès !`)
            let EmbedTranscript = new EmbedBuilder()
                .setColor("#3dffcc")
                .setDescription(`📑 Transcript de ${interaction.message.embeds[0].description.split(" ")[0]}`)
            let EmbedPermissionTranscript = new EmbedBuilder()
                .setColor("#3dffcc")
                .setDescription(`❌ Vous n'avez pas la permission requise !`)

            if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageChannels)) return interaction.reply({ embeds: [EmbedPermissionTranscript], ephemeral: true })

            await interaction.deferReply({ ephemeral: true })
            await bot.channels.cache.get("973908897024843806").send({ embeds: [EmbedTranscript], files: [await transcript.createTranscript(interaction.channel)] })
            await interaction.editReply({ embeds: [EmbedSendTranscript], ephemeral: true })
        }
    }

    if (interaction.isSelectMenu()) {

        if (interaction.customId === 'menuticket') {
            if (interaction.values == 'help' || `test` || `rôle`) {
                const EmbedTicket1 = new EmbedBuilder()
                    .setColor("#3dffcc")
                    .setTitle(`Comment créer un ticket ?`)
                    .setDescription(`Pour créer un ticket, il vous suffit juste de cliquer sur le menu déroulant ci-dessous et de sélectionner la catégorie qui convient le mieux à votre demande d'aide !\n- Pas de mentions sauf si vous n'avez pas reçu de réponse sous 24h.\n- Pas de spam.\n- Ne pas créer de ticket pour des trucs qui ne servent a rien.`)
                    .setTimestamp()
                    .setFooter({ text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL({ dynamic: true }) });

                const RowTicket = new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('menuticket')
                            .setPlaceholder('Sélectionner le type de ticket que vous voulez !')
                            .addOptions(
                                {
                                    label: `Besoin d'aide`,
                                    description: `Ouvrir un ticket pour obtenir de l'aide`,
                                    emoji: `🙋‍♂️`,
                                    value: `help`,
                                },
                                {
                                    label: `Recrutement modo`,
                                    description: `Ouvrir un ticket pour obtenir de l'aide`,
                                    emoji: `🙋‍♂️`,
                                    value: `test`,
                                },
                                {
                                    label: `Probleme de rôle`,
                                    description: `Ouvrir un ticket pour obtenir de l'aide`,
                                    emoji: `🙋‍♂️`,
                                    value: `rôle`,
                                },
                            ),
                    );
                await interaction.deferUpdate();
                await interaction.editReply({ embeds: [EmbedTicket1], components: [RowTicket] })

                if (interaction.values == 'help') {
                    let channel = await interaction.guild.channels.create({
                        parent: "972211988564439110",
                        name: `help-${interaction.user.username}`,
                        type: ChannelType.GuildText,
                        permissionOverwrites: [
                            {
                                id: interaction.guild.roles.everyone,
                                deny: [Discord.PermissionFlagsBits.ViewChannel],
                            },
                            {
                                id: interaction.user,
                                allow: [Discord.PermissionFlagsBits.SendMessages, Discord.PermissionFlagsBits.ViewChannel],
                            },
                        ],
                    })

                    let EmbedCreateChannel = new EmbedBuilder()
                        .setColor("#3dffcc")
                        .setTitle('Ticket ouvert')
                        .setDescription("<@" + interaction.user.id + "> Voici votre ticket.\nExpliquez-nous en détail votre problème !")
                        .setTimestamp()
                        .setFooter({ text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL({ dynamic: true }) });
                    const Row = new ActionRowBuilder()
                        .addComponents(new ButtonBuilder()
                            .setCustomId('close')
                            .setLabel('Fermer le ticket')
                            .setEmoji('🗑️')
                            .setStyle(ButtonStyle.Danger),
                            new ButtonBuilder()
                                .setCustomId('transcript')
                                .setLabel('Demander le transcript')
                                .setEmoji('📑')
                                .setStyle(ButtonStyle.Primary),
                        );


                    await channel.send({ embeds: [EmbedCreateChannel], components: [Row] })

                    const EmbedSuccessCreateChannel = new EmbedBuilder()
                        .setColor("#3dffcc")
                        .setDescription(`✅ Votre salon a été créé avec succès ${channel} !`)

                    await interaction.followUp({ embeds: [EmbedSuccessCreateChannel], ephemeral: true })
                }
            }
        }
    } if (interaction.values == 'test') {
        let channel = await interaction.guild.channels.create({
            parent: "972211988564439110",
            name: `Recrutement modo-${interaction.user.username}`,
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                    id: interaction.guild.roles.everyone,
                    deny: [Discord.PermissionFlagsBits.ViewChannel],
                },
                {
                    id: interaction.user,
                    allow: [Discord.PermissionFlagsBits.SendMessages, Discord.PermissionFlagsBits.ViewChannel],
                },
            ],
        })

        let EmbedCreateChannel = new EmbedBuilder()
            .setColor("#3dffcc")
            .setTitle('Ticket ouvert')
            .setDescription("<@" + interaction.user.id + "> Voici votre ticket.\nExpliquez-nous en détail votre problème !")
            .setTimestamp()
            .setFooter({ text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL({ dynamic: true }) });
        const Row = new ActionRowBuilder()
            .addComponents(new ButtonBuilder()
                .setCustomId('close')
                .setLabel('Fermer le ticket')
                .setEmoji('🗑️')
                .setStyle(ButtonStyle.Danger),
                new ButtonBuilder()
                    .setCustomId('transcript')
                    .setLabel('Demander le transcript')
                    .setEmoji('📑')
                    .setStyle(ButtonStyle.Primary),
            );
    } if (interaction.values == 'rôle') {
        let channel = await interaction.guild.channels.create({
            parent: "972211988564439110",
            name: `Recrutement modo-${interaction.user.username}`,
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                    id: interaction.guild.roles.everyone,
                    deny: [Discord.PermissionFlagsBits.ViewChannel],
                },
                {
                    id: interaction.user,
                    allow: [Discord.PermissionFlagsBits.SendMessages, Discord.PermissionFlagsBits.ViewChannel],
                },
            ],
        })

        let EmbedCreateChannel = new EmbedBuilder()
            .setColor("#3dffcc")
            .setTitle('Ticket ouvert')
            .setDescription("<@" + interaction.user.id + "> Voici votre ticket.\nExpliquez-nous en détail votre problème !")
            .setTimestamp()
            .setFooter({ text: `${bot.user.username}`, iconURL: bot.user.displayAvatarURL({ dynamic: true }) });
        const Row = new ActionRowBuilder()
            .addComponents(new ButtonBuilder()
                .setCustomId('close')
                .setLabel('Fermer le ticket')
                .setEmoji('🗑️')
                .setStyle(ButtonStyle.Danger),
                new ButtonBuilder()
                    .setCustomId('transcript')
                    .setLabel('Demander le transcript')
                    .setEmoji('📑')
                    .setStyle(ButtonStyle.Primary),
            );


        await channel.send({ embeds: [EmbedCreateChannel], components: [Row] })

        const EmbedSuccessCreateChannel = new EmbedBuilder()
            .setColor("#3dffcc")
            .setDescription(`✅ Votre salon a été créé avec succès ${channel} !`)

        await interaction.followUp({ embeds: [EmbedSuccessCreateChannel], ephemeral: true })
    }
}








