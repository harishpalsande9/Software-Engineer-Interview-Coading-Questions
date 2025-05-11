// Promise chaining is the process of 
// linking multiple .then() methods so 
// that the result of one promise is 
// passed to the next then method 
// in a sequence.
function add(num) {
  return new Promise((resolve, reject) => {
    resolve(num + 10);
  });
}

function subtract(num) {
  return new Promise((resolve, reject) => {
    resolve(num - 5);
  });
}

// Chaining the promises
const num2 = "5"
add(num2)
  .then((result) => {
    console.log("After addition:", result); // 15
    return subtract(result);
  })
  .then((result) => {
    console.log("After subtraction:", result); // 25
  })
  .catch((err) => {
    console.error("Something went wrong:", err);
  });
