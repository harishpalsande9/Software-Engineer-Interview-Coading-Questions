function outer() {
    let name = "Harish";
  
    function inner() {
        // let age = 23
      console.log("Hello " + name);
    }
  
    // console.log(age)
    return inner;
  }
  
  const greet = outer(); 
  greet(); 
  