
window.onload = function() {
 
               // TODO :: Do your initialization job
               window.addEventListener("tizenhwkey", keyEventHandler);
               document.addEventListener("rotarydetent", rotaryEventHandler);
 
               function rotaryEventHandler(event) {
                              var direction = event.detail.direction;
                              if (c2_callFunction) {
                                             c2_callFunction("Rotate", [ direction ]);
                              }
               }
 
 
               function keyEventHandler(event) {
 
                              if (event.keyName === "back") {
                                             try {
                                                            tizen.application.getCurrentApplication().exit();
                                             } catch (ignore) {
                                             }
                              }
               }
};
