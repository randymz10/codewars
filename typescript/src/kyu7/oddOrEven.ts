export const oddOrEven = (array: number[]): string => {
  let sum: number = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum % 2 === 0 ? "odd" : "even";
};
