module.exports = {
	name: 'starter',
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		message.channel.send("Oops " + message.author.toString() + ", you haven\'t picked a starter yet.\nPlease use the `+choose` command to get your first Pokemon.");
	},
};
