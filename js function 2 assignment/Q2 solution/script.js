// Function that checks if the pattern matches the string
function testRegex(pattern, inputString) {
    const regex = new RegExp(pattern); // Create regex object
    return regex.test(inputString);    // Returns true or false
  }
  
  // Test cases
  console.log(testRegex("hello", "hello world"));      // true
  console.log(testRegex("^hi", "hi there"));           // true
  console.log(testRegex("bye$", "say goodbye"));       // true
  console.log(testRegex("\\d+", "The price is 100"));  // true (matches numbers)
  console.log(testRegex("cat", "The dog is here"));    // false
  