var buttons = document.getElementsByClassName("btn");

console.log(buttons);

buttons.length // 5

for (var b = 0; b < 5; b++ ) {
  
console.log(buttons[b].innerText)
  
}


/* HTML
<button class="btn">Hi1!</button>
<button class="btn">Hi2!</button>
<button class="btn">Hi3!</button>
<button class="btn">Hi4!</button>
<button class="btn">Hi5!</button>
*/