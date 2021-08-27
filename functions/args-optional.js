"use strict";
(function () {
    // param optionals con el ? le ponemos que es un arg optional
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'No last name');
    };
    var name = fullName('leo');
    console.log(name);
})();
