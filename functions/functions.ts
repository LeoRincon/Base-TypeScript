(() => {
  const hero: string = 'hola';

  function returnNmae(): string {
    return hero;
  }

  const greetings = (): string => {
    return 'hola';
  };

  const heroName = returnNmae(); // infiere el tipo de dato que retorna la fn
})();
