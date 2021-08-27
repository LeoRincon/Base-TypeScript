"use strict";
(function () {
    var sumar = function (a, b) {
        return a + b;
    };
    function sum(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ['Batman', 'Super Man', 'Arrow'];
    contar(superHeroes);
    var callBatman = function (call) {
        if (call) {
            console.log('batiseñal active');
        }
    };
    var callBatman2 = function (call) {
        if (call === void 0) { call = true; }
        if (call) {
            console.log('batiseñal active');
        }
    };
    callBatman();
    callBatman2();
    var unirHeroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(', ');
    };
    var noHaceNada = function (numero, texto, boolean, array) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
//# sourceMappingURL=practica#2.js.map