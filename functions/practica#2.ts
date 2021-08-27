(() => {
  const sumar: (a: number, b: number) => number = (a: number, b: number) =>
    a + b;

  function sum(a: number, b: number): number {
    return a + b;
  }
  //funciones basic
  const contar: (a: string[]) => number = (heroes: string[]) => {
    return heroes.length;
  };

  const superHeroes: string[] = ['Batman', 'Super Man', 'Arrow'];
  contar(superHeroes);

  //args for default
  const callBatman: (a?: boolean) => void = (call?: boolean) => {
    if (call) {
      console.log('batiseñal active');
    }
  };
  const callBatman2 = (call: boolean = true) => {
    if (call) {
      console.log('batiseñal active');
    }
  };
  callBatman();
  callBatman2();

  //rest
  const unirHeroes = (...personas: string[]): string => personas.join(', ');

  // Tipo de Function
  const noHaceNada = (
    numero: number,
    texto: string,
    boolean: boolean,
    array: string[]
  ) => {};

  //Acepta a fn noHaceNada

  let noHaceNadaTampoco: (
    a: number,
    b: string,
    c: boolean,
    d: string[]
  ) => void;

  noHaceNadaTampoco = noHaceNada;
})();
