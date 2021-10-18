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
		console.log(figlet.textSync("Poke -- APP"));
		console.log("---------------------------------------------------------------");
		console.log("");
	},
	
	// Clear Console
	consoleClear : function () {
		process.stdout.write("\u001b[2J\u001b[0;0H");
		module.exports.showTitle();
	},
	
	// Menu - getPoke : get pokemon
	getPoke : function(asking) {
		var asking = asking; 
		module.exports.consoleClear();

		const pokeName = pokeflow.getName(asking);
		const pokeToLower = pokeName.toLowerCase();
		const pokeReq = console.log("Felicidades! : Tu nuevo Pokemon es: " + pokeflow.getName(asking)); 
		const pokeImgReq = pokeImg.getSprite(pokeToLower);

		imgConverter(pokeImgReq, {
			colored: true,
			size: {
				height: "30",
				width: "30"
			}, 
		}, (err, converted) => {	
			console.log(err || converted);            
		}); 
	}, 

	threePrincipals : function(pokemon) {
		const pokeName = pokeflow.getName(pokemon);
		const pokeToLower= pokeName.toLowerCase();
		console.log("aqui sif unciona : " + pokeToLower);
		const pokeSprite = pokeImg.getSprite(pokeToLower); 
		imgConverter(pokeSprite, {
			colored: true,
			size: {
				height: "30",
				width: "30"
			},
		},(err, converted) => {
			console.log(err || converted);
		}); 
		console.log("Felicidades! : Tu nuevo Pokemon es: " + pokeName);	
	},

	getPokeImg : function (pokemonName) {
		const pokeToLower = pokemonName.toLowerCase();
		const pokeSprite = pokeImg.getSprite(pokeToLower); 
		
		imgConverter(pokeSprite, {
			color: true,
			size: {
				height: "30",
				width: "30"
			},
		}, (err ,converted) => {
			console.log(err || converted);
		}); 
	} 
}; // Module Export - END 
