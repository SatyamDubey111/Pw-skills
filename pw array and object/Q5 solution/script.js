// Sample student object
const student = {
    id: 1001,
    firstName: "Aman",
    lastName: "Sharma",
    age: 22,
    grade: "A",
    course: "MCA"
  };
  
  // Function to display student information
  function displayStudentInfo(studentObj) {
    console.log("Student Information:");
    for (let key in studentObj) {
      console.log(`${key}: ${studentObj[key]}`);
    }
  }
  
  // Call the function
  displayStudentInfo(student);
  