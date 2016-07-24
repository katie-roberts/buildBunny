



// -----------------------------------------------------------------------------
//    CONFIG
// -----------------------------------------------------------------------------

// ___________________
//     ALL PINS
// ___________________


#define LENABLE    7
#define LMOTORREV  8
#define LMOTORFWD  9


// ___________________
//     EARS STUFF
// ___________________

// 0 = LEFT, 1 = RIGHT, 2 = BOTH.

// 0 = LEFT ear, 1 = RIGHT ear, 2 = BOTH ears.

int Ldirection = 0;   // 0 = forward, 1 = back
int Lduration = 4000;
int Lcount = 0;
int LmillisCount = 0;


// -----------------------------------------------------------------------------
//    SETUP
// -----------------------------------------------------------------------------


void setup(){

  Serial.begin(9600);

  setupEars();
  
// Start both ears going FWD.

  digitalWrite (LENABLE, LOW);
  digitalWrite (LMOTORFWD, LOW);
  digitalWrite (LMOTORREV, LOW);

}

// -----------------------------------------------------------------------------
//    MAIN LOOP
// -----------------------------------------------------------------------------


void loop() {

 // updateHead();
//
//  if (headCount%4 == 0) {
//    
//    int color = colorPicker((int)(scrollRead()/100.0));
//    wipeStrip (color, PIXELNUM, LEDdelay);
//
//  }  else {
//
//    wipeStrip (BLACK, PIXELNUM, LEDdelay);
//
//  }
checkEars();

}

// -----------------------------------------------------------------------------
//    FUNCTIONS
// -----------------------------------------------------------------------------

// ++++++++++++++++++++++++
/* HEADBUTTON: returns the
debounced value of the head
being pressed; does NOT 
indicate the on/off value,
etc; just whether the button
is being pushed or not at the
time of reading. */
// ++++++++++++++++++++++++



void customDelay (int delayTime) {

  for (int i = 0; i < delayTime; i++) {

    //updateHead();
    checkEars();
    delay(1);

  } 


}

// ++++++++++++++++++++++++
/* SET UP EARS: The setup
routine to make sure both
motors are initialized correctly.
MUST be placed in SETUP. */
// ++++++++++++++++++++++++

static inline void setupEars () {

  // DO THIS FIRST FOR ALL PINS.
  // Make sure it's in a known state...
  digitalWrite (LENABLE, LOW);
  digitalWrite (LMOTORREV, LOW);
  digitalWrite (LMOTORFWD, LOW);

  //... before you push stuff to it.
  pinMode(LENABLE, OUTPUT);     
  pinMode(LMOTORREV, OUTPUT);     
  pinMode(LMOTORFWD, OUTPUT);     

   

}

// ++++++++++++++++++++++++
/* CHECK EARS ((SCRATCH)) */
// ++++++++++++++++++++++++


void checkEars () {
 
 // if (millis() > bothMillisCount + bothDuration) {
   
   int randLeft = random(0, 3);
//   int randRight = random (0, 3);
   
   if (randLeft == 0) {
     // STOP the ear
     digitalWrite (LENABLE, LOW);

   } else if (randLeft == 1) {
     // go BACKWARD
     digitalWrite (LMOTORREV, HIGH);
     digitalWrite (LMOTORFWD, LOW);
     digitalWrite (LENABLE, HIGH);

   } else if (randLeft == 2) {
     // go FORWARD
     digitalWrite (LMOTORFWD, HIGH);
     digitalWrite (LMOTORREV, LOW);
     digitalWrite (LENABLE, HIGH);
   }



//   bothMillisCount = millis();   
    
 // }
  
}


