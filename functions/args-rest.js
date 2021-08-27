"use strict";
(function () {
    //pasamos pro args el resto de args que puedan venir en la fn
    var fullName = function (firstName) {
        var restargs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restargs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restargs.join(' ');
    };
    var superMan = fullName('Clark', 'Joseph', 'Kent');
    console.log(superMan);
})();
