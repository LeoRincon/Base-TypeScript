(() => {
  //
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súper veloz'],
  };

  let superMan: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper fuerte'],
    getName() {
      return this.name;
    },
  };
})();
