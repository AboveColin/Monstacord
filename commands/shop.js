module.exports = {
	name: 'shop',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args, db) {
		message.channel.send('Coming Soon');
	},
};