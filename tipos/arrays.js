"use strict";
(function () {
    // limitara los arrays a los tipos de datos especificados o diferidos
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // infiere el tipo a number[]
    var numbers2 = [1, 2, 3, 4, '5', 6, 7, 8, 9]; // infiere el type a (string \ number) []
    //! indicamos especificamente el valor
    var numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //
    var numbers4 = [1, 2, 3, 4, '5', 6, 7, 8, 9];
    var name = ['juan', 'camilo', 'gabriel'];
    name.forEach(function (nombre) { return console.log(nombre.toUpperCase()); }); // el forEach detecta el tipo de datos que tiene el array.
})();
//# sourceMappingURL=arrays.js.map