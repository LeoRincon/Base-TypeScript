"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = Number('55A'); // NaN pero tambien es tomado en cuenta como numero, por lo cual hay que tomar encuenta eso.
    console.log({ avengers: avengers });
})();
