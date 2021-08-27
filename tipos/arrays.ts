(() => {
  // limitara los arrays a los tipos de datos especificados o diferidos
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // infiere el tipo a number[]

  const numbers2 = [1, 2, 3, 4, '5', 6, 7, 8, 9]; // infiere el type a (string \ number) []

  //! indicamos especificamente el valor
  const numbers3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //

  const numbers4: (number | string)[] = [1, 2, 3, 4, '5', 6, 7, 8, 9];

  const name: string[] = ['juan', 'camilo', 'gabriel'];

  name.forEach((nombre) => console.log(nombre.toUpperCase())); // el forEach detecta el tipo de datos que tiene el array.
})();
