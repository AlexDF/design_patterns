// A vehicle constructor
function Vehicle( vehicleType ) {
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














