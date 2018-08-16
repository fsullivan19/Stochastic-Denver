//every-other month snowfall various CO locations, 2016-2017
//start august 2016, every other week, rounded

autowatch = 1;

var denver = [0, 10, 2, 3, 0];
var aurora = [0, 10, 1, 6, 0];
var nederland = [3, 12, 10, 40, 0];
var glacier = [7, 77, 26, 64, 0];
var vail = [0, 18, 59, 29, 25];
var telluride = [0, 67, 45, 5, 0];


inlets = 1; 
outlets = 1; 

var amount;
function snowFall(city, month){
	if (city == 0){
		amount = denver[month];
	}
	else if (city == 1){
		amount = aurora[month];
		}
	else if (city == 2){
		amount = nederland[month];
	}
	else if (city == 3){
		amount = glacier[month];
	}
	else if (city == 4){
		amount = vail[month];
	}
	else if (city == 5){
		amount = telluride[month];
	}	
	outlet(0, amount);			
}	
