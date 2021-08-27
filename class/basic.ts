(() => {
  // froma basic
  class Avengers {
    private name: string = 'No name';
    public team: string = 'Sin equipo';
    public realName?: string = 'Nombre real';
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      (this.name = name), (this.team = team), (this.realName = realName);
    }
  }

  const atman: Avengers = new Avengers('Viuda Negra', 'Cap America', 'Natasha');
  console.log(atman);

  //* forma corta
  class Avengers2 {
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name; // avengers2
    }

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    //method
    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const atman2: Avengers2 = new Avengers2('Atman', 'Cap America', 'Scott');
  console.log(atman2.bio());
})();
