//Denver, CO, USA first week every other 
//month weather high Jan 2017 start

autowatch = 1;

var week1 = [48, 50, 30, 12, 5, 23, 30];
var week2 = [66, 52, 52, 64, 70, 66, 46];
var week3 = [77, 72, 64, 54, 61, 77, 84];
var week4 = [88, 90, 91, 95, 95, 88, 88];
var week5 = [95, 93, 70, 81, 84, 84, 90];
var week6 = [54, 39, 36, 61, 45, 61, 59];

inlets = 1; 
outlets = 1; 

var temperature;
function weatherWeek(week, day){
	if (week == 0){
		temperature = week1[day];
	}
	else if (week == 1){
		temperature = week2[day];
		}
	else if (week == 2){
		temperature = week3[day];
	}
	else if (week == 3){
		temperature = week4[day];
	}
	else if (week == 4){
		temperature = week5[day];
	}
	else if (week == 5){
		temperature = week6[day];
	}	
	outlet(0, temperature);
			
}	
