// Requiring Pokemon API
const pokeflow = require("pokemon");
const prompt = require("prompt-sync")();

// Menu 
console.log(" ");
console.log("1. Charmander");
console.log("2. Ivysaur");
console.log("3. Bulbasaur");
console.log(" ");
console.log("4. Select another pokemon");
console.log("5. List all Pokemones availables");
console.log(" ");
console.log("Copyright Daniel Plata - ull dominate, for sure.");
console.log("");

// Menu - asking
var asking = prompt("Hello, select your pokemon to show more details!");
asking = parseInt(asking);

// Menu - logic

const getPoke = () => {
	var getApi = pokeflow.getName(asking);
	console.log("esto : " + getApi);
};

switch (asking) {
	// Charmander
	case 6:
	case 5:
	case 4:
		getPoke();
	break;
};
