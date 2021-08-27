(() => {
  // param obligatorios
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName('leo', 'rincon');
  console.log(name);
})();
