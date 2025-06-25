// Initial array of students
const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "C" }
  ];
  
  // Display all students
  function displayStudents() {
    console.log("Current Students:");
    students.forEach(student => {
      console.log(`${student.id}: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
  }
  
  // Add a new student
  function addStudent(newStudent) {
    students.push(newStudent);
    console.log(`Student ${newStudent.firstName} added.`);
  }
  
  // Update a student by ID
  function updateStudent(id, updatedInfo) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students[index] = { ...students[index], ...updatedInfo };
      console.log(`Student with ID ${id} updated.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // Delete a student by ID
  function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      const removed = students.splice(index, 1);
      console.log(`Student ${removed[0].firstName} removed.`);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }
  
  // ======== Example Usage ========
  
  displayStudents();
  
  addStudent({ id: 4, firstName: "Alice", lastName: "Brown", age: 21, grade: "B+" });
  displayStudents();
  
  updateStudent(2, { age: 23, grade: "A" });
  displayStudents();
  
  deleteStudent(1);
  displayStudents();
  