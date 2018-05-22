module.exports = {
	name: 'choose',
	description: 'Choose A Starter Pokemon',
	cooldown: 10,
	execute(message, args, db) {
		db.all("SELECT caught_starter FROM users WHERE discord_ID='" + message.author.id + "';",function(err,rows){
		if(err){
			console.log(err);
		}else if(rows != undefined && rows[0] != undefined){
			if(rows[0].caught_starter > 0){
				return message.channel.send(`${message.author} You have already chosen a starter!`);
			}else{
				var valid = false;
				db.all("SELECT * FROM monsters WHERE LOWER(name)=LOWER('" + args[0] + "');",function(err,rows){
					if(rows != null && rows.length > 0){
						var row = rows[0];
						if(row.is_starter > 0 && row.name.toLowerCase() == args[0].toLowerCase()){
							db.exec("UPDATE users SET caught_starter='1' WHERE discord_ID='" + message.author.id + "';");
							db.exec("INSERT INTO user_monsters (user_id, monster_id, iv, shiny) VALUES ('" + message.author.id + "','" + row.ID + "','" + Math.random() + "','" + (Math.random() >= 0.95 ? '1' : '0') + "');");
							return message.channel.send(`Good Choice ${message.author}! ${row.name} is now your first Pokemon!`);
						}
					}else{
						message.channel.send(`${message.author} Invalid starter to choose!`);
					}
				});
			}
		}
		});
	}
};
