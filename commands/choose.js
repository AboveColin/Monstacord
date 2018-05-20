module.exports = {
	name: 'choose',
	description: 'Choose A Starter Pokemon',
	cooldown: 10,
	execute(message, args) {
		if (args[0] === 'bulbasaur') {
			return message.channel.send(`Good Choice ${message.author}! Bulbasaur is now your first Pokemon!`);
		}

		else if (args[0] === 'squirtle') {
			return message.channel.send(`Good Choice ${message.author}! Squirtle is now your first Pokemon!`);
		}

		else if (args[0] === 'charmander') {
			return message.channel.send(`Good Choice ${message.author}! Charmander is now your first Pokemon!`);
		}

		else if (args[0] === 'pikachu') {
			return message.channel.send(`Good Choice ${message.author}! Pikachu is now your first Pokemon!`);
		}

		else if (args[0] === 'chikorita') {
			return message.channel.send(`Good Choice ${message.author}! Chikorita is now your first Pokemon!`);
		}

		else if (args[0] === 'cyndaquil') {
			return message.channel.send(`Good Choice ${message.author}! Cyndaquil is now your first Pokemon!`);
		}

		else if (args[0] === 'totodile') {
			return message.channel.send(`Good Choice ${message.author}! Totodile is now your first Pokemon!`);
		}

		else if (args[0] === 'treecko') {
			return message.channel.send(`Good Choice ${message.author}! Treecko is now your first Pokemon!`);
		}

		else if (args[0] === 'torchic') {
			return message.channel.send(`Good Choice ${message.author}! Torchic is now your first Pokemon!`);
		}

		else if (args[0] === 'mudkip') {
			return message.channel.send(`Good Choice ${message.author}! Mudkip is now your first Pokemon!`);
		}

		else if (args[0] === 'turtwig') {
			return message.channel.send(`Good Choice ${message.author}! Turtwig is now your first Pokemon!`);
		}

		else if (args[0] === 'chimchar') {
			return message.channel.send(`Good Choice ${message.author}! Chimchar is now your first Pokemon!`);
		}

		else if (args[0] === 'piplup') {
			return message.channel.send(`Good Choice ${message.author}! Piplup is now your first Pokemon!`);
		}

		else if (args[0] === 'snivy') {
			return message.channel.send(`Good Choice ${message.author}! Snivy is now your first Pokemon!`);
		}

		else if (args[0] === 'tepig') {
			return message.channel.send(`Good Choice ${message.author}! Tepig is now your first Pokemon!`);
		}

		else if (args[0] === 'oshawott') {
			return message.channel.send(`Good Choice ${message.author}! Oshawott is now your first Pokemon!`);
		}

		else if (args[0] === 'chespin') {
			return message.channel.send(`Good Choice ${message.author}! Chespin is now your first Pokemon!`);
		}

		else if (args[0] === 'fennekin') {
			return message.channel.send(`Good Choice ${message.author}! Fennekin is now your first Pokemon!`);
		}

		else if (args[0] === 'froakie') {
			return message.channel.send(`Good Choice ${message.author}! Froakie is now your first Pokemon!`);
		}

		else if (args[0] === 'rowlet') {
			return message.channel.send(`Good Choice ${message.author}! Rowlet is now your first Pokemon!`);
		}

		else if (args[0] === 'litten') {
			return message.channel.send(`Good Choice ${message.author}! Litten is now your first Pokemon!`);
		}

		else if (args[0] === 'popplio') {
			return message.channel.send(`Good Choice ${message.author}! Popplio is now your first Pokemon!`);
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};
