(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let sum: addTwoNumbers;

  sum = (a: number, b: number) => {
    return a + b;
  };

  // console.log(sum(2, 3));
})();
