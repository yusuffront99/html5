var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(250, 50, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(500, 180, 100, 100);
// console.log(canvas);

// LINE
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// Arc /Circle
// c.beginPath();
// c.arc(300, 300, 30, 0,Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for(var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var r = Math.random() * 100; 
//     var g = Math.random() * 255; 
//     var b = Math.random() * 0.5; 

//     c.beginPath();
//     c.arc(x, y, 30, 0,Math.PI * 2, false);
//     c.strokeStyle = r+g+b;
//     c.stroke();
// }


var x = 200;
var y = 200;
var dx = 4;
var dy = 4;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, 30, 0,Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if(x  + radius > innerWidth || x - radius < 0){
        dx = -dx;
    }

    if(y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x +=dx;
    y +=dy;
}

animate();

