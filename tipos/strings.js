"use strict";
(function () {
    //type inferido
    var _a;
    var batman = 'Batman';
    var linternaVerde = 'Linterna Verde';
    var volcanNegro = "Volcan Negro";
    console.log("I'm " + batman);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Caracter no existente'); //con el ? lo que decimos es que si exioste el caracter 11 en la variable batman que haga el toUpperCase, de lo contrarrio no haga nada.
})();
//# sourceMappingURL=strings.js.map