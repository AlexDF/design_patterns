// Constructor for generic game character

function Player(name, level, maxhealth) {
	this.name = name;
	this.level = level;
	this.maxhealth = maxhealth;
	this.currentHealth = maxhealth;
}

// Creating instance of generic player

var warrior = new Player("Simon Belmont", 1, 100);
$("#decorator_output").append("<p>" + JSON.stringify(warrior) + "</p>");

// Decorating player with warrior-related attributes/abilities

// During game, player finds an iron sword
warrior.sword = "Iron Sword";
$("#decorator_output").append("<p>" + JSON.stringify(warrior) + "</p>");

// Player learns a new ability
/*warrior.ability.fireball(target) {
	target.currentHealth -= 50;
};*/

// Creating decorator function to decorate player instances
function LevelUp( character ) {
	character.level += 1;
	character.maxhealth += 50;
};

LevelUp( warrior );
console.log( warrior.level );
console.log( warrior.maxhealth );
$("#decorator_output").append("<p>" + JSON.stringify(warrior) + "</p>");

var player2 = new Player("Sylvia", 1, 100);
$("#decorator_output").append("<p>" + JSON.stringify(player2) + "</p>");



