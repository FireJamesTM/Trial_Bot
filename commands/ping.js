module.exports = {
	name: 'ping',
	description: 'ping',
	aliases: ["p"],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		message.reply('pong!');
	},
};