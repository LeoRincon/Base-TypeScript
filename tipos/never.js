"use strict";
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('aux');
    var error2 = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error2('aux');
})();
//# sourceMappingURL=never.js.map