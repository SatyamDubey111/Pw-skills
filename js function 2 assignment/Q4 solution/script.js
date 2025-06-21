// Function to match pattern and extract groups
function extractGroups(pattern, inputString) {
    const regex = new RegExp(pattern);
    const match = regex.exec(inputString);
  
    if (match) {
      // Remove the full match (match[0]) and return only capturing groups
      return match.slice(1);
    } else {
      return null; // No match found
    }
  }
  
  // Example pattern to capture day, month, year (supports - or / as separator)
  const datePattern = "(\\d{2})[-/](\\d{2})[-/](\\d{4})";
  
  // Test string
  const testString = "Today's date is 21-06-2025.";
  
  // Call function
  const result = extractGroups(datePattern, testString);
  
  // Output the result
  if (result) {
    console.log("Day:", result[0]);
    console.log("Month:", result[1]);
    console.log("Year:", result[2]);
  } else {
    console.log("No date found in the input string.");
  }
  