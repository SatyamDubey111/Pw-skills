function outerFunction(outerParam) {
    let outerVariable = "I'm a variable inside outerFunction";
  
    // Inner function (closure)
    function innerFunction() {
      console.log("outerParam:", outerParam);
      console.log("outerVariable:", outerVariable);
    }
  
    // Return the inner function (without calling it yet)
    return innerFunction;
  }
  
  // Call outerFunction and store the returned inner function
  const closureFunc = outerFunction("Hello from outerParam");
  
  // Now call the returned function
  closureFunc();
  