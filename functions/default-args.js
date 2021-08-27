"use strict";
(function () {
    var fullName = function (firstName, upper, lastName) {
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