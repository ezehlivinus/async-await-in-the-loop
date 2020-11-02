/**
 * By using promise.all(), when iterating through the element of the array or object keys
 * if an error occurs, everything will be rejected
 */

// Here will want to filter all even numbers
Promise.all(
  numbers.filter((number) => {
    const even = number % 2 === 0;
    if (even) return number;
  })
)
  .then((evenNumbers) => {
    // You can continue working with the filtered numbers now even numbers
    console.log(evenNumbers);
  })
  .catch((error) => {
    console.log(error);
  });
  
