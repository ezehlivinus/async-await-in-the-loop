/**
 * Here we will be using async/wait together with promise.all()
 * Do note that the filter() can be swapped with any other iterator like map() that returns a value
 * forEach() won't work because because it return undefined.
 * To change it to map or any other iterator you need to do some work arround inside the function it self 
 * to avoid it returning undefind
 */
 
 // generate number from 0 to 29
const numbers = [...Array(30).keys()];

console.log(numbers); // [0, 1, 2, ... 27, 28, 29]

const someFunction = async () => {
  return await Promise.all(
    numbers.filter((number) => {
      const even = number % 2 === 0;
      if (even) return number;
    })
  )
    .then((evenNumbers) => {
      // return the value back to its caller
      return evenNumbers;
    })
    .catch((error) => {
      throw Error(err);
      console.log(error);
    });
};

const useEvenNumber = async () => {
  const evenNumbers = await someFunction();
  console.log(evenNumbers);
};

useEvenNumber();

/****************************************/
// Cleaning the code/functions above we get
const someFunction = async () => Promise.all(
  numbers.filter((number) => {
    const even = number % 2 === 0;
    if (even) return number;
  })
)
  .then((evenNumbers) => evenNumbers)
  .catch((error) => {
    throw Error(error);
    console.log(error);
  });

const useEvenNumber = async () => {
  const evenNumbers = await someFunction();
  console.log(evenNumbers);
};

useEvenNumber();

