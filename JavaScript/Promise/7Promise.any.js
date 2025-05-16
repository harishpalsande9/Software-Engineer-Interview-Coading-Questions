//"Promise.any returns the first successfully
//resolved promise. It ignores rejections 
//unless all fail."
const p1 = Promise.reject("Error 1");
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Success 2"), 300)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Success 3"), 500)
);

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log("resolved with:", result);
  })
  .catch((error) => {
    console.log("All promises failed:", error);
  });
