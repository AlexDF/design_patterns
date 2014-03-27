// A vehicle constructor
/*function Vehicle( vehicleType ) {
	// some defaults
	this.vehicleType = vehicleType || "car";
	this.model = "default";
	this.license = "00000-000";
}

// Test instance for a basic vehicle
var testInstance = new Vehicle( "car" );
console.log( testInstance );

// Outputs:
// { vehicleType: car, model:default, license: 00000-000 }

// Lets create a new instance of vehicle, to be decorated
var truck = new Vehicle( "truck" );

// New functionality we're decorating vehicle with
truck.setModel = function( modelName ) {
	this.model = modelName;
};

truck.setColor = function( color ) {
	this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel( "CAT" );
truck.setColor( "blue" );

console.log( truck );

// Outputs:
// { vehicleType: 'truck',
//   model: 'CAT',
//   license: '00000-000',
//   setModel: [Function],
//   setColor: [Function],
//   color: 'blue' }


// Demonstrate "vehicle" is still unaltered
var secondInstance = new Vehicle( "car" );
console.log( secondInstance );

// Outputs:
// { vehicleType: "car", model:default, license: 00000-000 }
*/

//************** End Example *****************

//************** Begin My Implementation of Decorator Pattern **********************

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



