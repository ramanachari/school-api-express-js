import * as classRepository from "../repositories/classRepository.js";
import * as studentRepository from "../repositories/studentRepository.js";
import * as teacherRepository from "../repositories/teacherRepository.js";
import ClassModel from "../models/Class.js";
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";

export const getAllClasses = async () => {
    return await classRepository.getAllClasses();
};


export const getClassById = async (id) => {
    return await classRepository.getClassById(id);
};


export const createClass = async (data) => {
    return await classRepository.createClass(data);
};


export const updateClass = async (id,data) => {
    return await classRepository.updateClass(id,data);
};


export const deleteClass = async (id) => {
    return await classRepository.deleteClass(id);
};

export const getClassDetails = async (id) => {


    const classData =
        await classRepository.getClassById(id);


    if (!classData) {
        return null;
    }


    const teachers =
        await teacherRepository.getTeachersByClassId(id);


    const students =
        await studentRepository.getStudentsByClassId(id);



    // Create Class Model

    const classModel = new ClassModel(
        classData.ClassId,
        classData.ClassName,
        classData.Section
    );



    // Add Teacher Models

    classModel.teachers =
        teachers.map(t => {

            return new Teacher(
                t.TeacherId,
                t.TeacherName,
                t.Subject
            );

        });



    // Add Student Models

    classModel.students =
        students.map(s => {

            return new Student(
                s.StudentId,
                s.StudentName,
                s.Age
            );

        });



    return classModel;
};