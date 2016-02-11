document.onload = setInterval(moveShip, 30);
document.onkeypress = moveFalcon;
var step = 3;

function moveShip () {
  var ship = document.getElementById("starfighter");
  var avail_screen = document.getElementById("main_rectangle");
  var avail_screen_width = parseInt(avail_screen.clientWidth);
  var ship_width = parseInt(ship.width);
  var ship_pos = parseInt(ship.offsetLeft);

  if ((ship_pos+ship_width) > avail_screen_width ||
  ship_pos < 0) {
    step = (-1)*step;
  }
  ship_pos = ship_pos + step;
  ship_pos = ship_pos +'px';
  ship.style.left = ship_pos;
}

function put_falcon() {
  var falcon = document.getElementById("falcon");
  var falcon_height = falcon.height;
  var avail_screen = document.getElementById("main_rectangle");
  var avail_screen_height = parseInt(avail_screen.clientHeight);
  var avail_screen_width = parseInt(avail_screen.clientWidth);

  falcon.style.top = avail_screen_height - falcon_height;
  falcon.style.left = avail_screen_width/2;
}

function moveLeft () {
  var falcon = document.getElementById("falcon");
  falcon.style.left = parseInt(falcon.style.left) - 5 + 'px';
}

function moveRight () {
  var falcon = document.getElementById("falcon");
  falcon.style.left = parseInt(falcon.style.left) + 5 + 'px';
}

function moveFalcon (event) {
  var event = event || window.event;
  if (event.keyCode == 37) {
    moveLeft();
  } else if (event.keyCode == 39) {
    moveRight();
  } else {
    
  }
}
/*
function putHeaders() {
  var score = document.getElementById("score");
  var lives = document.getElementById("lives");
  lives_pos = parseInt(lives.style.left);
  alert(lives_pos);
}
*/
