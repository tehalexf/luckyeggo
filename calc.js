




String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


var pokeEvo = {
	"abra" :"Kadabras", 
	"bellsprout" :"Weepinbells", 
	"bulbasaur" :"Ivysaurs", 
	"caterpie" :"Metapods", 
	"charmander" :"Charmeleons", 
	"charmeleon" :"Charmanders", 
	"clefairy" :"Clefables", 
	"cubone" :"Marowaks", 
	"diglett" : "Dugtrios", 
	"doduo" :"Dodrios", 
	"dragonair" :"Dragonites", 
	"dratini" :"Dragonairs", 
	"drowzee" :"Hypnos", 
	"eevee" :"Eevee evolved forms", 
	"ekans" :"Arboks", 
	"exeggcute" :"Exeggutors", 
	"gastly" :"Haunters", 
	"geodude" :"Gravelers", 
	"gloom" :"Vileplumes", 
	"goldeen" :"Seakings", 
	"graveler" :"Golems", 
	"grimer" :"Mucks", 
	"growlithe" :"Growlites", 
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
	"sandshrew" :"Sandslash", 
	"seel" :"Dewongs", 
	"shellder" :"Cloysters", 
	"slowpoke" :"Slowbrows", 
	"spearow" :"Fearows", 
	"squirtle" :"Wartortles", 
	"staryu" :"Starmes", 
	"tentacool" :"Tentacruels", 
	"venonat" :"Venomoths", 
	"voltorb" :"Electrodes", 
	"vulpix" :"Ninetaless", 
	"wartortle" :"Blastoises", 
	"weedle" : "Kakunas", 
	"weepinbell" :"Victreebels", 
	"zubat" :"Golbats"
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
	return "Transfer <b>" + num + " " + pok + "<b> to Willow." 
}

function generateTransferString2(num, pok) {
	return "Transfer <b>" + num + " " + pok + "<b> to Willow." 
}

// Error codes:
// -1: Invalid pokemon name


function processRow(name, count, candies, hasEvo, recycle) {
	var cost = pokeDict[name.toLowerCase()];
	if(!cost)
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

	var pokeDexReward = totalTransfersRequired > 0 ? 1 : 0;

	return {"evoTransfers": evoTransfersRequired , "origTransfers":origTransfersRequired, "hasReward":pokeDexReward, "pureEvos": pureEvoLimitedByNumberOfPokemon, "transferEvos": transferEvoUsingCandy}
	// console.log(totalTransfersRequired)
	// console.log("Evo transfers")
	// console.log(evoTransfersRequired)
	// console.log("orig transgers")
	// console.log(origTransfersRequired)
}


function runAll() {
	console.log($("#firstPokemon").val());
	// $('.tableRow').each(function(i, obj) {
 //  		console.log($(obj).find("input:eq(2)").val());
	// });

}


var pokeList = Array();
for (var a in pokeDict) {
	pokeList.push(a.toProperCase());
}
var counter = 2;

$( document ).ready(function() {
	$("#firstPokemon").bind('input', function() { 
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

	// $('#input-1').keypress( _.debounce( function(){
	// 	runAll();
	// }, 500 ) );

  	$("#firstPokemon" ).autocomplete({
  		source: pokeList,
		select: function (event, ui) {
		    return false;
		},

		select: function (event, ui) {
		    $(this).val(ui.item ? ui.item : " ");
		},

		change: function (event, ui) {
		    if (!ui.item) {
		        this.value = '';}
		}

	});

  	$( "#addRow" ).click(function() {
  		console.log("AAAAA")
  		var a = $("#input-1").clone().attr("id", "input-" + counter++);
  		$("#rowBody").append(a);
	});

});



