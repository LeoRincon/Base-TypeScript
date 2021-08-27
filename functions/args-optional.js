"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'No last name');
    };
    var name = fullName('leo');
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map