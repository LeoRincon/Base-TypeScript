(() => {
  class Avengers {
    constructor(public name: string, public realName?: string) {
      console.log('contructor del Avengers llamado');
    }

    protected getFullName() {
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

    //* Puede haber logica en los get y set que condicionen su ejecucion
    public get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    public set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe ser mayor a 3 caracteres');
      }
      this.name = name;
    }

    public getFullNameDesdeXmen() {
      console.log('>>>>>', super.getFullName());
    }
  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);
  // wolverine.getFullNameDesdeXmen();
  // console.log('get>>>', wolverine.fullName);
  // wolverine.fullName = 'leo';
  // console.log('set>>>', wolverine.fullName);
})();
