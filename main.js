// Requiring Pokemon API
const pokeflow = require("pokemon");
const prompt = require("prompt-sync")();

// Menu 
console.log(" ");
console.log("1. Charmander");
console.log("2. Ivysaur");
console.log("3. Bulbasaur");
console.log(" ");
console.log("4. Type a random number and select another pokemon!");
console.log("5. List all Pokemones availables");
console.log(" ");
console.log("Copyright Daniel Plata - ull dominate, for sure.");
console.log("");

// Menu - asking
var asking = prompt("Hello, select your pokemon to show more details! : ");
asking = parseInt(asking);

// Menu - logic
const getPoke = (asking) => {
	console.log("");	
	return console.log("Felicidades! : Tu nuevo Pokemon es: " + pokeflow.getName(asking));	
};

switch (asking) {
	// Charmander
	case 1:
		getPoke(4);
	break;

	// Ivysaur
	case 2:
		getPoke(2);
	break;

	// Bulbasaur
	case 3:
		getPoke(1);
	break;

	// Select another (list all)
	case 4:
		console.log("");
		const askingRandom =  prompt("Type a random number!: ");
		console.log("Congratulations! you got: " + pokeflow.getName(askingRandom));		
	break;			

	case 5:
		console.log("");
		console.log("Select one Pokemon : " +  pokeflow.all());
	break;	
};


// console.log(pokeflow.getId("Bulbasaur"));
