
function getTriangleArea(a, h) {
  
  if ((a <= 0) || (h <= 0)) return 'Nieprawidłowe dane';
    else return a*h/2;
}

var triangle1Area = getTriangleArea(13, 20);
var triangle2Area = getTriangleArea(0, 12);
var triangle3Area = getTriangleArea(5, 8);
