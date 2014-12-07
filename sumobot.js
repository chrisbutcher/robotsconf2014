var five = require("johnny-five"),
  board, servo;

board = new five.Board();

board.on("ready", function() {

  // Create a new `servo` hardware instance.
  servo1 = new five.Servo({
    pin: 10,
    // `type` defaults to standard servo.
    // For continuous rotation servos, override the default
    // by setting the `type` here
    type: "continuous"
  });

  servo2 = new five.Servo({
    pin: 11,
    // `type` defaults to standard servo.
    // For continuous rotation servos, override the default
    // by setting the `type` here
    type: "continuous"
  });

  // Inject the `servo` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    servo1: servo1,
    servo2: servo2
  });

  // Continuous Rotation Servo API

  // cw( speed )
  // clockWise( speed)
  // ccw( speed )
  // counterClockwise( speed )
  //
  // Set the speed at which the continuous rotation
  // servo will rotate at, either clockwise or counter
  // clockwise, respectively
  servo1.cw(1); // half speed clockwise
  servo2.ccw(1); // half speed clockwise
});