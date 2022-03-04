const { CommandInteraction, MessageEmbed, MessageAttachment } = require("discord.js");
const { createCanvas, loadImage, registerFont } = require("canvas");
const { hiscores } = require("osrs-json-api");
const service = require("../../Schema/Services");



module.exports = {
    name: "auto",
    description: "Set auto updates to customer",
    options: [
        {
            name: "time",
            description: "Time in hours",
            type: "NUMBER",
            required: true
        }
    ],

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        try {
            const errEmbed = new MessageEmbed().setColor("RED");
            const SucessEmbed = new MessageEmbed().setColor("GREEN");
            const code = interaction.options.getString("code");
            const time = interaction.options.getNumber("time");
            const channelID = interaction.channel.id;
            const data = await service.findOne({ channelId: channelID });

            if (!data) {
                errEmbed.setDescription("Ticket don't exist, try again");
                return interaction.reply({ embeds: [errEmbed], ephemeral: true });
            }

            const rsn = data.rsn;
            const stats = await hiscores.getPlayer(rsn);

            registerFont("./images/font.ttf", { family: "Runescape" });
            const img = createCanvas(192, 259);
            const ctx = img.getContext("2d");

            const background = await loadImage("./images/Template.png");
            ctx.drawImage(background, 0, 0, img.width, img.height);
            ctx.font = '16px "Runescape"';

            //ATTACK
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["attack"]["level"], 35, 18);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["attack"]["level"], 34, 17);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["attack"]["level"], 49, 29);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["attack"]["level"], 48, 28);

            //HITPOINTS
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["hitpoints"]["level"], 98, 18);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["hitpoints"]["level"], 97, 17);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["hitpoints"]["level"], 112, 29);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["hitpoints"]["level"], 111, 28);

            //MINING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["mining"]["level"], 162, 18);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["mining"]["level"], 161, 17);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["mining"]["level"], 176, 29);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["mining"]["level"], 175, 28);

            //STRENGHT
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["strength"]["level"], 35, 50);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["strength"]["level"], 34, 49);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["strength"]["level"], 49, 60);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["strength"]["level"], 48, 59);

            //AGILITY
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["agility"]["level"], 98, 50);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["agility"]["level"], 97, 49);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["agility"]["level"], 112, 60);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["agility"]["level"], 111, 59);

            //SMITHING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["smithing"]["level"], 162, 50);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["smithing"]["level"], 161, 49);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["smithing"]["level"], 176, 60);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["smithing"]["level"], 175, 59);

            //DEFENCE
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["defence"]["level"], 35, 82);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["defence"]["level"], 34, 81);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["defence"]["level"], 49, 92);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["defence"]["level"], 48, 91);

            //HERBLORE
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["herblore"]["level"], 98, 82);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["herblore"]["level"], 97, 81);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["herblore"]["level"], 112, 92);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["herblore"]["level"], 111, 91);

            //FISHING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["fishing"]["level"], 162, 82);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["fishing"]["level"], 161, 81);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["fishing"]["level"], 176, 92);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["fishing"]["level"], 175, 91);

            //RANGE
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["ranged"]["level"], 35, 114);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["ranged"]["level"], 34, 113);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["ranged"]["level"], 49, 124);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["ranged"]["level"], 48, 123);

            //THIEVING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["thieving"]["level"], 98, 114);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["thieving"]["level"], 97, 113);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["thieving"]["level"], 112, 124);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["thieving"]["level"], 111, 123);

            //COOKING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["cooking"]["level"], 162, 114);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["cooking"]["level"], 161, 113);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["cooking"]["level"], 176, 124);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["cooking"]["level"], 175, 123);

            //PRAYER
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["prayer"]["level"], 35, 146);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["prayer"]["level"], 34, 145);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["prayer"]["level"], 49, 156);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["prayer"]["level"], 48, 155);

            //CRAFTING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["crafting"]["level"], 98, 146);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["crafting"]["level"], 97, 145);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["crafting"]["level"], 112, 156);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["crafting"]["level"], 111, 155);

            //FIREMAKING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["firemaking"]["level"], 162, 146);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["firemaking"]["level"], 161, 145);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["firemaking"]["level"], 176, 156);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["firemaking"]["level"], 175, 155);

            //MAGIC
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["magic"]["level"], 35, 178);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["magic"]["level"], 34, 177);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["magic"]["level"], 49, 188);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["magic"]["level"], 48, 187);

            //FLETCHING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["fletching"]["level"], 98, 178);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["fletching"]["level"], 97, 177);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["fletching"]["level"], 112, 188);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["fletching"]["level"], 111, 187);

            //WOODCUTTING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["woodcutting"]["level"], 162, 178);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["woodcutting"]["level"], 161, 177);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["woodcutting"]["level"], 176, 188);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["woodcutting"]["level"], 175, 187);

            //RUNECRAFTING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["runecraft"]["level"], 35, 210);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["runecraft"]["level"], 34, 209);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["runecraft"]["level"], 49, 220);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["runecraft"]["level"], 48, 219);

            //SLAYER
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["slayer"]["level"], 98, 210);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["slayer"]["level"], 97, 209);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["slayer"]["level"], 112, 220);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["slayer"]["level"], 111, 219);

            //FARMING
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["farming"]["level"], 162, 210);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["farming"]["level"], 161, 209);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["farming"]["level"], 176, 220);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["farming"]["level"], 175, 219);

            //CONSTRUCTION
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["construction"]["level"], 35, 242);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["construction"]["level"], 34, 241);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["construction"]["level"], 49, 252);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["construction"]["level"], 48, 251);

            //HUNTER
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["hunter"]["level"], 98, 242);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["hunter"]["level"], 97, 241);
            ctx.fillStyle = "rgb(0,0,0)"
            ctx.fillText(stats["skills"]["hunter"]["level"], 112, 252);
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["hunter"]["level"], 111, 251);

            //TOTAL
            ctx.fillStyle = "rgb(255, 255, 0)";
            ctx.fillText(stats["skills"]["overall"]["level"], 148, 252);

            const attatchment = new MessageAttachment(img.toBuffer(), "Update.png");

            SucessEmbed
                .setTitle(`${data.nameOfServices} Update`)
                .setDescription(`**STATUS**: \`${data.status}\`\n
                        **EXPERIENCE GAINED FROM LAST UPDATE**: \`${(stats["skills"]["overall"]["xp"] - data.experience) / 1000}K\`\n
                        **NOTE**: \`${data.note}\``)
                .setThumbnail(data.avatar)
                .setTimestamp();

                await interaction.reply({ content: "Auto Update Set", ephemeral: true });


           setInterval(() => {
            interaction.channel.send({ content: `<@${data.customerId}> Here is the update for today`, embeds: [SucessEmbed] });
            interaction.channel.send({ files: [attatchment] });
            service.updateOne({ channelId: channelID }, { experience: stats["skills"]["overall"]["level"] });
           }, time * 60 * 60 * 1000); 
        } catch (error) {
            console.log(error)
        };
    }
}