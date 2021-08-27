"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const arr = ['Carlos', 'Miguel', 'Gabriel'];
    const [carlos] = arr;
    console.log({ carlos });
})();
(() => {
    const avergens = {
        nick: 'Samuel L. Jackson',
        ironMan: 'Robert',
        vision: 'Paul',
        activo: true,
        poder: 1500,
    };
    const { poder, vision } = avergens;
    console.log(poder, vision.toUpperCase());
    const printAvenger = (_a) => {
        var { vision, ironMan } = _a, others = __rest(_a, ["vision", "ironMan"]);
        console.log(vision, ironMan, others);
    };
    printAvenger(avergens);
})();
(() => {
    const ironMan = {
        name: 'Tony',
        weapon: 'ArmorSuit',
    };
    const CapAmerica = {
        name: 'Stive',
        weapon: 'Escudo',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const arrs = [ironMan, CapAmerica, thor];
    for (const arr of arrs) {
        console.log(arr);
    }
})();
//# sourceMappingURL=main.js.map