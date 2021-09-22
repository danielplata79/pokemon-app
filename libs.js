const pokeflow = require("pokemon");
const figlet   = require("figlet");
const app      = require("./main");
const imgConverter = require("image-to-ascii");
const pokeImg  = require("pokemon-images");

module.exports = {
	// Header Title 
	showTitle : function () {
		console.log("");
		console.log("---------------------------------------------------------------");
		console.log(figlet.textSync("Pokemón API"));
		console.log("---------------------------------------------------------------");
		console.log("");
	},
	
	// Clear Console
	consoleClear : function () {
		process.stdout.write("\u001b[2J\u001b[0;0H");
		module.exports.showTitle();
	},
	
	// Menu - getPoke : get pokemon
	getPoke : function() {
		var asking = myAsking;
		module.exports.consoleClear();
		return console.log("Felicidades! : Tu nuevo Pokemon es: " + pokeflow.getName(myAsking));
	}
}; // Module Export - END


