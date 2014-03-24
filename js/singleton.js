var mySingleton = (function () {
	
	var instance;
	
	function init() {
		
		
		//function privateMethod() {
		//	console.log( "I am private" );
		//}
		
		//var privateVariable = "I'm also private";
		//var privateRandomNumber = Math.random();
		
		return {
			//publicMethod: function() {
			//	console.log( "The public can see me!" );
			//},
			//publicProperty: "I am also public",
			getCurrentTime: function() {
				var myDate = new Date();
				var hours = myDate.getHours();
				var minutes = myDate.getMinutes();
				var seconds = myDate.getSeconds();
				var milliseconds = myDate.getMilliseconds();
				var now = "Time: " + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
				return now;
			}
		};
	};
	
	return {
		getInstance: function() {
			if( !instance ) {
				instance = init();
			}
			return instance;
		}
	};
	
})();

var singleA = mySingleton.getInstance();
var timeA = singleA.getCurrentTime();
setTimeout(function() {
	var singleB = mySingleton.getInstance();
	var timeB = singleB.getCurrentTime();
}, 3000);

console.log("timeA = " + timeA);
console.log("timeB = " + timeB);
console.log( singleA.getCurrentTime() === singleB.getCurrentTime());
