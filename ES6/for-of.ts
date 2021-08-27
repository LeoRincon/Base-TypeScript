(() => {
  type Hero = {
    name: string;
    weapon: string;
  };

  const ironMan: Hero = {
    name: 'Tony',
    weapon: 'ArmorSuit',
  };
  const CapAmerica: Hero = {
    name: 'Stive',
    weapon: 'Escudo',
  };
  const thor: Hero = {
    name: 'Thor',
    weapon: 'Mjolnir',
  };

  const arrs: Hero[] = [ironMan, CapAmerica, thor];

  for (const arr of arrs) {
    console.log(arr);
  }
})();
