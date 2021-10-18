const pokeflow = require("pokemon");
const prompt = require("prompt-sync")();
const figlet = require("figlet");
const libs   = require("./libs");
const imgConverter = require("image-to-ascii");
const pokeImg  = require("pokemon-images");


var asking;
// Menu 
module.exports = {
	startApp : function () {
		libs.consoleClear();
		console.log("1. Charmander");
		console.log("2. Ivysaur");
		console.log("3. Bulbasaur");
		console.log(" ");
		console.log("4. Type a random number and select another pokemon!");
		console.log("5. List all Pokemones availables");
		console.log("6. Type an Pokemon Name and print an IMG");
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
				libs.threePrincipals(4);
			break;

			// Ivysaur
			case 2:
				libs.consoleClear();
				libs.threePrincipals(2);
			break;

			// Bulbasaur
			case 3:
				libs.consoleClear();
				libs.threePrincipals(1);
			break;

			// Select another (list all)
			case 4: 
				//libs.consoleClear();
				const askingRandom =  prompt("Type a random number!: "); 
				libs.getPoke(askingRandom);
			break;			

			case 5:
				libs.consoleClear();
				console.log("");
				console.log("Select one Pokemon : " +  pokeflow.all());
			break;	

			case 6:
				libs.consoleClear();
				console.log(); 
				const askingName =  prompt("Type your Pokemon Name!: "); 
				libs.getPokeImg(askingName);
		};
	}
};

// App start
libs.showTitle();
module.exports.startApp(); 
