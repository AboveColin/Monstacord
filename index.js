const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
const sql = require("sqlite3");
var db = new sql.Database('mc.sqlite');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS `users`( `discord_ID` TEXT NOT NULL UNIQUE, `points` INTEGER NOT NULL DEFAULT 0, `last_interaction` NUMERIC DEFAULT 0, `caught_starter` INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(`discord_ID`));");
  db.run("CREATE TABLE IF NOT EXISTS `user_monsters` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `user_id` INTEGER NOT NULL, `exp` INTEGER NOT NULL DEFAULT 1, `iv` NUMERIC NOT NULL, `shiny` INTEGER NOT NULL DEFAULT 0, FOREIGN KEY(`user_id`) REFERENCES `users`(`discord_ID`) );");
  db.run("CREATE TABLE IF NOT EXISTS `monsters` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `catch_rate` NUMERIC NOT NULL DEFAULT 1, `flee_rate` NUMERIC NOT NULL DEFAULT 0 );");
  // var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
//   for (var i = 0; i < 10; i++) {
//   
//   var d = new Date();
//   var n = d.toLocaleTimeString();
//   stmt.run(i, n);
//   }
//   stmt.finalize();
// 
//   db.each("SELECT id, dt FROM user", function(err, row) {
//       console.log("User id : "+row.id, row.dt);
//   });
});

//db.close();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.on('ready', () => {
	client.generateInvite([])

    .then(link => {

      console.log(`\nInvite link with no permissions: ${link}`)

    })
});

client.on('message', async message => {
	db.all("SELECT points FROM users WHERE discord_ID='" + message.author.id + "';",function(err,rows){
		if(err){
			console.log(err);
		}else if(rows != undefined && rows[0] != undefined){
       		var authorPoints = rows[0].points;
    		let curLevel = Math.floor(0.1 * Math.sqrt(authorPoints));
			authorPoints++;
    		let newLevel = Math.floor(0.1 * Math.sqrt(authorPoints));
    		if (curLevel > newLevel) {
      			message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
    		}
		    if (message.content.startsWith(prefix + "level")) {
      			message.reply(`You are currently level ${newLevel}, with ${authorPoints} points.`);
    		}
		}else{
       		var stmt = db.prepare("INSERT INTO users VALUES (?,0,?);");
  			stmt.run(message.author.id, new Date().valueOf());
  			stmt.finalize();
       	}
       
	});
	
    db.run("UPDATE users SET points = points + 1 WHERE discord_ID='" + message.author.id + "';");
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	try {
		command.execute(message, args, db);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  
  if (!channel) return;
  
  channel.send(`Welcome to the server, ${member}`);

});

// Create a new webhook
const hook = new Discord.WebhookClient('446787674981007391', '3AlOQNV4cA-XReoMwY6GkWkoiawTX__Qtyz4NYK90GSH82Nu5JWcljwCiH3uqM9PtKWj');

// Send a message using the webhook
hook.send('`Guess Who\'s Back!! It\'s Monstacord!!`');

client.login(token);
