var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
  var element = document.createElement('li');
  
  var li = document.getElementsByTagName('li');
  
  element.innerHTML = 'item ' + li.length;
 
  list.appendChild(element);
  
});
