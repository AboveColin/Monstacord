
module.exports = {
	name: 'poke-balance',
	description: 'Choose A Starter Pokemon',
	cooldown: 5,
	execute(message, args, db) {
		message.channel.sendMessage('`This will show you the amount of Pokecoins you currently have.`');
	},
};