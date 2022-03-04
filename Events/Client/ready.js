const { Client } = require('discord.js');
const { database } = require("../../config.json");
const mongoose = require("mongoose");

module.exports = {
    name: "ready",
    once: true,

    /**
     * 
     * @param {Client} client 
     */

    async execute(client) {
        console.log(`${client.user.tag} is online!`);
        client.user.setPresence({ activities: [{ name: "Updates ", type: "WATCHING" }], status: "dnd" });

        mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("The client is now connected to the database!");
        }).catch(err => {
            console.log(err);
        });


    }
}