var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100);
c.fillRect(250, 50, 100, 100);
c.fillRect(500, 180, 100, 100);
console.log(canvas);