function addOne(numbers) {

  const numbersPlusOne = numbers.map(function(number){

    return number+1
  });

  return numbersPlusOne;
};

module.exports = addOne;
