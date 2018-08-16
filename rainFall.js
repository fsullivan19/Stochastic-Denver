//bi-monthly windspeed max over past 
//six years denver CO

autowatch = 1;

var twentyseventeen = [44, 42, 45, 41, 35, 52];
var twentysixteen = [39, 50, 31, 38, 43, 45];
var twentyfifteen = [50, 41, 33, 32, 33, 46];
var twentyfourteen = [50, 52, 46, 41, 39, 43];
var twentythirteen = [40, 42, 45, 41, 35, 41];
var twentytwelve = [44, 43, 39, 35, 38, 41];


inlets = 1; 
outlets = 1; 

var amount;
function maxWindSpeed(year, month){
	if (year == 0){
		amount = twentyseventeen[month];
	}
	else if (year == 1){
		amount = twentysixteen[month];
		}
	else if (year == 2){
		amount = twentyfifteen[month];
	}
	else if (year == 3){
		amount = twentyfourteen[month];
	}
	else if (year == 4){
		amount = twentythirteen[month];
	}
	else if (year == 5){
		amount = twentytwelve[month];
	}	
	outlet(0, amount);
			
}	
