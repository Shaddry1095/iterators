//iterator help loop thru arrays


//the .forEach() ittorator will execute the same code for every element in an array.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitItem){
  console.log('I want to eat a ' + fruitItem)
})


//The .map() ittorator will take an argument of a callback frunction and retunr a new array
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0]
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100
})

console.log(smallNumbers)


//The .filter() iterator retuns a new array after filtering out certain elements out the array
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallerNumbers = randomNumbers.filter(numbers =>{
  return numbers < 250;
})
console.log(smallerNumbers)


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(words =>{
  return words.length > 7;
})

console.log(longFavoriteWords)

//Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
const animalsYeah = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalsYeah.findIndex(animal =>{
  return animal === 'elephant';
})

console.log(foundAnimal)

const startsWithS = animalsYeah.findIndex(animal =>{
  return animal[0] == 's'
})

console.log(startsWithS)

//.reduce() method returns a single value after iterating through the elements of an array
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word =>{
  return word.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every((word) => {
   return word.length > 5;
  } ));


  const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
// OR nums.some(num => num < 0);


