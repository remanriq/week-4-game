
<script src="https://code.jquery.com/jquery-3.1.1.js"></script>


	//number being guessed should be between 1-40//
var number : Math.floor((Math.random()*40)+1);
//number values for the crystals//
var diamond1:Math.floor((Math.random()*30)+1);
var diamond2:Math.floor((Math.random()*10)+1);
var diamond3:Math.floor((Math.random()*15)+1);
var diamond4:Math.floor((Math.random()*5)+1);
//game starting at 0 tries//
var losses:0;
var wins:0;
var currentnumber:0;

$("#randomNum").html(number);
//value for each crystal//

$("#diamond1").click(function() {
	update(diamond1);
});
$("#diamond2").click(function(){
	update(diamond2);

});

$("#diamond3").click(function(){
	update(diamond3);

});

$("#diamond4").click(function(){
	update(diamond4);
});

function startGame(){
	number = Math.floor((Math.random()*40)+1);
	$("#randomNum").html(number);
	diamond1 = Math.floor((Math.random()*30)+1);
	diamond2 = Math.floor((Math.random()*10)+1);
	diamond3 = Math.floor((Math.random()*15)+1);
	diamond4 = Math.floor((Math.random()*5)+1);

	guessTotal = 0

	$("#currentnumber").html(guessTotal);
};

function update(diamond) {
	guessTotal += diamond;
	$("#currentnumber").empty();
	$("#curentnumber").append(guessTotal);

	if (guessTotal>number){
		losses++;
	$("#losses").html(losses);

	reset();
	}
} 

else if (guessTotal === number){
	win+++;
$("#wins").html(wins);

	reset();
};




//choose two random numbers//
//give each diamond its value//
//each time value is clicked must go to the html//
//each time an additional diamond is clicked must add//
//must show total number on html//
//if number goes over , number has to show in html//
//once number goes over, start over//

</script>