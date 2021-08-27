"use strict";
(function () {
    //! never es una fn que no sale exitosa, luego de llamarla no seguira el code.
    var error = function (message) {
        throw new Error(message);
    };
    error('aux');
    //! especificamos a la fn que o se rompe o regresa un numero.
    var error2 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error2('aux');
})();
