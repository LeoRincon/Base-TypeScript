(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myVariable: string | number | Hero = 'leo';
  myVariable = 31;
  myVariable = {
    name: 'leo',
    age: 31,
    powers: ['ninguno'],
  };
})();
