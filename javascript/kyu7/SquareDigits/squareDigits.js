const squareDigits = (num) => {
  const newArr = String(num)
    .split("")
    .map((num) => {
      return num * num;
    });
  let newNumber = "";

  for (let i = 0; i < newArr.length; i++) {
    newNumber += newArr[i];
  }

  return Number(newNumber);
};

console.log(squareDigits(3212));
