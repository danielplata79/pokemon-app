// Requiring Pokemon API
const pokeflow = require("pokemon");
const prompt = require("prompt-sync")();
const figlet = require("figlet");
const libs   = require("./libs");

var asking;
// Menu 
module.exports = {
	startApp : function () {
		console.log("1. Charmander");
		console.log("2. Ivysaur");
		console.log("3. Bulbasaur");
		console.log(" ");
		console.log("4. Type a random number and select another pokemon!");
		console.log("5. List all Pokemones availables");
		console.log(" ");
		console.log("---------------------------------------------------------------");
		console.log("Copyright Daniel Plata");
		console.log("");
	
		// Menu - asking
		asking = prompt("Hello, select your pokemon to show more details! : ");
		myAsking = parseInt(asking);

		// Menu choise selection
		switch (myAsking) {
			// Charmander
			case 1:
				libs.consoleClear();
				console.log("hola");
				libs.getPoke(4);
			break;

			// Ivysaur
			case 2:
				libs.consoleClear();
				libs.getPoke(2);
			break;

			// Bulbasaur
			case 3:
				libs.consoleClear();
				libs.getPoke(1);
			break;

			// Select another (list all)
			case 4:
				libs.consoleClear();
				const askingRandom =  prompt("Type a random number!: ");
				console.log("Congratulations! you got: " + pokeflow.getName(askingRandom));		
			break;			

			case 5:
				libs.consoleClear();
				console.log("");
				console.log("Select one Pokemon : " +  pokeflow.all());
			break;	
		};
	}
};

// App start
libs.showTitle();
module.exports.startApp();
