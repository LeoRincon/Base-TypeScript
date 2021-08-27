"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'No last name');
    };
    var name = fullName('leo');
    console.log(name);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var name = fullName('leo', 'rincon');
    console.log(name);
})();
(function () {
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
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo esta a salvo"; };
    var myFunction;
    var myFunction2;
    var myFunction3;
    var myFunction4;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction2 = addNumbers;
    console.log(myFunction2(1, 2));
    myFunction3 = greet;
    console.log(myFunction3('leo'));
    myFunction4 = saveTheWorld;
    console.log(myFunction4());
})();
(function () {
    var hero = 'hola';
    function returnNmae() {
        return hero;
    }
    var greetings = function () {
        return 'hola';
    };
    var heroName = returnNmae();
})();
(function () {
    var sumar = function (a, b) {
        return a + b;
    };
    function sum(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ['Batman', 'Super Man', 'Arrow'];
    contar(superHeroes);
    var callBatman = function (call) {
        if (call) {
            console.log('batiseñal active');
        }
    };
    var callBatman2 = function (call) {
        if (call === void 0) { call = true; }
        if (call) {
            console.log('batiseñal active');
        }
    };
    callBatman();
    callBatman2();
    var unirHeroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(', ');
    };
    var noHaceNada = function (numero, texto, boolean, array) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(function () {
    var batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    var bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log('Disparando');
        },
    };
    var villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    var charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    var apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper veloz'],
    };
    hero = {
        name: 'Brus Waney',
        age: 44,
        powers: ['Millonario'],
    };
})();
(function () {
    var hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper veloz'],
    };
    hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerte'],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper veloz'],
    };
    var superMan = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerte'],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myVariable = 'leo';
    myVariable = 31;
    myVariable = {
        name: 'leo',
        age: 31,
        powers: ['ninguno'],
    };
})();
(function () {
    var z = 123;
    z = 'hola';
    z = 'hola';
    console.log(z.charAt(0));
    z = 1129.909;
    console.log(z.toFixed(2));
})();
(function () {
    (function () {
        var batman = 'Bruce';
        var superman = 'Clark';
        var existe = false;
        var parejaHeroes = [batman, superman];
        var villano = ['Lex Lutor', 5, true];
        var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
        var powerHero;
        (function (powerHero) {
            powerHero[powerHero["aquaman"] = 0] = "aquaman";
            powerHero[powerHero["batman"] = 1] = "batman";
            powerHero[powerHero["flash"] = 5] = "flash";
            powerHero[powerHero["superMan"] = 100] = "superMan";
        })(powerHero || (powerHero = {}));
        var fuerzaFlash = powerHero.flash;
        var fuerzaSuperman = powerHero.superMan;
        var fuerzaBatman = powerHero.batman;
        var fuerzaAcuaman = powerHero.aquaman;
        function activar_batiseñal() {
            return 'activada';
        }
        function pedir_ayuda() {
            console.log('Auxilio!!!');
        }
        var poder = '100';
        var largoDelPoder = poder.length;
        console.log(largoDelPoder);
    })();
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbers2 = [1, 2, 3, 4, '5', 6, 7, 8, 9];
    var numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbers4 = [1, 2, 3, 4, '5', 6, 7, 8, 9];
    var name = ['juan', 'camilo', 'gabriel'];
    name.forEach(function (nombre) { return console.log(nombre.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = true;
    isSuperman = true && false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["mid"] = 1] = "mid";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.mid;
    console.log(currentAudio);
    console.log(AudioLevel);
    var AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["min"] = 1] = "min";
        AudioLevel2[AudioLevel2["mid"] = 2] = "mid";
        AudioLevel2[AudioLevel2["max"] = 10] = "max";
    })(AudioLevel2 || (AudioLevel2 = {}));
})();
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
(function () {
    var nada = undefined;
    console.log(nada);
    var nada2 = null;
    console.log(nada2);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = 'Linterna Verde';
    var volcanNegro = "Volcan Negro";
    console.log("I'm " + batman);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Caracter no existente');
})();
(function () {
    var hero = ['hola', 20];
    var hero2 = ['hola', 20, true];
    hero[0] = 'HI';
    hero[1] = 50;
    var mutable;
    mutable = ['Hola', ['hola']];
})();
(function () {
    function callBatman() {
    }
    var a = callBatman();
    console.log(a);
    var callSuperMan = function () {
    };
})();
//# sourceMappingURL=main.js.map