module.exports = {
	name: 'beep',
	description: 'Beep!',
	execute(message, args, db) {
		message.channel.send('Bam! Bam!');
	},
};