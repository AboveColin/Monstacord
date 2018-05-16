module.exports = {
	name: 'beep',
	description: 'Beep!',
	execute(message) {
		message.channel.send('Bam! Bam!');
	},
};