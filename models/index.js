const Student = require('./studentModel');
const Department = require('./department');

Department.hasMany(Student);
Student.belongsTo(Department);

module.exports = {
    Student,
    Department
}