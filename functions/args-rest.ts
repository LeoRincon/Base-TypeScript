(() => {
  //pasamos pro args el resto de args que puedan venir en la fn
  const fullName = (firstName: string, ...restargs: string[]): string => {
    return `${firstName} ${restargs.join(' ')}`;
  };

  const superMan = fullName('Clark', 'Joseph', 'Kent');
  console.log(superMan);
})();
