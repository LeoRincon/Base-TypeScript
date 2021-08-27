(() => {
  let z: any = 123;
  z = 'hola'; // le decimos que rebiva cualquier cosa

  z = 'hola';
  console.log((z as string).charAt(0));

  z = 1129.909;
  console.log(<number>z.toFixed(2));
})();
