function addNumbers(numbers) {

let sumOfNumbers = 0;

numbers.forEach(function(number){

  sumOfNumbers+=number;
});

return sumOfNumbers;
}
module.exports = addNumbers;
