"use strict";
(() => {
    class Avengers {
        constructor(name, team, realName) {
            this.name = 'No name';
            this.team = 'Sin equipo';
            this.realName = 'Nombre real';
            (this.name = name), (this.team = team), (this.realName = realName);
        }
    }
    Avengers.avgAge = 35;
    const atman = new Avengers('Viuda Negra', 'Cap America', 'Natasha');
    class Avengers2 {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avengers2.avgAge = 35;
    const atman2 = new Avengers2('Atman', 'Cap America', 'Scott');
})();
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        saveWorld() {
            return 'Mundo salvado';
        }
    }
    class Villian extends Mutante {
        conquistarWorld() {
            return 'Mundo Conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Xmen('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avengers {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('contructor del Avengers llamado');
        }
        getFullName() {
            return `${this.name} (${this.realName})`;
        }
    }
    class Xmen extends Avengers {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.name = name;
            this.realName = realName;
            this.isMutant = isMutant;
            console.log('constructor de Xmen');
        }
        getFullNameDesdeXmen() {
            console.log('>>>>>', super.getFullName());
        }
    }
})();
(() => {
    class Avengers {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('contructor del Avengers llamado');
        }
        getFullName() {
            return `${this.name} (${this.realName})`;
        }
    }
    class Xmen extends Avengers {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.name = name;
            this.realName = realName;
            this.isMutant = isMutant;
            console.log('constructor de Xmen');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log('>>>>>', super.getFullName());
        }
    }
})();
(() => {
    class name {
        constructor(parameters) { }
    }
})();
//# sourceMappingURL=main.js.map