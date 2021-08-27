"use strict";
(function () {
    var hero = 'hola';
    function returnNmae() {
        return hero;
    }
    var greetings = function () {
        return 'hola';
    };
    var heroName = returnNmae(); // infiere el tipo de dato que retorna la fn
})();
//# sourceMappingURL=functions.js.map