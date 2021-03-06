module.exports = {
	name: 'purge',
	description: 'Delete up to 99 messages at a time.',
	execute(message, args, db) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 1000) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to delete messages in this channel!');
		});
	},
};
