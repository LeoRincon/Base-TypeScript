(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutanPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {}

    mutanPower(id: number) {
      return this.name + '' + this.realName;
    }
  }

  //Crear instancia de la clase Mutant que implementa de dos interfaces
  // const villian1 = new Mutant(32, 'Dazzler', 'Alison Blaire');
  // console.log(villian1);
  // console.log(villian1.mutanPower(1));
})();
