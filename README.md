# buildBunny

## Installation instructions

```shell
npm install
```

## Create .env file

Use the _.env.example_ file to create a _.env_ file in your root directory and fill in the necessary variables.

## Component notes:

### Theremin

Run the following script to activate the theremin:

```shell
node theremin.js
```

This will output the notes of a C major scale relative to how light or dark the photoresistor is. The darker the resister, the lower the notes on the scale.

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

    which equates to

    pwm: Green,
    dir: Blue,
    enable: Yellow


### Top button
Still to flakey to use

