var count = 0;

var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  
  element.innerHTML = 'item ' + (++count);
 
  list.appendChild(element);
  
});


