# buildBunny

## Component notes:

### Scroll wheel

use type sensor i.e. :

```shell
var scroll = new five.Sensor("A0");
```
on the scroll sensor -
  * brown is ground
  * red is live - put in 5V
  * orange is anoalogue input - wire to A0

### Microphone


### Speaker

wiring diagram for a simple speaker project
http://www.instructables.com/id/Arduino-SOS-signal-with-8ohms-speaker-LED-blink

GREAT SUCCESS - the speaker is making sounds!  using the joy.js file - but wired up to pin 6 - makes a blinking sound.

notes on wiring -
  * yellow to ground
  * orange to pin 6
(also works if colours are reversed)

### Ear motors
see wiring / useage at http://www.instructables.com/id/Hack-the-Nabaztag/step8/INPUT-Ear-Encoders/
    && http://www.instructables.com/id/Hack-the-Nabaztag/step9/INPUT-Ear-Encoders/

    Yellow is enable
    Blue is Reverse
    Green is Forward


### Top button


