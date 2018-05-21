
module.exports = {
	name: 'vote',
	description: 'Choose A Starter Pokemon',
	cooldown: 5,
	execute(message, args, db) {
		message.channel.sendMessage('`Coming Soon`');
	},
};