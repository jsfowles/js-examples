
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

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}
