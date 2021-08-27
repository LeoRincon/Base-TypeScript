"use strict";
(function () {
    var isSuperman = true;
    // isSuperman = undefined == error
    var isBatman = true;
    isSuperman = true && false; // acepta una expresion boolean
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman }); // en {} cuando que quiero que me imprima por consola clave valor
})();
//# sourceMappingURL=booleans.js.map