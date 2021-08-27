"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo esta a salvo"; };
    var myFunction;
    var myFunction2;
    var myFunction3;
    var myFunction4;
    //* myFunction = 10 no permite valores si no es una fn
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction2 = addNumbers;
    console.log(myFunction2(1, 2));
    myFunction3 = greet;
    console.log(myFunction3('leo'));
    myFunction4 = saveTheWorld;
    console.log(myFunction4());
})();
//# sourceMappingURL=functions-type.js.map