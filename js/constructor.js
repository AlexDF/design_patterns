function Atom(name, protons, neutrons, electrons) {
	this.element = name;
	this.protons = protons;
	this.neutrons = neutrons;
	this.electrons = electrons;
}

var carbonAtom = new Atom("carbon", 6, 6, 6);
console.log(carbonAtom.electrons);
