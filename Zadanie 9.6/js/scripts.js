var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  
  var addLi = document.getElementById('list').getElementsByTagName('li');
  
  element.innerHTML = 'item ' + addLi.length;
 
  list.appendChild(element);
  
});


