"use strict";
(function () {
    // param default
    // cuando los args son optional deben ir a l final de
    var fullName = function (firstName, upper, // al poner el value for default el tipy of data is optional
    lastName) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (firstName + " " + (lastName || '-------')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '-------');
        }
    };
    var name = fullName('leo', true);
    console.log(name);
})();
//# sourceMappingURL=default-args.js.map