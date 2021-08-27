(() => {
  // param optionals con el ? le ponemos que es un arg optional
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || 'No last name'}`;
  };

  const name = fullName('leo');
  console.log(name);
})();
