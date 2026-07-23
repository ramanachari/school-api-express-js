import * as studentRepository from "../repositories/studentRepository.js";


export const getAllStudents = async () => {
    return await studentRepository.getAllStudents();
};


export const getStudentById = async (id) => {
    return await studentRepository.getStudentById(id);
};


export const createStudent = async (student) => {
    return await studentRepository.createStudent(student);
};


export const updateStudent = async (id, student) => {
    return await studentRepository.updateStudent(id, student);
};


export const deleteStudent = async (id) => {
    return await studentRepository.deleteStudent(id);
};