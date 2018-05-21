const Discord = require('discord.js');

module.exports = {
    name: 'start',
    description: 'Get info on how to obtain your first pokemon',
    cooldown: 5,
    execute(message, args, db) {
      const exampleEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Monstacord')
      .setURL('https://discord.gg/jjw8n82')
      .setAuthor('Monsta-Madness', 'https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048', 'https://cdn.discordapp.com/attachments/446131041447575590/447152580452155393/200px-Ashachu.png')
      .setDescription('Welcome to Monstacoord! Now lets get you a starter Pokemon!!')
      .setThumbnail('https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048')
      .addField('Starters', 'The List of Starters are Below')
      .addField('Gen 1', 'Bulbasaur | Squirtle | Charmander')
      .addField('Gen 2', 'Chikorita | Cyndaquil | Totodile')
      .addField('Gen 3', 'Treecko | Torchic | Mudkip')
      .addField('Gen 4', 'Turtwig | Chimchar | Piplup')
      .addField('Gen 5', 'Snivy | Tepig | Oshawott')
      .addField('Gen 6', 'Chespin | Fennekin | Froakie')
      .addField('Gen 7', 'Rowlet | Litten | Popplio')
      .addBlankField()
      .setImage('https://cdn.discordapp.com/attachments/446131041447575590/447154914792046621/starters.png')
      .setTimestamp()
      .setFooter('Be sure to use the **+choose** command to get your Pokemon. Also the **+help** command will be useful as well.', 'https://cdn.discordapp.com/avatars/236856961478557696/e4755472dcea6b2edc70194713487faa.png?size=2048');

      message.channel.send({ embed: exampleEmbed });
  },
};
