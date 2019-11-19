app.listen(process.env.PORT || 5000);

const Discord = require ('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.login(token);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {


	//console.log(message.content);
	if (message.content.startsWith(`${prefix}greetings`)) {
		message.channel.send("Homo's :wave:");
	}
});
