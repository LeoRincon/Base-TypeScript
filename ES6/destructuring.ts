(() => {
  type PersonMarvel = {
    nick: string;
    ironMan: string;
    vision: string;
    activo: boolean;
    poder: number;
  };
  const avergens: PersonMarvel = {
    nick: 'Samuel L. Jackson',
    ironMan: 'Robert',
    vision: 'Paul',
    activo: true,
    poder: 1500,
  };

  const { poder, vision } = avergens;

  console.log(poder, vision.toUpperCase());

  const printAvenger = ({ vision, ironMan, ...others }: PersonMarvel) => {
    console.log(vision, ironMan, others);
  };

  printAvenger(avergens);
})();
