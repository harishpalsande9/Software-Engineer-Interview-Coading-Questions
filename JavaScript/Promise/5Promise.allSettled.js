//"Promise.allSettled runs all promises
//and gives the result of each —
//whether they succeeded or failed."
const pro1 = Promise.resolve("Success 1");
const pro2 = Promise.reject("Error 2");
const pro3 = Promise.resolve("Success 3");

Promise.allSettled([pro1, pro2, pro3]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(
        `Promise ${index + 1} Success with:`,
        result.value
      );
    } else {
      console.log(
        `Promise ${index + 1} Error with:`,
        result.reason
      );
    }
  });
});
