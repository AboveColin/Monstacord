const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows All Commands',
    cooldown: 5,
    execute(message) {
      const exampleEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Help')
      .setURL('https://discord.gg/jjw8n82')
      .setAuthor('Monsta-Madness', 'https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048', 'https://cdn.discordapp.com/attachments/446131041447575590/447152580452155393/200px-Ashachu.png')
      .setDescription('Welcome to Monstacoord! Commands at your fingertips!')
      .setThumbnail('https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048')
      .addField('Commands', '**__Getting Started__**\n+start | Start-up Message\n+choose | Pick Your Pokemon\n+help | Shows This Message\n**__Pokemon Commands__**\n+select | Selecting a Pokemon\n+info | Info on the Current Selected Pokemon\n+party | Shows your Party List\n+mega | Mega Pokemon!\n+catch | Catch a Spawned Pokemon\n+pokemon | Shows a List of Your Pokemon\n+duel | Duel With Someone\n+trade | Trade With Someone')
      .addBlankField()
      .setImage('https://cdn.discordapp.com/attachments/446131041447575590/447154914792046621/starters.png')
      .setTimestamp()
      .setFooter('Again thanks for chooseing Monstacord', 'https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048');

      message.channel.send({ embed: exampleEmbed });
  },
};
