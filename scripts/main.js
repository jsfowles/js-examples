
var avgHeight = 145;
var numEruptions = 4;
console.log("Average eruption height today: " + avgHeight)

var eruption1 = 112;
var eruption2 = 148;
var eruption3 = 160;
var numEruptions = 3;
var avg = (eruption1 + eruption2 + eruption3) / numEruptions;
console.log("The average height on Old Faithfuls eruptions today is: " + avg)

var num = 10;
while(num > 0){
  console.log(num);
  num--;
}

// while loops
while loops
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

// for loops
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  numSheep = numSheep * 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

for (var num = 10; num > 0; num--) {
		console.log(num);
}


// sample of while and for loops
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
  totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

for (currentGen = 5; currentGen <= totalGen; currentGen++) {
  totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}
