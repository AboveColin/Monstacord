module.exports = {
	name: 'choose',
	description: 'Choose A Starter Pokemon',
	cooldown: 10,
	execute(message, args) {
		if (args[0] === 'bulbasaur') {
			return message.channel.send(`Good Choice ${message.author}! Bulbasaur is now your first Pokemon!`);
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};
