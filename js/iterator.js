var names = ["Jake", "ADAM", "Sarah", "LINDA", "Peter"];

var myObj = {
    firstname: "Jake",
    lastname: "Raczynski",
    title: "supervisor",
    myMethod: function() {
        return "hello";
    }
};

function collectionChangeCase(lettercase, myArray) {
    
    var myCollection = myArray;
    
    if( typeof myCollection === "object") {
        for( var i in myCollection ) {
            if(typeof myCollection[i] === "string") {
                switch(lettercase.toUpperCase()){
                    case "UPPER":
                        myCollection[i] = myCollection[i].toUpperCase();
                        break;
                    case "LOWER":
                        myCollection[i] = myCollection[i].toLowerCase();
                        break;
                } // end switch
            } // end inner if typeof
        } // end for statement
    } // end outer if typeof
    
    return myCollection;
} // end function collectionToUpper

$("#iterator_output").append( "<p>" + JSON.stringify( collectionChangeCase("lower", myObj) ) + "</p>" );
$("#iterator_output").append( "<p>" + collectionChangeCase("upper", names) + "</p>" );
