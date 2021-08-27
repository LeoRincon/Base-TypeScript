(() => {
  // param default
  // cuando los args son optional deben ir a l final de
  const fullName = (
    firstName: string,
    upper: boolean = false, // al poner el value for default el tipy of data is optional
    lastName?: string
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || '-------'}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || '-------'}`;
    }
  };

  const name = fullName('leo', true);
  console.log(name);
})();
