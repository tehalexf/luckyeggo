




String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


var pokeEvo = {
	"abra" :"Kadabra", 
	"bellsprout" :"Weepinbell", 
	"bulbasaur" :"Ivysaur", 
	"caterpie" :"Metapod", 
	"charmander" :"Charmeleon", 
	"charmeleon" :"Charmander", 
	"clefairy" :"Clefable", 
	"cubone" :"Marowak", 
	"diglett" : "Dugtrio", 
	"doduo" :"Dodrio", 
	"dragonair" :"Dragonite", 
	"dratini" :"Dragonair", 
	"drowzee" :"Hypno", 
	"eevee" :"Eevee evolved form", 
	"ekans" :"Arbok", 
	"exeggcute" :"Exeggutor", 
	"gastly" :"Haunter", 
	"geodude" :"Graveler", 
	"gloom" :"Vileplume", 
	"goldeen" :"Seaking", 
	"graveler" :"Golem", 
	"grimer" :"Muck", 
	"growlithe" :"Growlite", 
	"haunter" :"Gengar", 
	"horsea" :"Seadra", 
	"ivysaur" :"Venasaur", 
	"jigglypuff" :"Wigglytuff", 
	"kabuto" :"Kabutop", 
	"kadabra" :"Alakazam", 
	"kakuna" :"Beedrill", 
	"koffing" :"Wheezing", 
	"krabby" :"Kingler", 
	"machoke" :"MAchamp", 
	"machop" :"Machop", 
	"magikarp" :"Gyarado", 
	"magnemite" :"Magnetite", 
	"mankey" :"Primeape", 
	"meowth" :"Persian", 
	"metapod" :"Buterfree", 
	"nidoran♀" :"Nidorina", 
	"nidoran♂" :"Nidorino", 
	"nidorina" :"Nidoqueen", 
	"nidorino" :"Nidoking", 
	"oddish" :"Gloom", 
	"omanyte" :"Omastar", 
	"paras" :"Parasect", 
	"pidgeotto" :"Pidgeot", 
	"pidgey" :"Pidgeotto", 
	"pikachu" :"Raichu", 
	"poliwag" :"Poliwhirl", 
	"poliwhirl" :"Poliwrath", 
	"ponyta" :"Rapidash", 
	"psyduck" :"Golduck", 
	"rattata" :"Raticate", 
	"rhyhorn" :"Rhydon", 
	"sandshrew" :"Sandslash", 
	"seel" :"Dewong", 
	"shellder" :"Cloyster", 
	"slowpoke" :"Slowbrow", 
	"spearow" :"Fearow", 
	"squirtle" :"Wartortle", 
	"staryu" :"Starme", 
	"tentacool" :"Tentacruel", 
	"venonat" :"Venomoth", 
	"voltorb" :"Electrode", 
	"vulpix" :"Ninetales", 
	"wartortle" :"Blastoise", 
	"weedle" : "Kakuna", 
	"weepinbell" :"Victreebel", 
	"zubat" :"Golbat"
}


var pokeDict = {
	"abra" :25, 
	"bellsprout" :25, 
	"bulbasaur" :25, 
	"caterpie" :12, 
	"charmander" :25, 
	"charmeleon" :100, 
	"clefairy" :50, 
	"cubone" :50, 
	"diglett" :50, 
	"doduo" :50, 
	"dragonair" :100, 
	"dratini" :25, 
	"drowzee" :50, 
	"eevee" :25, 
	"ekans" :50, 
	"exeggcute" :50, 
	"gastly" :25, 
	"geodude" :25, 
	"gloom" :100, 
	"goldeen" :50, 
	"graveler" :100, 
	"grimer" :50, 
	"growlithe" :50, 
	"haunter" :100, 
	"horsea" :50, 
	"ivysaur" :100, 
	"jigglypuff" :50, 
	"kabuto" :50, 
	"kadabra" :100, 
	"kakuna" :50, 
	"koffing" :50, 
	"krabby" :50, 
	"machoke" :100, 
	"machop" :25, 
	"magikarp" :400, 
	"magnemite" :50, 
	"mankey" :50, 
	"meowth" :50, 
	"metapod" :50, 
	"nidoran♀" :25, 
	"nidoran♂" :25, 
	"nidorina" :100, 
	"nidorino" :100, 
	"oddish" :25, 
	"omanyte" :50, 
	"paras" :50, 
	"pidgeotto" :50, 
	"pidgey" :12, 
	"pikachu" :50, 
	"poliwag" :25, 
	"poliwhirl" :100, 
	"ponyta" :50, 
	"psyduck" :50, 
	"rattata" :25, 
	"rhyhorn" :50, 
	"sandshrew" :50, 
	"seel" :50, 
	"shellder" :50, 
	"slowpoke" :50, 
	"spearow" :50, 
	"squirtle" :25, 
	"staryu" :50, 
	"tentacool" :50, 
	"venonat" :50, 
	"voltorb" :50, 
	"vulpix" :50, 
	"wartortle" :100, 
	"weedle" :12, 
	"weepinbell" :100, 
	"zubat" :50
}

function generateTransferString(num, pok) {
	return "<li>Transfer <b>" + num + " " + pok + "s</b> to Willow.</li>" 
}

function generateEvolveString(num, pok) {
	return "<li>Evolve <b>" + num + " " + pok + "s</b>.</li>" 
}

// Error codes:
// -1: Invalid pokemon name


function processRow(name, count, candies, hasEvo, recycle) {
	var cost = pokeDict[name.toLowerCase()];
	if(!cost || !count || !candies)
		return {"status": -1}


	var pureEvoUsingCandy = Math.floor(candies/cost);
	var pureEvoLimitedByNumberOfPokemon = Math.min(count, pureEvoUsingCandy);
	var candyLeft = candies - pureEvoLimitedByNumberOfPokemon * cost;
	var pokemonLeft = count - pureEvoLimitedByNumberOfPokemon;
	var evosRecycled = 0;

	//Only use if recycling
	if (recycle) {
		candyLeft += pureEvoLimitedByNumberOfPokemon;
	}
	
	var transferEvoUsingCandy = 0;

	if (pokemonLeft != 0) {
		var i = 1;
		for (; i < pokemonLeft + 1;i++) {
			var totalCandyAvaliable = candyLeft + pokemonLeft - i;
			if (i * cost > totalCandyAvaliable) {
				break;
			}

		}
		transferEvoUsingCandy = i - 1;
	}

	var totalTransfersRequired = 0;
	if (recycle)
		totalTransfersRequired = Math.max(0, transferEvoUsingCandy * cost - candyLeft + pureEvoLimitedByNumberOfPokemon);
	else
		totalTransfersRequired = Math.max(0, transferEvoUsingCandy * cost - candyLeft);

	var evoTransfersRequired = 0;
	var origTransfersRequired = 0;

	var maxTransferablePokemon = pokemonLeft - transferEvoUsingCandy;
	var maxTransferableEvoPokemon = pureEvoLimitedByNumberOfPokemon;

	if (recycle) {
		//Prefer using up evo pokemon
		if (totalTransfersRequired > maxTransferableEvoPokemon) {
			evoTransfersRequired = maxTransferableEvoPokemon;
			origTransfersRequired = totalTransfersRequired - maxTransferableEvoPokemon;
		} else {
			evoTransfersRequired = totalTransfersRequired
		}
	} else {
		//Prefer using up owned pokemon of this type
		origTransfersRequired = totalTransfersRequired;
	}

	var pokeDexReward = totalTransfersRequired > 0 && !hasEvo ? 1 : 0;

	return {"status": 0, "evoTransfers": evoTransfersRequired , "origTransfers":origTransfersRequired, "hasReward":pokeDexReward, "pureEvos": pureEvoLimitedByNumberOfPokemon, "transferEvos": transferEvoUsingCandy}
	// console.log(totalTransfersRequired)
	// console.log("Evo transfers")
	// console.log(evoTransfersRequired)
	// console.log("orig transgers")
	// console.log(origTransfersRequired)
}


function runAll() {
	// console.log($("#firstPokemon").val());
	var origExp = 0;
	var totalTransfers = 0;
	var totalEvolutions = 0;
	var timeNeeded = 0;
	var setupActionList = Array();
	var postEggActionList = Array();
	$('.tableRow').each(function(i, obj) {
		var name = $(obj).find("input:eq(0)").val();
		var inven = $(obj).find("input:eq(1)").val();
		var own = $(obj).find("input:eq(2)").val();
		var cc1 = $(obj).find("input:eq(3)").is(':checked');
		var cc2 = $(obj).find("input:eq(4)").is(':checked');
		console.log(cc1, cc2)
		var ret = processRow(name, inven, own, cc1, cc2);
		if (ret["status"] == -1) {
			$(obj).css("background", "#DB4D4D");
		} else {
			$(obj).css("background", "None");
		}

		console.log(ret);
		if(ret["origTransfers"]) {
			totalTransfers += ret["origTransfers"];
			setupActionList.push(generateTransferString(ret["origTransfers"], name));
		}


		if(!ret["evoTransfers"]) {
				if(ret["pureEvos"] + ret["transferEvos"]) {
					totalEvolutions += ret["pureEvos"] + ret["transferEvos"];
					origExp += 500 * (ret["pureEvos"] + ret["transferEvos"]);
					timeNeeded += 0.25 * (ret["pureEvos"] + ret["transferEvos"]);
					postEggActionList.push(generateEvolveString(ret["pureEvos"] + ret["transferEvos"], name));

				}
		} else {
				if(ret["pureEvos"]) {
					totalEvolutions += ret["pureEvos"];
					origExp += 500 * ret["pureEvos"];
					timeNeeded += 0.25 * ret["pureEvos"];
					postEggActionList.push(generateEvolveString(ret["pureEvos"], name));
				}


				if(ret["evoTransfers"]) {
					totalTransfers += ret["evoTransfers"];
					timeNeeded += 0.10 * ret["evoTransfers"];
					postEggActionList.push(generateTransferString(ret["evoTransfers"], pokeEvo[name.toLowerCase()]));
				}

				if(ret["transferEvos"]) {
					totalEvolutions += ret["transferEvos"];
					origExp += 500 * ret["transferEvos"];
					timeNeeded += 0.25 * ret["transferEvos"];
					postEggActionList.push(generateEvolveString(ret["transferEvos"], name));
				}

		}
		
		if(ret["hasReward"]) {
			origExp += 500;
		}
	});
	$("#instructions").removeClass("hidden");

	$("#instlist").html(($.parseHTML( setupActionList.join("") + "<li>Activate <b>LUCKY EGGO</b>.</li>"  +  postEggActionList.join("") +  "<li>ENJOY YOUR <b>" +origExp * 2 + " EXP!</b></li>")));
	$("#totxp").html(origExp * 2)
	$("#xpw").html(origExp)
	$("#time").html(timeNeeded)
	$("#trans").html(totalTransfers)
	$("#evo").html(totalEvolutions)
}	


var pokeList = Array();
for (var a in pokeDict) {
	pokeList.push(a.toProperCase());
}
var counter = 2;

function addRow() {
	  		var a = $("#input-1").clone().attr("id", "input-" + counter);
  		$(a).find("input:eq(0)").val("").attr("id", "pok-" + counter);
  		$(a).find("input:eq(1)").val("");
  		$(a).find("input:eq(2)").val("");
  		$("#rowBody").append(a);

		$("#pok-" + counter).bind('input', function() { 
			// console.log("AAAA");
			var self = this;
		    if (self.timer)
		        clearTimeout(self.timer);

		    self.timer = setTimeout(function ()
		    {
		        self.timer = null;
		        runAll();
		    }, 500);
	    	// throttle(runAll, 500);
		});


	  	$("#pok-" + counter++ ).autocomplete({
	  		source: pokeList /*,
			select: function (event, ui) {
			    return false;
			},

			select: function (event, ui) {
			    $(this).val(ui.item ? ui.item : " ");
			},

			change: function (event, ui) {
			    if (!ui.item) {
			        this.value = '';}
			} */
		});
}
$( document ).ready(function() {
	$("#runProgram").click(function() { 
		runAll();
	});

	addRow();
	addRow();
	addRow();
	addRow();
	addRow();
	addRow();
	addRow();
	$('[data-toggle="tooltip"]').tooltip( {
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		placement: 'top'
	});

	// $('#input-1').keypress( _.debounce( function(){
	// 	runAll();
	// }, 500 ) );

  	$("#pok-0" ).autocomplete({
  		source: pokeList
  		// ,
		// select: function (event, ui) {
		    //return false;
		// },

		// select: function (event, ui) {
		    //$(this).val(ui.item ? ui.item : " ");
		// },

		// change: function (event, ui) {
		    //if (!ui.item) {
		        // this.value = '';}
		// }

	});

  	$("#pok-1" ).autocomplete({
  		source: pokeList /*,
  		
		select: function (event, ui) {
		    return false;
		},

		select: function (event, ui) {
		    $(this).val(ui.item ? ui.item : " ");
		},

		change: function (event, ui) {
		    if (!ui.item) {
		        this.value = '';}
		}*/

	});

  	$( "#addRow" ).click(function() {
  			
  		addRow();
	});

});



