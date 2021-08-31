(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(name: string): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis(name);
      }

      return Apocalipsis.instance;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis('hola');
  const apocalipsis2 = Apocalipsis.callApocalipsis('dos');
  const apocalipsis3 = Apocalipsis.callApocalipsis('tres');

  // console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
