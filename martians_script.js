/*function screen_hunter() {

  document.getElementById("main_rectangle").style.width = 2*screen.availWidth/3;
  document.getElementById("main_rectangle").style.height = 2*screen.availHeight/3;
  document.getElementById("main_rectangle").style.left = screen.availWidth;
  document.getElementById("main_rectangle").style.top = screen.availHeight;



}

function resize_ship () {

}
*/
document.onload = setInterval(moveShip, 30);
var step = 3;

function moveShip () {
  var ship = document.getElementById("starfighter");
  var avail_screen = document.getElementById("main_rectangle");
  var avail_screen_width = parseInt(avail_screen.clientWidth);
  var ship_width = parseInt(ship.width);
  //alert(ship_width);
  var ship_pos = parseInt(ship.offsetLeft);
  //alert("posbarco " + ship_pos);
  if ((ship_pos+ship_width) > avail_screen_width ||
  ship_pos < 0) {
    //alert("availscreen " +avail_screen_width);
    //alert("total " + ship_pos+ship_width);
    step = (-1)*step;
  }
    ship_pos = ship_pos + step;
    ship_pos = ship_pos +'px';
    ship.style.left = ship_pos;
    //alert(ship_pos);


}
