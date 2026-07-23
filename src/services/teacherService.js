import * as teacherRepository from "../repositories/teacherRepository.js";


export const getAllTeachers = async()=>{
    return await teacherRepository.getAllTeachers();
};


export const getTeacherById = async(id)=>{
    return await teacherRepository.getTeacherById(id);
};


export const createTeacher = async(data)=>{
    return await teacherRepository.createTeacher(data);
};


export const updateTeacher = async(id,data)=>{
    return await teacherRepository.updateTeacher(id,data);
};


export const deleteTeacher = async(id)=>{
    return await teacherRepository.deleteTeacher(id);
};