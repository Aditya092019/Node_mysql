const Student = require('./studentModel');
const Department = require('./department');
const courses = require('./courses');
const studentCourses = require('./studentCourses');

Department.hasMany(Student);
Student.belongsTo(Department);

Student.belongsToMany(courses,{through:studentCourses});
courses.belongsToMany(Student,{through:studentCourses});

module.exports = {
    Student,
    Department,
    courses,
    studentCourses
}