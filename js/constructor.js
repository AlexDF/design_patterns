function Atom(name, protons, neutrons, electrons) {
	this.element = name;
	this.protons = protons;
	this.neutrons = neutrons;
	this.electrons = electrons;
}

var carbonAtom = new Atom("nitrogen", 7, 7, 7);
$("#constructor_output").append("<p>" + carbonAtom.element + "</p>");
$("#constructor_output").append("<p>" + carbonAtom.protons + "</p>");
$("#constructor_output").append("<p>" + carbonAtom.neutrons + "</p>");
$("#constructor_output").append("<p>" + carbonAtom.electrons + "</p>");