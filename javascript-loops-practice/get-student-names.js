/* exported getStudentNames */
function getStudentNames(students) {
  var studentArr = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    // eslint-disable-next-line dot-notation
    studentArr.push(student.name);
  }
  return studentArr;
}
