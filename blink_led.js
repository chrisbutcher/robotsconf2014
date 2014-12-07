var five = require("johnny-five"),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {

  var led = new five.Led(12);
  // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  led.blink(500);

  // Extract object out to REPL
  this.repl.inject({
    led: led
  })

});