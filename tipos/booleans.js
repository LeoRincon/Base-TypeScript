"use strict";
(function () {
    var isSuperman = true;
    var isBatman = true;
    isSuperman = true && false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
//# sourceMappingURL=booleans.js.map