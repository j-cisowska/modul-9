var buttons = document.getElementsByClassName("btn");

console.log(buttons);

buttons.length // 5

for (var b = 0; b < buttons.length; b++ ) {
  
console.log(buttons[b].innerText)
  
}

