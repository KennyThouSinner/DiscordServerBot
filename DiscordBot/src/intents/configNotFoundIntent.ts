import BaseIntent from "../baseIntent";
import { RichEmbed } from "discord.js"
import { IntentData } from "../models/intentData";

export default class ConfigNotFoundIntent extends BaseIntent {

    intent = "faqs.confignotfound";

    public async process(intentData: IntentData): Promise<void> {

        let embed = new RichEmbed();

        embed.setTitle("Error with your config file?");

        embed.setDescription("We've added an faq item about this! #f-a-q");

        intentData.message.channel.send(embed);
    }
}