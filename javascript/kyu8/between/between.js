import html from './between.html?raw';

export const between = (num1, num2) => {
  const result = [];
  let counter = num1;
  while (counter <= num2) {
    result.push(counter);
    counter++;
  }
  
  return result;
};

export const htmlBetween = document.createElement('div');
htmlBetween.innerHTML = html;
