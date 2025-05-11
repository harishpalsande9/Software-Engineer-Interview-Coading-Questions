// Error propagation is the process
// by which an error in a promise chain
// is automatically passed down to the
// nearest .catch() handler.

function add(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Input must be a number ");
    } else {
      resolve(num + 10);
    }
  });
}

function subtract(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Input must be a number ");
    } else {
      resolve(num - 5);
    }
  });
}

// Chaining with error propagation
add("5") // Passing string instead of number
  .then((result) => {
    console.log("After addition:", result);
    return subtract(result);
  })
  .then((result) => {
    console.log("After subtraction:", result);
  })
  .catch((err) => {
    console.error("Something went wrong:", err);
  });
