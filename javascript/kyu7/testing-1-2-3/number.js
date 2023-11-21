const number = (array) => 
    array.map((element, index) => `${index + 1}: ${element}`);


console.log(number(['a', 'b', 'c']));