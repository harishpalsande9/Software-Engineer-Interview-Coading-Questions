//"Promise.race returns the result of the 
// first promise to settle — whether it 
// resolves or rejects."
const fast = new Promise((resolve) =>
  setTimeout(() => resolve("Fast"), 1000)
);

const slow = new Promise((resolve) =>
  setTimeout(() => resolve("Slow"), 2000)
);

const fail = new Promise((_, reject) =>
  setTimeout(() => reject("Error"), 3000)
);

Promise.race([fast, slow, fail])
  .then((result) => {
    console.log("Race resolved with:", result);
  })
  .catch((error) => {
    console.log("Race rejected with:", error);
  });
