(() => {
  //! never es una fn que no sale exitosa, luego de llamarla no seguira el code.

  const error = (message: string): never => {
    throw new Error(message);
  };

  error('aux');

  //! especificamos a la fn que o se rompe o regresa un numero.
  const error2 = (message: string): never | number => {
    if (false) {
      throw new Error(message);
    }
    return 1;
  };

  error2('aux');
})();
