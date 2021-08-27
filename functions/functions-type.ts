(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta a salvo`;

  let myFunction: Function;
  let myFunction2: (y: number, z: number) => number;
  let myFunction3: (y: string) => string;
  let myFunction4: () => string;
  //* myFunction = 10 no permite valores si no es una fn

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  myFunction2 = addNumbers;
  console.log(myFunction2(1, 2));

  myFunction3 = greet;
  console.log(myFunction3('leo'));

  myFunction4 = saveTheWorld;
  console.log(myFunction4());
})();
