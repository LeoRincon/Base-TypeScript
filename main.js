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
    console.log(atman);
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
    console.log(atman2.bio());
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
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.getFullNameDesdeXmen();
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
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.getFullNameDesdeXmen();
    console.log('get>>>', wolverine.fullName);
    wolverine.fullName = 'leo';
    console.log('set>>>', wolverine.fullName);
})();
//# sourceMappingURL=main.js.map