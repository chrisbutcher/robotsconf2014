var temporal = require("temporal");
var songs = require("j5-songs");
var five = require("johnny-five"), 
    board = new five.Board();

var SPEED = 300;

board.on("ready", function() {
  var shoulderServo = new five.Servo(11);
  var elbowServo = new five.Servo(10);
  var led = new five.Led(13);

  var piezo = new five.Piezo(9);
  var song = songs.load('mario-intro');

  var shoulderChop = function() {
    shoulderServo.to(50, SPEED);
  }

  var unShoulderChop = function() {
    shoulderServo.to(5, SPEED);
  }

  var elbowChop = function() {
    elbowServo.to(0, SPEED);
  }

  var unElbowChop = function() {
    elbowServo.to(35, SPEED);
  }

  var playSong = function() {
    piezo.play(song);
  }

  var ledBlink = function() {
    led.on();
    led.off();
  }

  unShoulderChop();
  unElbowChop();

  led.off();

  function reset() {
    temporal.queue([
      {
        delay: 0,
        task: function() {
          playSong();
          ledBlink();
        }
      }, 
      {
        delay: 1500,
        task: function() {
          shoulderChop();
          ledBlink();
          elbowChop();
        }
      },
      {
        delay: 2000,
        task: function() {
          unShoulderChop();
          unElbowChop();
        }
      },
      {
        delay: 2000,
        task: function() {
          reset();
        }
      }    
    ]);
  }

  this.repl.inject({
    reset: reset,
    chop: shoulderChop,
    unchop: unShoulderChop,
    shoulderServo: shoulderServo,
    elbowServo: elbowServo
  });
});