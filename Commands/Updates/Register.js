const { CommandInteraction, MessageEmbed, MessageAttachment } = require("discord.js");
const { createCanvas, loadImage, registerFont } = require("canvas");
const { hiscores } = require("osrs-json-api");
const service = require("../../Schema/Services");

module.exports = {
    name: "register",
    description: "register a services in the database",
    options: [
        {
            name: "customer",
            description: "Customer of the services",
            type: "USER",
            required: true
        },
        {
            name: "rsn",
            description: "Name of the Runescape Account",
            type: "STRING",
            required: true

        },
        {
            name: "name",
            description: "Name of the services",
            type: "STRING",
            required: true
        }
    ],

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        try {
            if (!interaction.member.permissions.has("ADMINISTATOR")) return interaction.reply({ content: "You don't have permissions to use this command", ephemeral: true })
            const SucessEmbed = new MessageEmbed().setColor("GREEN");
            const errEmbed = new MessageEmbed().setColor("RED");
            const rsn = interaction.options.getString("rsn");
            const stats = await hiscores.getPlayer(rsn);
            const customer = interaction.options.getUser("customer");
            const nameOfService = interaction.options.getString("name");
            const channelID = interaction.channel.id;
            let newData = new service({
                channelId: channelID,
                nameOfServices: nameOfService,
                customerId: customer.id,
                rsn: rsn,
                status: "RUNNING",
                experience: stats["skills"]["overall"]["xp"],
                note: "Starting services",
                avatar: customer.avatarURL(),
                customerName: customer.username
            });
            await newData.save()
                .then(async () => {
                    SucessEmbed.setDescription(`**Services registered in the database!.**`)
                    return await interaction.reply({ embeds: [SucessEmbed] });
                }).catch((err) => {
                    errEmbed.setDescription(`An error has occurred\n\`${err}\``)
                    return interaction.reply({ embeds: [errEmbed] });
                });
        } catch (error) {
            console.log(error);
        }
    }
}