module.exports = {
	name: 'choose',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args) {
		const pokemon = parseInt(args[0]) + 1;

		if (isNaN(pokemon)) {
			return message.reply('that doesn\'t seem to be a valid starter pokemon name.');
		}
		else if (pokemon <= bulbasaur || amount > litten) {
			return message.reply('you need to input a starter name to get started.');
		}

		message.channel.bulkDelete(pokemon, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to get your starter pokemon!');
		});
	},
};