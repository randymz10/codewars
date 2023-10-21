export const capitals = (word) => {
  const indexes = [];
  [...word].forEach((letter) => {
    if (letter === letter.toUpperCase()) {
      indexes.push(word.indexOf(letter));
    }
  });
  return indexes;
};
