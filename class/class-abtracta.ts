(() => {
  // una clase abstract sirve para implementar otras clases asegurandose que tengan lo que nosotros esperamos
  class Mutante {
    constructor(public name: string, public realName: string) {}
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

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  const magneto: Xmen = new Xmen('Magneto', 'Magnus');

  const printName = (character: Mutante) => {
    console.log(character.name);
  };
  printName(wolverine);
  printName(magneto);
})();
