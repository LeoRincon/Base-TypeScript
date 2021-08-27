(() => {
  let isSuperman: boolean = true;
  // isSuperman = undefined == error
  let isBatman: boolean = true;

  isSuperman = true && false; // acepta una expresion boolean

  isSuperman = isBatman ? true : false;

  console.log({ isSuperman }); // en {} cuando que quiero que me imprima por consola clave valor
})();
