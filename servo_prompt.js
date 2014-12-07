var five = require("johnny-five"),
  readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

five.Board().on("ready", function() {

  var servo = new five.Servo(process.argv[2] || 11);

  rl.setPrompt("SERVO TEST (0-180)> ");
  rl.prompt();

  rl.on("line", function(line) {
    var pos = line.trim();
    servo.to(pos);
    rl.prompt();
  }).on("close", function() {
    process.exit(0);
  });

});