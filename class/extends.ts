(() => {
  class Avengers {
    constructor(public name: string, public realName?: string) {
      console.log('contructor del Avengers llamado');
    }

    //method
    protected getFullName() {
      // permite aceder a propiedades o metodos que extiendan de la clase padre
      return `${this.name} (${this.realName})`;
    }
  }

  class Xmen extends Avengers {
    constructor(
      public name: string,
      public realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
      console.log('constructor de Xmen');
    }

    public getFullNameDesdeXmen() {
      console.log('>>>>>', super.getFullName()); // como extiende de avenger puede usar el metodo
    }
  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);
  // wolverine.getFullNameDesdeXmen();
})();
