var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = 'triceratops'.toUpperCase();

text = text.replace("Velociraptor", dinosaur);

text.length // 144

text = text.substr(0,72);

console.log(text);