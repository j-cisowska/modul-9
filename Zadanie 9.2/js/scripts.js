
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Ania'];
var maleNames = ['Bartek', 'Kuba', 'Andrzej', 'Filip'];


var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var allNames = ["Asia", "Kasia", "Ola", "Ania", "Bartek", "Kuba", "Andrzej", "Filip"];
allNames.splice(4, 0, 'Maria');
allNames.splice(8, 0, 'Mariusz');


var newName = 'Magda';

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
}
  else {
    console.log('Do not add Magda to array');
  }

console.log(allNames);
