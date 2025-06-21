// Function to search for character class matches
function findCharacterClassMatches(pattern, inputString) {
    const regex = new RegExp(pattern, "g"); // 'g' flag for global matching
    return inputString.match(regex) || [];  // Return matches or empty array
  }
  
  // Test string
  const testString = "Hello123@#WORLD";
  
  // Test patterns
  const digits = "\\d";           // Matches digits (0–9)
  const uppercase = "[A-Z]";      // Matches uppercase letters
  const lowercase = "[a-z]";      // Matches lowercase letters
  const specialChars = "[^A-Za-z0-9]"; // Matches special characters
  
  // Run tests
  console.log("Digits:", findCharacterClassMatches(digits, testString));
  console.log("Uppercase Letters:", findCharacterClassMatches(uppercase, testString));
  console.log("Lowercase Letters:", findCharacterClassMatches(lowercase, testString));
  console.log("Special Characters:", findCharacterClassMatches(specialChars, testString));
  