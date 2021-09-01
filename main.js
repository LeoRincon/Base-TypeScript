"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper veloz'],
    };
    let superMan = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper fuerte'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutanPower(id) {
            return this.name + '' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'leo',
        age: 31,
        address: {
            id: 125,
            zip: 'HYG',
            city: 'Ottawa',
        },
        getFullAddress(id) {
            var _a;
            return `id ${(_a = this.address) === null || _a === void 0 ? void 0 : _a.city}`;
        },
    };
    const client2 = {
        name: 'Isa',
        age: 4,
        address: {
            id: 125,
            zip: 'HYG',
            city: 'Ottawa',
        },
        getFullAddress(id) {
            var _a;
            return `id ${(_a = this.address) === null || _a === void 0 ? void 0 : _a.city}`;
        },
    };
})();
(() => {
    let sum;
    sum = (a, b) => {
        return a + b;
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log('...... gogogo!!!');
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log('JAJAJAJA');
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`hola soy ${this.nombre}`);
    }
}
const Leo = new Persona('leo', 31, 'hombre', 'casado');
//# sourceMappingURL=main.js.map