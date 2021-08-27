(() => {
  class Avenger {
    name;
    power;

    constructor(name = 'Sin nombre', power = 0) {
      // es lo que se ejecuta al hacer el llamado de la clase
      this.name = name;
      this.power = power;
    }
  }

  class flyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }
  const hulk = new Avenger('Hulk', 90000);
  const falcon = new flyingAvenger('Falcon', 50);
  console.log(hulk);
  console.log(falcon);
})();
