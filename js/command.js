(function(){
	var Calculator = {
		
		// add two numbers
		add: function( num1, num2 ) {
			return num1 + num2;
		},
		
		// subtract two numbers
		subtract: function( num1, num2 ) {
			return num1 - num2;
		},
		
		// multiply two numbers
		multiply: function( num1, num2 ) {
			return num1 * num2;
		},
		
		// divide two numbers
		divide: function( num1, num2 ) {
			return num1 / num2;
		}
	};
	
	Calculator.execute = function ( methodName ) {
		return Calculator[methodName] && Calculator[methodName].apply( Calculator, [].slice.call(arguments, 1) );
	};
	
	console.log( Calculator.execute("add", 6, 7) );
	console.log( Calculator.execute("subtract", 9, 2) );
	console.log( Calculator.execute("multiply", 12, 12) );
	console.log( Calculator.execute("divide", 64, 16) );
	
})();