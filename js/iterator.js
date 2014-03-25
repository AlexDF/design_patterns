$.each( ["john", "dave", "rick", "julian"], function( index, value ) {
	console.log( index + ": " + value);
});

$( "li" ).each( function ( index ) {
	console.log( index + ": " + $( this ).text() );
});
