
const Course = require('../models/courses');
const Student = require('../models/studentModel');

const addCourse = async (req,res)=>{
    try{
       const {name} = req.body;
       const course = await Course.create({'name':name});
       res.status(201).json(course);
    }catch(error){
       res.status(500).json({'error':error.message});
    }
}
const addStudentsToCourses = async (req, res) => {
    try {
        const { studentId, courseIds } = req.body;
        const student = await Student.findByPk(studentId);
        if (!student) {
            return res.status(404).json({
                message: `Student with ID ${studentId} not found`
            });
        }
        const courses = await Course.findAll({
            where: {
                id: courseIds
            }
        });
        if (courses.length === 0) {
            return res.status(404).json({
                message: "No courses found"
            });
        }
        await student.addCourses(courses);
        const updatedStudent = await Student.findByPk(studentId, {
            include: Course
        });
        res.status(200).json(updatedStudent);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Unable to add courses to student",
            error: error.message
        });
    }
};


module.exports = {addCourse,addStudentsToCourses};