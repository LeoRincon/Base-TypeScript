(() => {
  //type inferido

  const batman: string = 'Batman';
  const linternaVerde: string = 'Linterna Verde';
  const volcanNegro: string = `Volcan Negro`;

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());
  console.log(batman[10]?.toUpperCase() || 'Caracter no existente'); //con el ? lo que decimos es que si exioste el caracter 11 en la variable batman que haga el toUpperCase, de lo contrarrio no haga nada.
})();
