(() => {
  const hero: [string, number] = ['hola', 20]; //tuple establecemos que el primner valor es string y el segundo number
  const hero2: [string, number, boolean] = ['hola', 20, true]; //tuple establecemos que el primner valor es string y el segundo number el tercero es boolean y puedes crear cuantos quieras.

  hero[0] = 'HI';
  hero[1] = 50;

  let mutable: [string, string[]];

  mutable = ['Hola', ['hola']];
})();
