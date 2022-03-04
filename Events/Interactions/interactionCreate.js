const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){
      if(interaction.isButton){
        if(interaction.customId === "Verified"){
          if(interaction.member.roles.cache.has("929418892894425201")) return interaction.reply({content:":x: | you has been verified before!", ephemeral: true})
          await interaction.member.roles.add("929418892894425201")

          interaction.reply({content:":white_check_mark: | you has been verified correctly!", ephemeral: true})
        }
      }
        if(interaction.isCommand()){
            const command = client.commands.get(interaction.commandName);
            if(!command)return interaction.reply({embeds:[
                new MessageEmbed()
                .setColor("RED")
                .setDescription("⛔ an error ocured while running this command.")
            ]}) && client.commands.delete(interaction.commandName);

            command.execute(interaction, client)
        }
    }

}