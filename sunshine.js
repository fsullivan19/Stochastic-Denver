//total bimonthly sunshine hours starting 
//jan 2017 for past five years

autowatch = 1;

var twentysev = [93, 146, 188, 176, 129, 96];
var twentysix = [113, 133, 147, 146, 173, 118];
var twentyfive = [94, 174, 89, 165, 170, 118];
var twentyfour = [124, 157, 137, 128, 149, 91];
var twentythree = [114, 141, 172, 183, 139, 139];
var twentytwelve = [122, 207, 193, 194, 147, 105];


inlets = 1; 
outlets = 1; 

var total;
function sunshine(week, month){
	if (week == 0){
		total = twentysev[month];
	}
	else if (week == 1){
		total = twentysix[month];
		}
	else if (week == 2){
		total = twentyfive[month];
	}
	else if (week == 3){
		total = twentyfour[month];
	}
	else if (week == 4){
		total = twentythree[month];
	}
	else if (week == 5){
		total = twentytwelve[month];
	}	
	outlet(0, total);			
}	
