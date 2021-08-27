(() => {
  let hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper veloz'],
  };
  // hero = 10  // me arroja error por que TS infiere a hero como un type con la spropiedades anteriormente nombradas
  // hero = {
  //   name2
  // } error igualmente
  hero = {
    name: 'Brus Waney',
    age: 44,
    powers: ['Millonario'],
  }; // si me lo toma por que estan las propiedades igual y con lo stipos iguales
})();

(() => {
  // A diferencia of the functions no importa el orden de sus props si son obligatorias u optional, se recomienda que sean de a-  z
  let hero: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper veloz'],
  };

  hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper fuerte'],
    getName() {
      return this.name;
    },
  };
})();
