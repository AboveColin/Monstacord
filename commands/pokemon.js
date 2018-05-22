module.exports = {
	name: 'pokemon',
	description: 'Pokemon List',
	cooldown: 1,
	execute(message, args, db) {
		db.each("SELECT * FROM user_monsters JOIN monsters ON user_monsters.monster_id = monsters.ID WHERE user_id='" + message.author.id + "';",function(err,row){
		if(err){
			console.log(err);
		}else if(row != undefined){
			message.reply(row.name);
		}
		});
	},
};