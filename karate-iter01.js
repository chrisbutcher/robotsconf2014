// Ideas
// Robot blinks LEDs just before attacking.
// Robot plays sound over speaker while attacking.
// Triggered by switch, resets after chop automatically after 500ms

var five = require("johnny-five"), 
    board = new five.Board();

board.on("ready", function() {

  var sleep = function(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  };

  var chop = function(servo) {
    servo.to(180);
  }

  var unchop = function(servo) {
    servo.to(0);
  }

  var servo = new five.Servo(11);

  this.loop(500, function() {
    // this.digitalWrite(13, (byte ^= 0x01));
    chop(servo);
    sleep(1000);
    unchop(servo);
  });  
});